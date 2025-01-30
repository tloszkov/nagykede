<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTheme } from 'vuetify';

const theme = ref('dark');
const vuetifyTheme = useTheme();

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  vuetifyTheme.global.name.value = theme.value;
};

const items = [
  { title: 'Home', link: '' },
  { title: 'About', link: 'about' },
  { title: 'Contact', link: 'contact' },
  { title: 'Settings', link: 'settings' },
];
</script>

<template>
  <div class="navigation-menu d-flex justify-center align-center gap-2 p-2">
    <v-btn
      v-for="item in items"
      :key="item.title"
      :value="item.title"
      :to="`/${item.link}`"
    >
      {{ item.title }}
    </v-btn>
    <v-btn
      :prepend-icon="theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
      slim
      @click="toggleTheme"
    ></v-btn>
  </div>
</template>
