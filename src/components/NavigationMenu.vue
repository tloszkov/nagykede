<script setup lang="ts">
import { ref } from 'vue';

const items = [
  { title: 'Home', link: '' },
  { title: 'About', link: 'about' },
  { title: 'Contact', link: 'contact' },
  { title: 'Settings', link: 'settings' },
];

const theme = ref('light');

function onClick () {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div>
    <v-btn v-for="item in items" :key="item.title" :value="item.title" :to="`/${item.link}`"> {{ item.title }}
    </v-btn>
    <v-btn
      :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      slim
      @click="onClick"
    ></v-btn>
  </div>
</template>

<style scoped>
</style>
