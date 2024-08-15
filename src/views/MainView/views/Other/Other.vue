<template>
    <div>
        <mdui-top-app-bar variant="large" scroll-behavior="shrink elevate">
            <mdui-top-app-bar-title> 其他 </mdui-top-app-bar-title>
        </mdui-top-app-bar>
        <mdui-list>
            <mdui-list-item icon="settings" @click="navRouter(0, 1)">设置</mdui-list-item>
            <mdui-list-item icon="info" @click="navRouter(1, 1)">关于</mdui-list-item>
        </mdui-list>
    </div>
</template>

<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    defineOptions({ name: 'Other' })

    document.body.classList.add('body')

    const navRouterList = ['/other/setting', '/other/about']
    function navRouter(num: number, level?: number) {
        router.push({ path: navRouterList[num] })
    }
</script>
