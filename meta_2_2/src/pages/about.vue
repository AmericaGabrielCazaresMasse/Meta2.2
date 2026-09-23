<template>
  <v-container class="pa-8 text-center">
    <v-row justify="center">
      <v-col cols="12" md="6">
            <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">🎬 Buscador de Películas</h1>
      </v-col>
    </v-row>

        <v-chip color="#5c5c5c" class="mb-6">
          Versión 1.0.0
        </v-chip>

        <v-card class="pa-6 text-left" variant="outlined">
          <p class="text-body-1 mb-4">
            Aplicación desarrollada con <strong>Vue 3</strong> (Composition API)
            y <strong>Vuetify 3</strong>, que consume la API pública de
            <strong>OMDb</strong> (The Open Movie Database) para buscar
            películas, series y episodios.
          </p>
          <p class="text-body-1">
            Este proyecto forma parte de la práctica de laboratorio sobre
            comunicación entre componentes mediante eventos personalizados.
          </p>
        </v-card>

        <v-btn
          to="/"
          color="#5c5c5c"
          class="mt-6"
          prepend-icon="mdi-arrow-left"
        >
          Volver al inicio
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
//
</script>
