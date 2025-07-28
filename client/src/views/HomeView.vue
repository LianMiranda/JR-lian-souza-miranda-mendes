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

axios.get('projects').then((res) => projects.value = res.data);

const router = useRouter()

function goToRegistration() {
  router.push('/create/project');
}

function goToProject(id: string) {
  router.push(`/projects/${id}`);
}

</script>

<template>
  <Header />

  <div class="p-4">
    <h2 class="text-2xl text-black">Seus projetos:</h2>

    <div v-if="projects.length > 0" class="grid grid-cols-3 gap-5 !mt-6">
      <div v-for="project in projects" :key="project.id"
        class="border rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer transition duration-200 bg-white"
        @click="goToProject(project.id)">
        <h2 class="text-xl font-semibold text-gray-800">{{ project.name }}</h2>
        <p class="text-gray-600 mt-1">{{ project.description }}</p>
      </div>
    </div>

    <div v-else class="text-black">Nenhum projeto encontrado</div>

      <Button customClass="cursor-pointer !mt-6" variant="primary" @click="goToRegistration">
        Criar um projeto
      </Button>
  </div>
</template>
