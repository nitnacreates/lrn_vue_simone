<template>
    <aside :class="{ 'sidebar__closed': sidebarStore.closed}">
        <template v-if="sidebarStore.closed">
            <IconRightArrow class="sidebar__icon" @click="sidebarStore.toggleSidebar" />
        </template>
        <template v-else>
            <h2>Sidebar</h2>
            <IconLeftArrow class="sidebar__icon" @click="sidebarStore.toggleSidebar" />
            <button>Create Post</button>
            <div>Current time: {{ currentTime }}</div>
            <TheButton @click="onUpdateTimeClick">Update Time</TheButton>
            <router-link to="about">About</router-link>
            <router-link to="privacy">Privacy</router-link>
            <router-link to="contact">Contact Us</router-link>
            <a @click="navigateToPrivacy">Programmatic to privacy</a>
        </template>
    </aside>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import TheButton from '../atoms/TheButton.vue';
import IconLeftArrow from '../icons/IconLeftArrow.vue';
import IconRightArrow from '../icons/IconRightArrow.vue';
import { useSidebarStore } from '@/stores/sidebar';

const currentTime = ref(new Date().toLocaleTimeString());
const onUpdateTimeClick = () => {
    currentTime.value = new Date().toLocaleDateString();
};

const sidebarStore = useSidebarStore();

onBeforeMount( async () => {
    sidebarStore.loadSidebarFromLocalStorage();
});

const router = useRouter();
const navigateToPrivacy = (event) => {
    event.preventDefault();
    console.log("Run a side effect");
    router.push("privacy");
}

</script>
<style scoped>
aside {
    display: flex;
    flex-direction: column;
    position: relative;

    &.sidebar__closed {
        width: 40px;
    }

    .sidebar__icon {
        position: absolute;
        right: 12px;
        top: 22px;
        cursor: pointer;
    }
}
</style>