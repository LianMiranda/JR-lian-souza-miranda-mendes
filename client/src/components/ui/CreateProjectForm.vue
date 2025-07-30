<script setup lang="ts">
import axios from 'axios';
import Button from '../common/Button.vue';
import { ref } from 'vue';
import router from '@/router';

const name = ref('');
const description = ref('')
const loading = ref(false);

async function createProject() {
    if (!name.value.trim()) {
        alert('Por favor, preencha o campo "Nome"');
        return;
    }

    loading.value = true;
    try {
        await axios.post('/projects', {
            name: name.value.trim(),
            description: description.value.trim()
        });

        router.push("/")
    } catch (error) {
        console.error('Erro ao criar projeto:', error);
    } finally{
        loading.value = false;
    }
}

function handleSubmit(event: Event){
    event.preventDefault();
    createProject();
}

</script>

<template>
    <form @submit="handleSubmit" class="flex flex-col bg-dark h-full p-8 gap-5">
        <h2 class="text-2xl font-bold text-center text-black">Criar projeto</h2>

        <div>
            <label class="block mb-1 text-sm font-medium text-black">Nome</label>
            <input v-model="name" type="text" name="name" placeholder="Nome do projeto" required
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
            <label class="block mb-1 text-sm font-medium text-black">Descrição</label>
            <textarea v-model="description" name="description" placeholder="Descrição do projeto"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <Button customClass="cursor-pointer" type="submit" variant="primary" :disabled="loading">
           {{ loading ? 'Criando...' : 'Criar'}}
        </Button>
    </form>
</template>