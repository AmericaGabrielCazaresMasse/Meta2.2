<template>
  <v-app>
    <v-app-bar color="#5c5c5c">
      <v-toolbar-title>
        <router-link to="/" class="text-white text-decoration-none">
          🎬 Buscador de Películas
        </router-link>
      </v-toolbar-title>

      <v-spacer />

      <v-btn to="/" variant="text">
        Inicio
      </v-btn>
      <v-btn to="/about" variant="text">
        Acerca de
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>
