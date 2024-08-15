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
    const router = useRouter()

    const appInfo = {
        version: {
            name: '0.2.1-beta',
            code: 4
        },
        buildTime: '2024-03-03'
    }
    localStorage.setItem('appInfo', JSON.stringify(appInfo))

    router.afterEach((to, from) => {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        if (toDepth < fromDepth) {
            to.meta.transition = 'slide-right'
        } else if (toDepth > fromDepth) {
            to.meta.transition = 'slide-left'
        } else {
            to.meta.transition = 'fade'
        }
    })
</script>

<style src="/src/assets/css/transition.css"></style>
