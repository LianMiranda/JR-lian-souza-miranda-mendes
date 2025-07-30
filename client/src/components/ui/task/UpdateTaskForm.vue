<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import router from '@/router';
import BaseDropdown from '@/components/common/BaseDropdown.vue';
import Button from '@/components/common/Button.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const taskId = route.params.id;

const title = ref('');
const description = ref('')
const status = ref('')
const loading = ref(false);

const statusList = [
    { label: 'To do', value: 'todo' },
    { label: 'Doing', value: 'doing' },
    { label: 'Done', value: 'done' }
]

axios.get(`/tasks/${taskId}`).then(res => {
    const data = res.data;

    title.value = data.title;
    description.value = data.description
    status.value = data.status
})

async function updateTask() {
    loading.value = true;

    try {
        await axios.patch(`/tasks/${taskId}`, {
            title: title.value.trim(),
            description: description.value.trim(),
            status: status.value.trim(),
        });
        
        router.back();
    } catch (error) {
        console.error('Erro ao criar tarefa:', error);
    } finally {
        loading.value = false;
    }
}

function handleSubmit(event: Event) {
    event.preventDefault();
    updateTask();
}

</script>

<template>
    <form @submit="handleSubmit" class="px-36 flex flex-col bg-dark h-full gap-5">
        <h2 class="text-2xl font-bold text-center text-black">Atualizar Tarefa</h2>

        <div>
            <label class="block mb-1 text-sm font-medium text-black">Titulo</label>
            <input v-model="title" type="text" name="title" placeholder="Titulo da task" required
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
            <label class="block mb-1 text-sm font-medium text-black">Descrição</label>
            <textarea v-model="description" name="description" placeholder="Descrição do projeto"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
            <label class="block mb-1 text-sm font-medium text-black">Status</label>
            <BaseDropdown label="Selecionar Status" v-model="status" :options="statusList" />
        </div>

        <Button customClass="cursor-pointer" type="submit" variant="primary" :disabled="loading">
            {{ loading ? 'Atualizando...' : 'Atualizar' }}
        </Button>
    </form>
</template>