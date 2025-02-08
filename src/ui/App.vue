<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';
import { useThemeStore } from './store/theme';
import SideCannons from './components/specialEffects/confetti/sideCannons/SideCannons.vue';
import LD from './utils/LD';
const themeStore = useThemeStore();
const themeStyle = computed(() => {
  colorPrimary.value = LD.processOklchToHex('--p');
  colorSecondary.value = LD.processOklchToHex('--s');
  colorAccent.value = LD.processOklchToHex('--a');
  return themeStore.getTheme()
});
onMounted(() => {
  colorPrimary.value = LD.processOklchToHex('--p');
  colorSecondary.value = LD.processOklchToHex('--s');
  colorAccent.value = LD.processOklchToHex('--a');
});
const colorPrimary = ref("");
const colorSecondary = ref("");
const colorAccent = ref("");

const route = useRoute();
watch(() => route.path, () => {
  console.log('Route changed');
  const routerViewElement = document.getElementById('router-view');
  if (routerViewElement) {
    routerViewElement.scrollIntoView({ behavior: 'instant'  });
  }
});

const isMenuOpen = ref(true);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="bg-base-content box-border lazydog" :data-theme="themeStyle">
    <div class="fixed inset-x-0 top-0 z-20">
      <div class="bg-base-100">
        <div class="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
          <div class="flex gap-4 items-center">
            <img src="./assets/logo.png" alt="logo" class="w-[32px] h-[32px]" />
            <h1 class="text-lg text-base-content font-bold">LAZY DOG</h1>
          </div>
          <div class="flex items-center justify-between gap-4 max-md:hidden">
            <SideCannons 
              :colorPrimary= colorPrimary
              :colorSecondary= colorSecondary
              :colorAccent= colorAccent
            >
              复制链接分享给好友
            </SideCannons>
            <div class="dropdown dropdown-end w-24">
              <button tabindex="0" role="button" class="btn btn-sm btn-block">主题</button>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><button @click="themeStore.setTheme('cupcake')">cupcake</button></li>
                <li><button @click="themeStore.setTheme('dark')">dark</button></li>
                <li><button @click="themeStore.setTheme('light')">light</button></li>
                <li><button @click="themeStore.setTheme('valentine')">valentine</button></li>
                <li><button @click="themeStore.setTheme('night')">night</button></li>
                <li><button @click="themeStore.setTheme('halloween')">halloween</button></li>
                <li><button @click="themeStore.setTheme('synthwave')">synthwave</button></li>
                <li><button @click="themeStore.setTheme('retro')">retro</button></li>
              </ul>
            </div>
          </div>
          <div class="flex items-center gap-2.5 md:hidden">
          </div>
        </div>
      </div>
    </div>
    <div class="flex relative">
      <div :class="['menu-toggle', isMenuOpen ? 'ml-56' : 'ml-1']" class="menu-toggle text-base-content z-30 bg-base-200 w-12 h-12 flex items-center justify-center text-md " @click="toggleMenu">></div>
      <div :class="['menulist', isMenuOpen ? 'w-58' : 'w-0']" class="menulist bg-base-200 z-10 relative pt-14 h-[100vh] overflow-auto border-r-2 border-base-100 ">
        <ul class="menu bg-base-200 w-56">
          <li><RouterLink to="/">主页</RouterLink></li>
          <li>
            <details open>
              <summary>实验</summary>
              <ul>
                <li><RouterLink to="/physics/guangdian">关于</RouterLink></li>
                <li><a>Submenu 2</a></li>
                <li>
                  <details open>
                    <summary>Parent</summary>
                    <ul>
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li><RouterLink to="/about">关于</RouterLink></li>
        </ul>
      </div>
      <div class="bg-base-300 z-0 relative flex-1 flex-col pt-14 h-[100vh] overflow-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.menu-toggle{
  transform: translateX(-50%);
  border-radius: 50%;
  margin-top: 50vh;
  position: absolute;
  cursor: pointer;
}

.menulist {
  transition: width 0.3s ease;
}
</style>

