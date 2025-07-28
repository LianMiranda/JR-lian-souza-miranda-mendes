<template>
  <button
    :type="type"
    :class="[
      'px-4 py-2 rounded-lg font-semibold transition-colors duration-200',
      variantClass,
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      customClass
    ]"
    :disabled="disabled"
    @click="emitClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  customClass?: string;
}>();

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const emitClick = (event: MouseEvent) => {
  if (!props.disabled) emit('click', event);
};

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
    case 'danger':
      return 'bg-red-600 text-white hover:bg-red-700';
    case 'primary':
    default:
      return 'bg-blue-600 text-white hover:bg-blue-700';
  }
});
</script>
