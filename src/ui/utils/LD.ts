import { oklch, formatRgb } from 'culori';
// 导入所需的类型

class LD {
    static processOklchToHex(cssValue:string): string {
        const lazydogElements = document.getElementsByClassName('lazydog');
        if (lazydogElements.length === 0) {
            return "#ffffff";
        }

        const style = getComputedStyle(lazydogElements[0]);
        let colorArray = style.getPropertyValue(cssValue).trim().replace(/[%％]/g, '').split(' ');

        // 解构赋值时对 l 进行计算，除以 100
        const [l, c, h] = colorArray.map((value: any, index) => index === 0 ? value / 100 : value);
        const oklchColor: any = { mode:'oklch', l, c, h };
        const rgbColor:any = formatRgb(oklch(oklchColor));
        const result = LD.convertRgbToHex(rgbColor);
        return result;
    }
    static processOklchToRgb(cssValue:string): string {
        const lazydogElements = document.getElementsByClassName('lazydog');
        if (lazydogElements.length === 0) {
            return "255 255 255";
        }

        const style = getComputedStyle(lazydogElements[0]);
        let colorArray = style.getPropertyValue(cssValue).trim().replace(/[%％]/g, '').split(' ');

        // 解构赋值时对 l 进行计算，除以 100
        const [l, c, h] = colorArray.map((value: any, index) => index === 0 ? value / 100 : value);
        const oklchColor: any = { mode:'oklch', l, c, h };
        const rgbColor:any = formatRgb(oklch(oklchColor));
        const result = LD.convertRgbString(rgbColor);
        return result;
    }

    // 将 rgb(29, 35, 42) 转换成 29 35 42 的方法
    static convertRgbString(rgbString: string): string {
        const matches = rgbString.match(/\d+/g);
        if (matches) {
            return matches.join(' ');
        }
        return '';
    }

    static convertRgbToHex(rgbColor: string): string {
        // 使用正则表达式提取 RGB 值
        const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgbColor);
        if (!result) {
            return "#ffffff";
        }

        // 将 RGB 值转换为十六进制格式
        const r = parseInt(result[1]);
        const g = parseInt(result[2]);
        const b = parseInt(result[3]);

        // 将每个数值转换为两位十六进制字符串
        const hex = (r << 16) | (g << 8) | b;
        return '#' + hex.toString(16).padStart(6, '0').toUpperCase();
    }
}

// 导出 Utils 类
export default LD;
