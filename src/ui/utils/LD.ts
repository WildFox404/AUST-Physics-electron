import { oklch, formatRgb } from 'culori';
// 导入所需的类型

class LD {
    // 封装的方法
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
}

// 导出 Utils 类
export default LD;
