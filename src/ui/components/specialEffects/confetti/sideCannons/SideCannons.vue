<template>
  <div class="relative flex h-24 w-full flex-col items-center justify-center">
    <button
      class="btn btn-primary btn-sm transition duration-500 hover:scale-110"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import confetti from "canvas-confetti";
import { computed } from "vue";

const props = defineProps({
    colorPrimary: {
        type: String,
        default: "#a786ff",
    },
    colorSecondary: {
        type: String,
        default: "#fd8bbc",
    },
    colorAccent: {
        type: String,
        default: "#eca184",
    },
});

const colors = computed(() => {
    return [
        props.colorPrimary,
        props.colorSecondary,
        props.colorAccent,
    ];
});

// Function to trigger the confetti side cannons
function handleClick() {
  const end = Date.now() + 3 * 1000; // 3 seconds

  // Frame function to trigger confetti cannons
  function frame() {
    if (Date.now() > end) return;

    // Left side confetti cannon
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors.value,
    });
    console.log(colors.value);
    // Right side confetti cannon
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors.value,
    });

    requestAnimationFrame(frame); // Keep calling the frame function
  }

  frame();
}
</script>