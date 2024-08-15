<template>
    <div>
        <router-view v-slot="{ Component, route }">
            <transition :name="(route.meta.transition as string)">
                <keep-alive>
                    <component :key="$route.name" :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
        <mdui-navigation-bar :value="router.currentRoute.value.path" class="a">
            <mdui-navigation-bar-item icon="home" value="/home" @click="navRouter(0)">首页</mdui-navigation-bar-item>
            <mdui-navigation-bar-item icon="more_horiz" value="/other" @click="navRouter(1)">其他</mdui-navigation-bar-item>
        </mdui-navigation-bar>
    </div>
</template>

<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    import { routerTransition } from '@/hooks/useRouterTransition'
    const router = useRouter()
    routerTransition(router)

    const navRouterList = ['/home', '/other']
    function navRouter(num: number) {
        router.replace({ path: navRouterList[num] })
    }
</script>
