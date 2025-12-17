<template>
    <header>
        <TheLogo />
        <h1>Companion app</h1>
        <a href="#">
            Welcome 
            <span v-text="username"></span>
        </a>
    </header>
</template>
<script setup>
    import { ref } from 'vue';
    import TheLogo from '../atoms/TheLogo.vue';
    const username = ref("Zelig880");
</script>
<style lang="scss">
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-column-start: 1;
    grid-column-end: 3;
    margin-bottom:24px;

    a span {
        font-weight: bold;
    }
}
</style>