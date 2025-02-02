import { defineStore } from 'pinia';
import LD from '../utils/LD';
export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: "dark",
    colorDict: {
      hex:{},
      rgb:{}
    } as { hex: {[key: string]: string}, rgb: {[key: string]: string} }
  }),
  actions: {
    setTheme(value: string) {
      if(value != this.theme) {
        this.theme = value;
        for (const key in this.colorDict.hex) {
          this.colorDict.hex[key] = LD.processOklchToHex(key);
        }
        for (const key in this.colorDict.rgb) {
          this.colorDict.rgb[key] = LD.processOklchToRgb(key);
        }
      }
    },
    getTheme() {
      return this.theme;
    },
    getColorHex(key: string) {
      const color = this.colorDict.hex[key];
      if (color) {
        return color;
      } else {
        this.colorDict.hex[key] = LD.processOklchToHex(key);
        return this.colorDict.hex[key];
      }
    }
  },
});