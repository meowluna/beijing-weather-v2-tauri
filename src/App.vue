<template>
    <router-view v-slot="{ Component, route }">
        <transition :name="(route.meta.transition as string)">
            <keep-alive>
                <component :key="$route.name" :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    import { routerTransition } from '@/hooks/useRouterTransition.ts'
    const router = useRouter()
    routerTransition(router)

    const appInfo = {
        version: {
            name: '0.2.1-beta',
            code: 4
        },
        buildTime: '2024-03-03'
    }
    localStorage.setItem('appInfo', JSON.stringify(appInfo))
</script>

<style src="/src/styles/transition.css"></style>

<style>
    body {
        padding-top: 152px;
    }
</style>
