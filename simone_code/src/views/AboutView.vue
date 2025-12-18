<template>
  <StaticTemplate>
    <template #heading>About Page</template>
    <template #default>
      This is my content of my about page
    </template>
  </StaticTemplate>
</template>

<script setup>
import StaticTemplate from '@/components/templates/StaticTemplate.vue';
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
