<script setup lang="ts">
import Button from '@/components/common/Button.vue';
import Header from '@/components/ui/Header.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';

interface Project {
  id: string;
  name: string;
  description: string;
}

const projects = ref<Project[]>([]);

axios.get('projects').then((res) => {
  projects.value = res.data;
})

const router = useRouter();

function goToRegistration() {
  router.push('/create/project');
}

function goToProject(id: string) {
  router.push(`/projects/${id}`);
}

function updateProject(id: string) {
  router.push(`/update/project/${id}`)
}

async function deleteProject(id: string) {
  if (confirm('Tem certeza que deseja deletar este projeto?')) {
    await axios.delete(`/projects/${id}`);
    window.location.reload();
  }
}
</script>

<template>
  <Header />

  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <div class="container">
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Seus Projetos
            </h1>
            <p class="text-gray-600 mt-2 text-lg">
              Gerencie e organize todos os seus projetos em um só lugar
            </p>
          </div>
          <Button variant="primary" custom-class="flex gap-2" @click="goToRegistration">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Criar Projeto
          </Button>
        </div>
      </div>

      <div v-if="projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.id"
          class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
          @click="goToProject(project.id)">
          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {{ project.name }}
            </h3>
            <p class="text-gray-600 leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>
          </div>
          <div class="flex justify-end mb-2 gap-2">
            <button class="text-sm px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
              @click.stop="deleteProject(project.id)">
              Deletar
            </button>
            <button class="text-sm px-2 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition"
              @click.stop="updateProject(project.id)">
              Atualizar
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-16">
        <div class="max-w-md mx-auto">
          <h3 class="text-2xl font-bold text-black">Nenhum projeto encontrado</h3>
          <Button @click="goToRegistration">
            Crie Seu Primeiro Projeto
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-width: 100%;
  padding: 2%;
}
</style>