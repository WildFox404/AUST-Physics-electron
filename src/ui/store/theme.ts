import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: "dark",
  }),
  actions: {
    setTheme(value: string) {
      if(value != this.theme) {
        this.theme = value;
      }
    },
    getTheme() {
      return this.theme;
    },
  },
});