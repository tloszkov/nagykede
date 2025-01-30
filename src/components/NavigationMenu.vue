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
  { title: 'Nagykede', link: '' },
  { title: 'Nagykede története', link: 'history' },
  { title: 'Média tár', link: 'media' },
  { title: 'Események', link: 'events' },
];
</script>

<template>
  <v-app-bar :elevation="2">
    <v-row align="center" justify="center">

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
    </v-row>
  </v-app-bar>
</template>
