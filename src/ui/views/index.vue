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
    <div class="w-full flex items-center justify-between gap-8 pr-20">
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
      <!-- 仓鼠 -->
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster hidden lg:block">
        <div class="wheel"></div>
        <div class="hamster">
          <div class="hamster__body">
            <div class="hamster__head">
              <div class="hamster__ear"></div>
              <div class="hamster__eye"></div>
              <div class="hamster__nose"></div>
            </div>
            <div class="hamster__limb hamster__limb--fr"></div>
            <div class="hamster__limb hamster__limb--fl"></div>
            <div class="hamster__limb hamster__limb--br"></div>
            <div class="hamster__limb hamster__limb--bl"></div>
            <div class="hamster__tail"></div>
          </div>
        </div>
        <div class="spoke"></div>
      </div>
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
    <!-- 平台标题 -->
    <h1 class="platfrom-h1 pt-4 text-center">
      <span class="platform-span px-1">p</span>
      <span class="platform-span px-1">l</span>
      <span class="platform-span px-1">a</span>
      <span class="platform-span px-1">t</span>
      <span class="platform-span px-1">f</span>
      <span class="platform-span px-1">o</span>
      <span class="platform-span px-1">r</span>
      <span class="platform-span px-1">m</span>
    </h1>
    <!-- 平台展示 -->
    <div class="cards w-full px-10 items-center justify-evenly mt-16 mb-20">
      <div class="card red flex-1">
        <img class="h-24" src="https://www.svgrepo.com/show/303223/microsoft-windows-22-logo.svg" alt="Windows 22" />
        <p class="tip text-base-content">Windows 22</p>
      </div>
      <div class="card blue flex-1">
        <img class="h-24" src="https://www.svgrepo.com/show/303110/apple-black-logo.svg" alt="Apple" />
        <p class="tip text-base-content">Mac</p>
      </div>
      <div class="card green flex-1">
        <img class="h-24" src="https://www.svgrepo.com/show/354004/linux-tux.svg" alt="Linux" />
        <p class="tip text-base-content">Linux</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
.read-the-docs {
  color: #888;
}


/* 卡片 */
.card::before {
  border-radius: 50%;
  top: 20%;
}

.card::before,
.card::after {
  content: "";
  background-color: #7090fa4b;
  position: absolute;
  filter: blur(10px);
}

.cards {
  display: flex;
  gap: 40px;
}

.cards .red,
.cards .blue,
.cards .green {
  width: 200px;
  height: 180px;
  font-family: "CustomFont", Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 600;
  backdrop-filter: blur(30px);
  background-color: rgba(65, 65, 65, 0.11);
  border: 1px solid rgba(144, 161, 255, 0.171);
}

.cards .card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: 400ms;
}

.cards .card p.tip {
  font-size: 1em;
  font-weight: 700;
}

.cards .card p.second-text {
  font-size: 0.7em;
}

.cards .card:hover {
  transform: scale(1.1, 1.1);
}

.cards:hover > .card:not(:hover) {
  filter: blur(5px);
  transform: scale(0.9, 0.9);
}

/* 仓鼠 */
.wheel-and-hamster {
  --dur: 1s;
  position: relative;
  width: 12em;
  height: 12em;
  font-size: 14px;
}

.wheel,
.hamster,
.hamster div,
.spoke {
  position: absolute;
}

