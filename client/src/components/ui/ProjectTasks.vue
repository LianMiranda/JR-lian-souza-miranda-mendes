<script setup lang="ts">
import router from '@/router';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const projectId = route.params.id;

const loading = ref(false)

interface Task {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'doing' | 'done';
}

const columns = ref([
    { title: 'To do', status: 'todo', tasks: [] as Task[] },
    { title: 'Doing', status: 'doing', tasks: [] as Task[] },
    { title: 'Done', status: 'done', tasks: [] as Task[] },
]);

const fetchTasks = async () => {
    try {
        const response = await axios.get<Task[]>(`/tasks/project/${projectId}`);
        const tasks = response.data;

        console.log(tasks);


        columns.value.forEach(col => (col.tasks = []));

        tasks.forEach(task => {
            const column = columns.value.find(col => col.status === task.status);
            if (column) column.tasks.push(task);
        });
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
    }

};

async function updateTask(id: string) {
    router.push(`/update/task/${id}`)
}

async function deleteTask(id: string) {
    if (confirm('Tem certeza que deseja deletar este projeto?')) {
        loading.value = true
        await axios.delete(`/tasks/${id}`);
        window.location.reload();
    }
}

onMounted(fetchTasks)
</script>

<template>
    <div class="container flex gap-4 overflow-x-auto">
        <div v-for="(column, index) in columns" :key="index"
            class="bg-white rounded-2xl p-4 shadow-md w-70 flex-shrink-0">
            <h2 class="text-center text-lg font-semibold mb-4">{{ column.title }}</h2>
            <div class="flex flex-col gap-3">
                <div v-for="(task, tIndex) in column.tasks" :key="tIndex"
                    class="flex flex-col gap-2 bg-gray-100 p-3 rounded-lg shadow-sm">
                    <h3
                        class="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {{ task.title }}
                    </h3>
                    <p class="text-gray-600 leading-relaxed line-clamp-3">
                        {{ task.description }}
                    </p>
                    <div class="flex justify-end gap-2">
                        <button class="text-sm px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                            @click.stop="deleteTask(task.id)">
                            {{ loading ? 'Deletando' : 'Deletar' }}
                        </button>
                        <button class="text-sm px-2 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition"
                            @click.stop="updateTask(task.id)">
                            Atualizar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>