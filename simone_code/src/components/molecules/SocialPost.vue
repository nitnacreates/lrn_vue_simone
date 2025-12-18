<template>
    <div 
        class="SocialPost"
        :class="{SocialPost__selected:selected}"
    >
        <div class="header">
            <img class="avatar" :src="avatarSrc" @click="navigateToUser" />
            <div class="name">{{ username }}</div>
            <IconDelete @click="onDeleteClick" />
        </div>
        <div class="post">{{ post }}</div>
        <Suspense v-if="showComments" >
          <SocialPostComments :postId="id" @delete="onDeleted"></SocialPostComments>
          <template #fallback>fetching comments...</template>
        </Suspense>
        <div class="interactions">
          <IconHeart/>
          <IconCommunity/>
          {{  likes }}
          <TheButton
            @click="onShowCommentClick"
            width="auto"
            theme="dark"
            data-cy="showCommentButton"
          >Show Comment</TheButton>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import SocialPostComments from './SocialPostComments.vue';
import IconDelete from '../icons/IconDelete.vue';
import IconHeart from '../icons/IconHeart.vue';
import IconCommunity from '../icons/IconCommunity.vue';
import TheButton from '../atoms/TheButton.vue';
    
const props = defineProps({
    username: String,
    id: Number,
    avatarSrc: String,
    post: String,
    likes: Number,
    postId: String
});

const showComments = ref(false);
const onShowCommentClick = () => {
  showComments.value = !showComments.value;
}

const emit = defineEmits(['delete']);
const onDeleteClick = () => {
  emit('delete');
}

const router = useRouter();
const navigateToUser = () => {
  router.push({
    name: "user",
    params: {
      userId: props.id
    }
  });
}

</script>
<style lang="scss">
.SocialPost{
  margin-bottom:16px;
  &__selected{
    border: white solid 1px;
  }
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;;
  }
  .avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;;
    margin-right: 12px;
  }
  .name {
    font-weight: bold;
    margin-right: 8px;
    color: white;
  }
  .interactions {
    display: flex;
    font-weight: bold;
    margin-top: 8px;
    gap:8px;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: var(--color-input-soft);
    cursor:pointer;
  }
}
</style>