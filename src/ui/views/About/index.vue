<script setup lang="ts">
import VortexBackground from '../../components/backgrounds/vortexBackground/VortexBackground.vue';
import { ref, watch } from 'vue';
import { useThemeStore } from '../../store/theme';
import SocialCard from '../../components/card/socialCard/SocialCard.vue';
import Marquee from '../../components/miscellaneous/marquee/Marquee.vue';
import ReviewCard from '../../components/card/reviewCard/ReviewCard.vue';
const themeStore = useThemeStore();
const colorBaseContent = ref(themeStore.getColorHex('--bc'));
const colorBase100 = ref(themeStore.getColorHex('--b1'));
const colorAccent = ref(themeStore.getColorHex('--a'));
const colorArray: string[] = ["bg-primary","bg-secondary","bg-accent","bg-[#a786ff]", "bg-[#fd8bbc]", "bg-[#eca184]", "bg-[#f8deb1]"];

watch(() => themeStore.theme, (newValue, oldValue) => {
  if(newValue !== oldValue) {
    colorBaseContent.value = themeStore.getColorHex('--bc');
    console.log('colorBaseContent.value', colorBaseContent.value);
    colorBase100.value = themeStore.getColorHex('--b1');
    colorAccent.value = themeStore.getColorHex('--a');
  }
}, { immediate: false });

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

// Split reviews into two rows
// const firstRow = ref(reviews.slice(0, reviews.length / 2));
// const secondRow = ref(reviews.slice(reviews.length / 2));
</script>

<template>
  <div class="w-full h-[30rem] overflow-hidden" id="router-view">
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
  <div class="w-full flex">
    <div class="p-8">
      <SocialCard>
        <img src="../../assets/logo.png" class="pb-2">
        <div>LAZYDOG</div>
      </SocialCard>
    </div>
    <div
      class="div flex-1 h-[200px] mr-8 bg-base-100 my-auto rounded-[1em] relative group p-4 z-0 overflow-hidden"
    >
      <div
        class="z-[-1] h-[200rem] w-[200%] rounded-[1em] bg-gradient-to-br from-primary via-secondary to-accent absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[500%] duration-500 origin-bottom-right"
      ></div>

      <button
        class="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white]"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>

      <div
        class="z-20 flex font-bold font-Poppin overflow-auto group-hover:text-white delay-150 text-[1.4em]"
      >
        <div class="flex-1 ">
          <h1>Introduce</h1>
          <p class="text-sm">个人介绍</p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  </div>
  <div
    class="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden bg-base-300 md:shadow-xl"
  >
    <!-- First Marquee -->
    <Marquee
      pause-on-hover
      class="[--duration:20s]"
    >
      <ReviewCard
        v-for="review, index in reviews"
        :key="review.username"
        :img="review.img"
        :name="review.name"
        :username="review.username"
        :body="review.body"
        :color-class=" colorArray[index % colorArray.length ]"
      />
    </Marquee>
  </div>
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
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
