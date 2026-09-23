<template>
  <v-dialog
    :model-value="true"
    max-width="700"
    @update:model-value="handleClose"
  >
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        <span class="text-h5">{{ movie.Title }}</span>
        <v-btn
          icon="mdi-close"
          variant="text"
          density="comfortable"
          @click="handleClose"
        />
      </v-card-title>

      <v-card-text>
        <div ref="topOfDetails"></div>

        <v-row>
          <v-col cols="12" sm="4">
            <v-img
              :src="posterSrc"
              class="rounded bg-grey-darken-2"
              cover
            >
              <template #placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-icon icon="mdi-image-off" size="40" color="grey-lighten-1" />
                </div>
              </template>
            </v-img>
          </v-col>

          <v-col cols="12" sm="8">
            <v-list density="compact">
              <v-list-item prepend-icon="mdi-calendar">
                <v-list-item-title>Año</v-list-item-title>
                <v-list-item-subtitle>{{ movie.Year }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-clock-outline">
                <v-list-item-title>Duración</v-list-item-title>
                <v-list-item-subtitle>{{ movie.Runtime }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-star">
                <v-list-item-title>Calificación</v-list-item-title>
                <v-list-item-subtitle>{{ movie.imdbRating }}/10</v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-tag-multiple">
                <v-list-item-title>Género</v-list-item-title>
                <v-list-item-subtitle>{{ movie.Genre }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-account">
                <v-list-item-title>Director</v-list-item-title>
                <v-list-item-subtitle>{{ movie.Director }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-account-group">
                <v-list-item-title>Actores</v-list-item-title>
                <v-list-item-subtitle>{{ movie.Actors }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>

        <v-divider class="my-3" />

        <div class="text-subtitle-2 mb-1">Sinopsis:</div>
        <p class="text-body-2">{{ movie.Plot }}</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed, watch, ref } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close-details'])

const topOfDetails = ref(null)

const posterSrc = computed(() => {
  return props.movie.Poster && props.movie.Poster !== 'N/A'
    ? props.movie.Poster
    : null
})

watch(() => props.movie, () => {
  topOfDetails.value?.scrollIntoView?.({ behavior: 'smooth' })
})

const handleClose = () => {
  emit('close-details')
}
</script>