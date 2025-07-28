<script setup lang="ts">
import Button from '@/components/common/Button.vue';
import Header from '@/components/ui/Header.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function goToRegistration() {
  router.push('/create/project');
}

</script>

<template>
  <main class="container">
    <Header />

    <div class="p-4">
      <Button variant="primary" @click="goToRegistration">
          Cadastrar
      </Button>
    </div>

  </main>
</template>
