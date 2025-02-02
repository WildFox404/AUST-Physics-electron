<script setup lang="ts">
import VortexBackground from '../../components/backgrounds/vortexBackground/VortexBackground.vue';
import { ref, watch } from 'vue';
import { useThemeStore } from '../../store/theme';
const themeStore = useThemeStore();
const colorBaseContent = ref(themeStore.getColorHex('--bc'));
const colorBase100 = ref(themeStore.getColorHex('--b1'));
const colorAccent = ref(themeStore.getColorHex('--a'));

watch(() => themeStore.theme, (newValue, oldValue) => {
  if(newValue !== oldValue) {
    colorBaseContent.value = themeStore.getColorHex('--bc');
    console.log('colorBaseContent.value', colorBaseContent.value);
    colorBase100.value = themeStore.getColorHex('--b1');
    colorAccent.value = themeStore.getColorHex('--a');
  }
}, { immediate: false });
</script>

<template>
  <div class="w-full h-[30rem] overflow-hidden">
    <VortexBackground
      class="flex  size-full flex-col items-center justify-center px-2 py-4 md:px-10"
    >
      <h2 class="text-center text-2xl font-bold text-white md:text-6xl">About Contributors</h2>
      <p class="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
        We are always looking for contributors to help us improve the project. If you are interested in contributing, please read the docs.
      </p>
    </VortexBackground>
  </div>
  <div class="w-full h-40 bg-gradient-to-b from-[#000] via-[#000] to-transparent">

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
