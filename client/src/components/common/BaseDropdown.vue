<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from 'vue'

interface Option {
    label: string
    value: string | number
}

const props = defineProps<{
    label?: string
    options: Option[]
    modelValue?: string | number
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void
}>()

const isOpen = ref(false)
const selectedLabel = ref('')

watch(
    () => props.modelValue,
    (newVal) => {
        const selected = props.options.find((o) => o.value === newVal)
        selectedLabel.value = selected?.label || ''
    },
    { immediate: true }
)

function toggleDropdown() {
    isOpen.value = !isOpen.value
}

function selectOption(option: Option) {
    emit('update:modelValue', option.value)
    isOpen.value = false
}
</script>


<template>
    <div class="relative inline-block text-left">
        <button type="button" @click="toggleDropdown"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
            {{ selectedLabel || label }}
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div v-if="isOpen"
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <div class="py-1">
                <button type="button" v-for="option in options" :key="option.value" @click="selectOption(option)"
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {{ option.label }}
                </button>
            </div>
        </div>
    </div>
</template>
