<template>
    <header>
        <TheLogo />
        <h1>Companion app</h1>
        <span>
            <a href="#">
                Welcome <span v-text="username"></span>
            </a>
            <IconSettings class="icon" />
            <IconFullScreen class="icon" @click="sidebarStore.toggleSidebar" />
            <p>Sidebar state: {{ sidebarStore.friendlyState }}</p>
        </span>
    </header>
</template>
<script setup>
    import { ref } from 'vue';
    import TheLogo from '../atoms/TheLogo.vue';
    import { useSidebarStore } from '@/stores/sidebar';
    const username = ref("Zelig880");
    const sidebarStore = useSidebarStore();
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