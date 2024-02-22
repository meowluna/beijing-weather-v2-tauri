<template>
    <RouterView></RouterView>
</template>

<script lang="ts" setup>
    let appInfo = {
        version: {
            name: '0.1.1-beta',
            code: 2
        },
        buildTime: '2024-02-22'
    }
    localStorage.setItem('appInfo', JSON.stringify(appInfo))
</script>

<style scoped></style>