.wheel,
.spoke {
  border-radius: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.wheel {
  background: radial-gradient(100% 100% at center,hsla(0,0%,60%,0) 47.8%,hsl(0,0%,60%) 48%);
  z-index: 2;
}

.hamster {
  animation: hamster var(--dur) ease-in-out infinite;
  top: 50%;
  left: calc(50% - 3.5em);
  width: 7em;
  height: 3.75em;
  transform: rotate(4deg) translate(-0.8em,1.85em);
  transform-origin: 50% 0;
  z-index: 1;
}

.hamster__head {
  animation: hamsterHead var(--dur) ease-in-out infinite;
  background: hsl(30,90%,55%);
  border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
  box-shadow: 0 -0.25em 0 hsl(30,90%,80%) inset,
		0.75em -1.55em 0 hsl(30,90%,90%) inset;
  top: 0;
  left: -2em;
  width: 2.75em;
  height: 2.5em;
  transform-origin: 100% 50%;
}

.hamster__ear {
  animation: hamsterEar var(--dur) ease-in-out infinite;
  background: hsl(0,90%,85%);
  border-radius: 50%;
  box-shadow: -0.25em 0 hsl(30,90%,55%) inset;
  top: -0.25em;
  right: -0.25em;
  width: 0.75em;
  height: 0.75em;
  transform-origin: 50% 75%;
}

.hamster__eye {
  animation: hamsterEye var(--dur) linear infinite;
  background-color: hsl(0,0%,0%);
  border-radius: 50%;
  top: 0.375em;
  left: 1.25em;
  width: 0.5em;
  height: 0.5em;
}

.hamster__nose {
  background: hsl(0,90%,75%);
  border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
  top: 0.75em;
  left: 0;
  width: 0.2em;
  height: 0.25em;
}

.hamster__body {
  animation: hamsterBody var(--dur) ease-in-out infinite;
  background: hsl(30,90%,90%);
  border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
  box-shadow: 0.1em 0.75em 0 hsl(30,90%,55%) inset,
		0.15em -0.5em 0 hsl(30,90%,80%) inset;
  top: 0.25em;
  left: 2em;
  width: 4.5em;
  height: 3em;
  transform-origin: 17% 50%;
  transform-style: preserve-3d;
}

.hamster__limb--fr,
.hamster__limb--fl {
  clip-path: polygon(0 0,100% 0,70% 80%,60% 100%,0% 100%,40% 80%);
  top: 2em;
  left: 0.5em;
  width: 1em;
  height: 1.5em;
  transform-origin: 50% 0;
}

.hamster__limb--fr {
  animation: hamsterFRLimb var(--dur) linear infinite;
  background: linear-gradient(hsl(30,90%,80%) 80%,hsl(0,90%,75%) 80%);
  transform: rotate(15deg) translateZ(-1px);
}

.hamster__limb--fl {
  animation: hamsterFLLimb var(--dur) linear infinite;
  background: linear-gradient(hsl(30,90%,90%) 80%,hsl(0,90%,85%) 80%);
  transform: rotate(15deg);
}

.hamster__limb--br,
.hamster__limb--bl {
  border-radius: 0.75em 0.75em 0 0;
  clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
  top: 1em;
  left: 2.8em;
  width: 1.5em;
  height: 2.5em;
  transform-origin: 50% 30%;
}

.hamster__limb--br {
  animation: hamsterBRLimb var(--dur) linear infinite;
  background: linear-gradient(hsl(30,90%,80%) 90%,hsl(0,90%,75%) 90%);
  transform: rotate(-25deg) translateZ(-1px);
}

.hamster__limb--bl {
  animation: hamsterBLLimb var(--dur) linear infinite;
  background: linear-gradient(hsl(30,90%,90%) 90%,hsl(0,90%,85%) 90%);
  transform: rotate(-25deg);
}

.hamster__tail {
  animation: hamsterTail var(--dur) linear infinite;
  background: hsl(0,90%,85%);
  border-radius: 0.25em 50% 50% 0.25em;
  box-shadow: 0 -0.2em 0 hsl(0,90%,75%) inset;
  top: 1.5em;
  right: -0.5em;
  width: 1em;
  height: 0.5em;
  transform: rotate(30deg) translateZ(-1px);
  transform-origin: 0.25em 0.25em;
}

.spoke {
  animation: spoke var(--dur) linear infinite;
  background: radial-gradient(100% 100% at center,hsl(0,0%,60%) 4.8%,hsla(0,0%,60%,0) 5%),
		linear-gradient(hsla(0,0%,55%,0) 46.9%,hsl(0,0%,65%) 47% 52.9%,hsla(0,0%,65%,0) 53%) 50% 50% / 99% 99% no-repeat;
}

/* Animations */
@keyframes hamster {
  from, to {
    transform: rotate(4deg) translate(-0.8em,1.85em);
  }

  50% {
    transform: rotate(0) translate(-0.8em,1.85em);
  }
}

@keyframes hamsterHead {
  from, 25%, 50%, 75%, to {
    transform: rotate(0);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(8deg);
  }
}

@keyframes hamsterEye {
  from, 90%, to {
    transform: scaleY(1);
  }

  95% {
    transform: scaleY(0);
  }
}

@keyframes hamsterEar {
  from, 25%, 50%, 75%, to {
    transform: rotate(0);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(12deg);
  }
}

@keyframes hamsterBody {
  from, 25%, 50%, 75%, to {
    transform: rotate(0);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(-2deg);
  }
}

@keyframes hamsterFRLimb {
  from, 25%, 50%, 75%, to {
    transform: rotate(50deg) translateZ(-1px);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(-30deg) translateZ(-1px);
  }
}

@keyframes hamsterFLLimb {
  from, 25%, 50%, 75%, to {
    transform: rotate(-30deg);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(50deg);
  }
}

@keyframes hamsterBRLimb {
  from, 25%, 50%, 75%, to {
    transform: rotate(-60deg) translateZ(-1px);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(20deg) translateZ(-1px);
  }
}

@keyframes hamsterBLLimb {
  from, 25%, 50%, 75%, to {
    transform: rotate(20deg);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(-60deg);
  }
}

@keyframes hamsterTail {
  from, 25%, 50%, 75%, to {
    transform: rotate(30deg) translateZ(-1px);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: rotate(10deg) translateZ(-1px);
  }
}

@keyframes spoke {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(-1turn);
  }
}

/* 平台标题 */
.platfrom-h1{
  height: 100px;
}

.platform-span{
  position: relative;
  top: 20px;
  display: inline-block;
  animation: bounce .3s ease infinite alternate;
  font-family: 'Titan One', cursive;
  font-size: 80px;
  color: #FFF;
  text-shadow: 0 1px 0 #CCC,
               0 2px 0 #CCC,
               0 3px 0 #CCC,
               0 4px 0 #CCC,
               0 5px 0 #CCC,
               0 6px 0 transparent,
               0 7px 0 transparent,
               0 8px 0 transparent,
               0 9px 0 transparent,
               0 10px 10px rgba(0, 0, 0, .4);
}

.platform-span:nth-child(2) { animation-delay: .1s; }
.platform-span:nth-child(3) { animation-delay: .2s; }
.platform-span:nth-child(4) { animation-delay: .3s; }
.platform-span:nth-child(5) { animation-delay: .4s; }
.platform-span:nth-child(6) { animation-delay: .5s; }
.platform-span:nth-child(7) { animation-delay: .6s; }
.platform-span:nth-child(8) { animation-delay: .7s; }

@keyframes bounce {
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 #CCC,
                 0 7px 0 #CCC,
                 0 8px 0 #CCC,
                 0 9px 0 #CCC,
                 0 50px 25px rgba(0, 0, 0, .2);
  }
}
</style>
