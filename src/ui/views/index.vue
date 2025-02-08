<script setup lang="ts">
import ParticlesBg from '../components/backgrounds/particlesBg/ParticlesBg.vue';
import BoxReveal from '../components/textAnimations/boxReveal/BoxReveal.vue';
import ScratchToReveal from '../components/specialEffects/scratchToReveal/ScratchToReveal.vue';
import { ref, watch } from "vue";
import { useThemeStore } from "../store/theme";
import confetti from "canvas-confetti";
import LetterPullup from '../components/textAnimations/letterPullup/LetterPullup.vue';

const themeStore = useThemeStore();
const colorPrimary = ref(themeStore.getColorHex('--p'));
const colorSecondary = ref(themeStore.getColorHex('--s'));
const colorAccent = ref(themeStore.getColorHex('--a'));

watch(() => themeStore.theme, (newValue, oldValue) => {
  if(newValue !== oldValue) {
    colorPrimary.value = themeStore.getColorHex('--p');
    colorSecondary.value = themeStore.getColorHex('--s');
    colorAccent.value = themeStore.getColorHex('--a');
  }
}, { immediate: false });


function handleComplete() {
  const duration = 5 * 1000; // 5 seconds
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  // Helper function to get a random value between a range
  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);

    // Confetti from left side
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });

    // Confetti from right side
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
}
</script>

<template>
  <div class="w-full" id="router-view">
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
        <p class="tip text-base-content">Windows</p>
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
    <LetterPullup
      words="⬂刮一刮 Thank you for using 刮一刮⬃"
      :delay="0.05"
      class="text-base-content"
    />
    <ScratchToReveal
      :width="250"
      :height="250"
      :min-scratch-percentage="50"
      class="mx-auto mb-20 flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
      :gradient-colors="[colorPrimary, colorSecondary, colorAccent]"
      @complete="handleComplete"
    >
      <div class="text-8xl">🥳</div>
    </ScratchToReveal>
    <footer class="footer bg-base-200 text-base-content p-10">
      <nav>
        <h6 class="footer-title">Services</h6>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 class="footer-title">Company</h6>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 class="footer-title">Legal</h6>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    <footer class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
      <aside class="grid-flow-col items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="fill-current">
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav class="md:place-self-center md:justify-self-end">
        <div class="grid grid-flow-col gap-4">
          <a>
            <svg viewBox="0 0 32 32" width="26" height="26" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm0 8c-3.7399769.0001875-5.3104861 3.0644648-5.2111485 6.7175538-.5901401 1.4156544-.97168742 2.2735907-1.30533812 3.3055894-.70791437 2.1893722-.47854375 3.0954335-.30393072 3.115746.37475143.0435311 1.45865284-1.6481541 1.45865284-1.6481541 0 .9795924.5247821 2.2579032 1.6602545 3.1809958-.5483889.162531-1.7828087.5989055-1.488698 1.0754674.23789.3857182 4.0811325.2462809 5.1906568.126156 1.1095244.1201249 4.9527669.2595622 5.1906569-.126156.2939481-.4766869-.9417073-.9134051-1.4893484-1.0756549 1.1353099-.9230925 1.6599944-2.2012784 1.6599944-3.1808083 0 0 1.0839014 1.6916852 1.4586854 1.6481541.174613-.0203438.4039186-.9263738-.3038982-3.115746-.3327078-1.0289987-.7162061-1.8923413-1.3053381-3.3055582.0940374-3.7134327-1.5128902-6.7173975-5.2112008-6.717585z" fill="#a3a3a3"></path> </g> </g></svg>
          </a>
          <a>
            <svg viewBox="0 0 32 32" width="26" height="26" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm2.8903377 13.5622942c2.7035551 0 5.1096623 1.9824369 5.1096623 4.4143798 0 1.3715697-.899922 2.5875411-2.1067647 3.5038419l.4509082 1.5194841-1.6501727-.9143798c-.5986849.1536773-1.2049482.3054336-1.8036331.3054336-2.8626992 0-5.1172406-1.978595-5.1172406-4.4143798 0-2.4319429 2.2545414-4.4143798 5.1172406-4.4143798zm-5.8731751-4.5622942c2.9574278 0 5.5492032 1.8191548 6.0702106 4.2722283-.1913518-.0230516-.3845982-.0364983-.5797392-.0364983-2.8570155 0-5.115346 2.1572448-5.115346 4.8139407 0 .4418222.0682046.8682766.1856681 1.2755214-.1856681.0134468-.3713362.0230516-.5607935.0230516-.7502508 0-1.3546194-.1536773-2.1086593-.3054336l-2.10297561 1.0661361.60247409-1.8287596c-1.50618522-1.0642151-2.40800178-2.4357848-2.40800178-4.1070252 0-2.8929748 2.70923883-5.1731614 6.0171626-5.1731614zm4.2135295 6.998079c-.2993425 0-.6024741.3054336-.6024741.6089462 0 .3073546.3031316.6089463.6024741.6089463.4546974 0 .7521453-.3015917.7521453-.6089463 0-.3035126-.2974479-.6089462-.7521453-.6089462zm3.3098183 0c-.2974479 0-.5967904.3054336-.5967904.6089462 0 .3073546.2993425.6089463.5967904.6089463.4509083 0 .7521453-.3015917.7521453-.6089463 0-.3035126-.301237-.6089462-.7521453-.6089462zm-5.2669118-4.4105378c-.4528029 0-.9037112.3015916-.9037112.7587815 0 .455269.4528029.7607025.9037112.7607025.4528028 0 .7521453-.3054335.7521453-.7607025 0-.4571899-.2993425-.7587815-.7521453-.7587815zm-4.2116349 0c-.4528029 0-.9075003.3015916-.9075003.7587815 0 .455269.456592.7607025.9075003.7607025.4528028 0 .7521453-.3073545.7502597-.7607025 0-.4571899-.2993515-.7587815-.7502597-.7587815z" fill="#a3a3a3"></path> </g> </g></svg>
          </a>
          <a>
            <svg viewBox="0 0 20 20" version="1.1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#a3a3a3]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#a3a3a3"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#a3a3a3]"> </path> </g> </g> </g> </g></svg>
          </a>
        </div>
      </nav>
    </footer>
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
