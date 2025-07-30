<script setup lang="ts">
import axios from 'axios';
import Button from '../common/Button.vue';
import { ref } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';

const name = ref();
const description = ref()
const loading = ref(false);

const route = useRoute();

const projectId = route.params.id as string;

axios.get(`/projects/${projectId}`).then(res => {
    const data = res.data;
    name.value = data.name;
    description.value = data.description
})

async function updateProject() {
    loading.value = true;

    try {
        await axios.patch(`projects/${projectId}`, {
            name: name.value,
            description: description.value
        });

        router.back();
    } catch (error) {
        console.error('Erro ao atualizar projeto:', error);
    } finally {
        loading.value = false;
    }
}

function handleSubmit(event: Event) {
    event.preventDefault();
    updateProject();
}

</script>

<template>
    <form @submit="handleSubmit" class="flex flex-col bg-dark h-full px-36 gap-5">
        <h2 class="text-2xl font-bold text-center text-black">Atualizar</h2>

        <div>
            <label class="block mb-1 text-sm font-medium text-black">Nome</label>
            <input v-model="name" type="text" name="name" placeholder="Nome do projeto"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div>
            <label class="block mb-1 text-sm font-medium text-black">Descrição</label>
            <textarea v-model="description" name="description" placeholder="Descrição do projeto"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <Button customClass="cursor-pointer" type="submit" variant="primary" :disabled="loading">
            {{ loading ? 'Atualizando...' : 'Atualizar' }}
        </Button>
    </form>
</template>