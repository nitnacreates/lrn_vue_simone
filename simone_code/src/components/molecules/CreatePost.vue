<template>
    <form v-show="postsStore.inProgress" @submit.prevent="createPostHandler">
        <h2>Create a Post</h2>
        <label for="post">Enter your post body:</label>
        <textarea rows="4" cols="20" ref="textareaRef" required="true" minlength="10" v-model="postText" name="post"
            id="post"></textarea>
        <TheButton>Create Post</TheButton>
    </form>
</template>
<script>
import { onMounted, ref } from 'vue';
import TheButton from '../atoms/TheButton.vue';
import { usePostsStore } from '@/stores/posts';

const postsStore = usePostsStore();
const { addPost } = postsStore;

const textareaRef = ref(null);
const postText = ref("");
onMounted(() => {
    textareaRef.value.focus();
})

const createPostHandler = (event) => {
    addPost(postText.value);
};
</script>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-border);
}
</style>