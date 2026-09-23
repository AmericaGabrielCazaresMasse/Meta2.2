<template>
  <div>
    <h2 class="text-h5 mb-4">Resultados ({{ movies.length }})</h2>

    <v-row>
      <v-col
        v-for="movie in movies"
        :key="movie.imdbID"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="h-100 d-flex flex-column">
          <v-img
            :src="posterSrc(movie.Poster)"
            height="280"
            cover
            class="bg-grey-darken-2"
          >
            <template #placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-icon icon="mdi-image-off" size="48" color="grey-lighten-1" />
              </div>
            </template>
          </v-img>

          <v-card-title class="text-subtitle-1">
            {{ movie.Title }}
          </v-card-title>

          <v-card-subtitle>
            {{ movie.Year }} · {{ movie.Type }}
          </v-card-subtitle>

          <v-spacer />

          <v-card-actions>
            <v-btn
              variant="text"
              color="primary"
              @click="handleSelect(movie.imdbID)"
            >
              Ver detalles
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
defineProps({
  movies: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['select-movie'])

const handleSelect = (imdbID) => {
  emit('select-movie', imdbID)
}

const posterSrc = (poster) => {
  return poster && poster !== 'N/A' ? poster : null
}
</script>