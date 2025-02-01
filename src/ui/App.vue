<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      themeStyle: 'cupcake'
    };
  }
});
</script>

<template>
  <div class="bg-base-content box-border" :data-theme="themeStyle">
    <div class="fixed inset-x-0 top-0 z-10">
      <div class="bg-base-100">
        <div class="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
          <div class="flex gap-4 items-center">
            <img src="./assets/logo.png" alt="logo" class="w-[32px] h-[32px]" />
            <h1 class="text-lg text-base-content font-bold">LAZY DOG</h1>
          </div>
          <div class="flex items-center gap-6 max-md:hidden">
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn btn-sm">主题</div>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><button @click="themeStyle = 'cupcake'">cupcake</button></li>
                <li><button @click="themeStyle = 'dark'">dark</button></li>
                <li><button @click="themeStyle = 'light'">light</button></li>
              </ul>
            </div>
          </div>
          <div class="flex items-center gap-2.5 md:hidden">
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="bg-base-200 w-56 pt-14 min-h-[100vh] overflow-auto">
        <ul class="menu bg-base-200 w-56 ">
          <li><RouterLink to="/">主页</RouterLink></li>
          <li>
            <details open>
              <summary>实验</summary>
              <ul>
                <li><a>Submenu 112312312312312</a></li>
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
          <li>
            <details open>
              <summary>实验</summary>
              <ul>
                <li><a>Submenu 112312312312312</a></li>
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
          <li>
            <details open>
              <summary>实验</summary>
              <ul>
                <li><a>Submenu 112312312312312</a></li>
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
        </ul>
      </div>
      <div class="bg-base-300 flex-1 pt-14 min-h-[100vh]">
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
</style>
