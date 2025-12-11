<script setup>
import SocialPosts from '../components/organisms/SocialPosts.vue'
import CreatePost from '../components/molecules/CreatePost.vue'
import SideBar from '../components/organisms/SideBar.vue'
import TheHeader from '../components/organisms/TheHeader.vue';
</script>

<template>
    <TheHeader/>
    <SideBar />
    <main>
      <CreatePost />
      <SocialPosts />
    </main>
</template>
