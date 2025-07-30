<script setup lang="ts">
import Button from '@/components/common/Button.vue';
import Header from '@/components/ui/Header.vue';
import ProjectTasks from '@/components/ui/ProjectTasks.vue';
import router from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute();

const projectId = route.params.id;

function goToRegistrationTask(){
    router.push(`/project/${projectId}/create-task`)
}
</script>

<template>
    <Header />
   
        <main class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                <div class="container mb-8">
                    <div class="flex items-center justify-between">
                        <div>
                            <h1
                                class="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                Suas Tarefas
                            </h1>
                        </div>
                        <Button variant="primary" custom-class="flex gap-2" @click="goToRegistrationTask">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m8-8H4" />
                            </svg>
                            Criar uma tarefa
                        </Button>
                    </div>
                </div>
                <ProjectTasks />
            </main>
</template>