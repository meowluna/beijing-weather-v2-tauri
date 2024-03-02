<template>
    <RouterView></RouterView>
</template>

<script lang="ts" setup>
    let appInfo = {
        version: {
            name: '0.2.0-beta',
            code: 3
        },
        buildTime: '2024-03-02'
    }
    localStorage.setItem('appInfo', JSON.stringify(appInfo))
</script>

<style scoped></style>
