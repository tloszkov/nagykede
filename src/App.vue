<template>
  <v-app>
    <NavigationMenu />
    <router-view />
    <footer>
      <v-row align="center" justify="center" class="w-100 py-2">
        <v-img
          class="mr-8"
          src="/src/assets/bga_alap_logo.png"
          alt="BGA Logo"
          max-height="100"
          max-width="100"
        ></v-img>
        <v-img
          src="/src/assets/keszult_magyarorszag_korm_tamogatasaval_2025-2048x532.jpg"
          alt="BGA Logo"
          max-height="800"
          max-width="600"
        ></v-img>
      </v-row>
    </footer>
  </v-app>
</template>

<script lang="ts" setup></script>
