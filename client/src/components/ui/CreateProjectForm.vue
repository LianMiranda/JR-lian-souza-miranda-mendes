<script setup lang="ts">
import Button from '../common/Button.vue';

</script>

<template>
    <form class="flex flex-col bg-dark h-full p-8 gap-5">
        <h2 class="text-2xl font-bold text-center text-black">Cadastro</h2>

        <div>
            <label class="block mb-1 text-sm font-medium text-black">Nome</label>
            <input type="text" name="name" placeholder="Nome do projeto"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
            <label class="block mb-1 text-sm font-medium text-black">Descrição</label>
            <textarea name="description" placeholder="Descrição do projeto"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <Button type="submit" variant="primary">
            Criar
        </Button>
    </form>
</template>