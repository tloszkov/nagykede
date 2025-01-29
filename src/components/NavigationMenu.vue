<script setup lang="ts">
const items = [
  { title: 'Home'},
  { title: 'About'},
  { title: 'Contact'},
  { title: 'Settings'},
];
</script>

<template>

  <v-for>
    <v-btn v-for="item in items" :key="item.title" :value="item.title" :to="`/${item.title.toLowerCase()}`"> {{ item.title }}
    </v-btn>
  </v-for>

</template>

<style scoped>

</style>
