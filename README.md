# AUST-Physics-Electron
## 安徽理工大学大物实验计算软件

### 🔍项目介绍
- 起动日期:2025-2-1

### 🏠项目进度
- 开发中

### 📄免责声明
1.此项目仅供学习和参照,使用后结果不承担任何责任

### 📦软件安装
1.github releases安装对应版本 (🎉推荐)
2.添加QQ群下载安装

### 💻开发使用
- 🧪 项目启动
```
git clone https://github.com/WildFox404/AUST-Physics-electron.git

官方镜像源好用,记得挂梯子
npm config set registry https://registry.npmjs.org

cnpm install

npm run dev:vue 启动vue本地

npm run dev:electron 启动本地electron (PS:在开发环境中访问localhost:xxxx 的vue项目)

npm run dev 启动本地vue+electron(🎉推荐)

npm run build 打包vue

npm run dist:mac 打包mac软件

npm run dist:win 打包win软件

npm run dist:linux 打包linux软件
```
ps:
1如果electron安装出现错误


```
npm install -g cnpm --registry=https://registry.npmmirror.com

cnpm install --save-dev electron
```
2npm安装一直卡在转圈
去除electron的packgae.json,安装完其他后再安装electron
npm install electron@34.1.0 --save-dev

3vatex katex安装一直卡在转圈
cnpm install vatex katex

4chart.js vue-chartjs也是cnpm安装的
cnpm install vue-chartjs chart.js
cnpm install --save-dev @types/chart.js

- 项目使用
    - vite
    - vue3
    - electron
    - electron-builder
    - node v23.6.1 (🎉推荐nvm)
    - pinia
    - vue-router
    - daisy ui
    - inspira ui
    - tailwindcss
    - typescript

- 项目规范
    - 标签的颜色一定要大量使用daisy ui的颜色 , 方便风格切换显示
        - 文档: https://daisyui.com/docs/colors/
    - npm install 新内容提交时记得声明
### 🔧开发TODO
- 首页
- 关于
- 每个实验
    - 1
    - 2
    - 3