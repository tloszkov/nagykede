<script setup lang="ts">
const props = defineProps({
  contentOfPage: Array as () => Array<{ title: string, subtitle: string, content: string }>
});
</script>

<template>
  <div v-for="(page, i) in contentOfPage" :key="i" class="full-width">
    <h1 class="full-width">{{ page.title }}</h1>
    <div class="full-width">
      <v-sheet class="full-width" border rounded elevation="2">
        <h3>{{ page.subtitle }}</h3>
        <p>{{ page.content }}</p>
      </v-sheet>
    </div>
  </div>
</template>

<style scoped>

.full-width {
  width: 100%;
  padding: 5px;
}



h1 {
  text-align: center;
}

</style>
