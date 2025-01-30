<template>
  <h3 align="center">{{folderPath.toUpperCase()}}</h3>
  <v-container>
    <v-row>
      <v-col
        v-for="(image, index) in imageUrls"
        :key="index"
        cols="12"
        sm="4"
        class="d-flex"
      >
        <v-img
          :src="image"
          aspect-ratio="1"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

// Definiáljuk a prop-ot
const props = defineProps<{
  folderPath: string
}>()

// Reactive referencia az URL-eknek
const imageUrls = ref<string[]>([])

// Függvény a képek betöltéséhez
const loadImages = async (path: string) => {
  const images = import.meta.glob('@/public/**/*.{png,jpg,jpeg}', { eager: true })

  // Csak azokat a képeket szűrjük ki, amik a megadott mappában vannak
  const filteredImages = Object.entries(images)
    .filter(([key]) => key.includes(path))
    .map(([, value]) => (value as { default: string }).default)

  imageUrls.value = filteredImages
}

// Figyeljük a prop változását
watch(() => props.folderPath, (newPath) => {
  loadImages(newPath)
}, { immediate: true })
</script>
