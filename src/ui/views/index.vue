<script setup lang="ts">
import ParticlesBg from '../components/backgrounds/particlesBg/ParticlesBg.vue';
</script>

<template>
  <div class="w-full">
    <div
      class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden"
    >
      <span
        class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent"
      >
        AUST-Physics-Electron
      </span>
      <ParticlesBg
        class="absolute inset-0"
        :quantity="100"
        :ease="100"
        :staticity="10"
        refresh
      />
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
