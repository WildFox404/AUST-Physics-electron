<template>
  <figure
    class="relative w-64 text-base-100 bg-primary cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] p-4 hover:bg-gray-950/[.05] dark:border-gray-50/[.1]"
    :class="colorClass"
  >
    <div class="flex flex-row items-center gap-2">
      <img
        :src="img"
        class="rounded-full"
        width="32"
        height="32"
        alt=""
      />
      <div class="flex flex-col">
        <span class="text-sm font-medium ">
          {{ name }}
        </span>
        <p class="text-xs font-medium ">{{ username }}</p>
      </div>
    </div>
    <blockquote class="mt-2 text-sm">{{ body }}</blockquote>
  </figure>
</template>

<script lang="ts" setup>
interface Props {
  img: string;
  name: string;
  username: string;
  body: string;
  colorClass: string;
}

defineProps<Props>();
</script>