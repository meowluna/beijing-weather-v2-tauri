<template>
    <RouterView></RouterView>

    <!-- 底部导航栏 -->
    <mdui-navigation-bar :value="router.currentRoute.value.path" class="a">
        <mdui-navigation-bar-item icon="home" value="/home" @click="navRouter(0)">首页</mdui-navigation-bar-item>
        <mdui-navigation-bar-item icon="more_horiz" value="/other" @click="navRouter(1)">其他</mdui-navigation-bar-item>
    </mdui-navigation-bar>
</template>

<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()

    // console.log(router)
    const navRouterList = ['/home', '/other']
    function navRouter(num: number) {
        router.push({ path: navRouterList[num] })
    }
</script>

<style scoped></style>
