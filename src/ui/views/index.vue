<script setup lang="ts">
import ParticlesBg from '../components/backgrounds/particlesBg/ParticlesBg.vue';
import BoxReveal from '../components/textAnimations/boxReveal/BoxReveal.vue';
import LD from "../utils/LD";
import { ref, watch } from "vue";
import { useThemeStore } from "../store/theme";

const colorPrimary = ref(LD.processOklchToHex('--p'));
const colorSecondary = ref(LD.processOklchToHex('--s'));
const colorAccent = ref(LD.processOklchToHex('--a'));
const themeStore = useThemeStore();
watch(() => themeStore.theme, (newValue, oldValue) => {
  if(newValue !== oldValue) {
    colorPrimary.value = LD.processOklchToHex('--p');
    colorSecondary.value = LD.processOklchToHex('--s');
    colorAccent.value = LD.processOklchToHex('--a');
  }
}, { immediate: false });
</script>

<template>
  <div class="w-full">
    <div
      class="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden"
    >
      <span
        class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-base-content to-base-100 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent"
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
    <!-- 使用说明标题 -->
    <div class="size-full max-w-lg items-center justify-center overflow-hidden p-8">
      <BoxReveal :color="colorPrimary">
        <p class="text-[3.5rem] font-semibold">Introduction<span class="text-accent">.</span></p>
      </BoxReveal>

      <BoxReveal
        :color="colorPrimary"
        :duration="0.8"
      >
        <h2 class="mt-[.5rem] text-[1rem]">
          Beautiful Physical Data Processing for
          <span class="text-accent">Vue &amp; Nuxt.</span>
        </h2>
      </BoxReveal>

      <BoxReveal
        :color="colorPrimary"
        :duration="1"
      >
        <div class="mt-6">
          <p>
            -&gt; Free and open-source animated components built with
            <span class="font-semibold text-accent"> Vue/Nuxt</span>,
            <span class="font-semibold text-accent"> Typescript</span>,
            <span class="font-semibold text-accent"> Tailwind CSS</span>, and
            <span class="font-semibold text-accent"> motion-v</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>
    </div>
    <!-- 使用教程 -->
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-start mb-10 md:text-end">
          <time class="font-mono italic">1984</time>
          <div class="text-lg font-black">First Macintosh computer</div>
          The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
          personal computer. It played a pivotal role in establishing desktop publishing as a general
          office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
          in a beige case with integrated carrying handle; it came with a keyboard and single-button
          mouse.
        </div>
        <hr class="bg-primary"/>
      </li>
      <li>
        <hr class="bg-primary"/>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-start md:text-end w-full">
          <div class="bg-base-100 w-full h-20"></div>
        </div>
        <div class="timeline-end md:mb-10">
          <time class="font-mono italic">1998</time>
          <div class="text-lg font-black">iMac</div>
          iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
          been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
          and has evolved through seven distinct forms
        </div>
        <hr class="bg-secondary"/>
      </li>
      <li>
        <hr class="bg-secondary"/>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-start mb-10 md:text-end">
          <time class="font-mono italic">2001</time>
          <div class="text-lg font-black">iPod</div>
          The iPod is a discontinued series of portable media players and multi-purpose mobile devices
          designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
          8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
          million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
          over 20 years, the iPod brand is the oldest to be discontinued by Apple
        </div>
        <hr class="bg-accent"/>
      </li>
      <li>
        <hr class="bg-accent"/>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-end md:mb-10">
          <time class="font-mono italic">2007</time>
          <div class="text-lg font-black">iPhone</div>
          iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
          operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
          January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
          of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
          accounts for 15.6% of global smartphone market share
        </div>
        <hr class="bg-primary"/>
      </li>
      <li>
        <hr class="bg-primary"/>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-start mb-10 md:text-end">
          <time class="font-mono italic">2015</time>
          <div class="text-lg font-black">Apple Watch</div>
          The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
          tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
          iOS and other Apple products and services
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
