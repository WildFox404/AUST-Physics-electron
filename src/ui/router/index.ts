import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const pages = import.meta.glob('../views/**/page.js',{
    eager:true,
    import: 'default'
})
const pageComps = import.meta.glob('../views/**/index.vue')
const routes = Object.entries(pages).map(([path,meta]) => {
    const pageJsPath = path
    path = path.replace('../views','').replace('/page.js','')
    path = path || '/'
    const name = path.split('/').filter(Boolean).join('-')||'index'
    const compPath = pageJsPath.replace('page.js','index.vue')
    return {
        path,
        name,
        component: pageComps[compPath],
        meta,
    }
}) as RouteRecordRaw[]; // Cast to RouteRecordRaw[]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;