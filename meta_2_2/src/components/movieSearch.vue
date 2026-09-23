<template>
  <v-card class="pa-4">
    <v-card-title class="d-flex align-center">
      <v-icon icon="mdi-magnify" class="mr-2" />
      Buscar Películas
    </v-card-title>

    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-text-field
          ref="titleInput"
          v-model="query"
          label="Título de la película"
          placeholder="Ej: matrix"
          variant="outlined"
          density="comfortable"
          class="mb-3"
        />

        <v-select
          v-model="type"
          :items="typeOptions"
          label="Tipo"
          variant="outlined"
          density="comfortable"
          class="mb-3"
        />

        <v-text-field
          v-model="year"
          label="Año"
          placeholder="Ej: 1999"
          variant="outlined"
          density="comfortable"
          type="number"
          class="mb-3"
        />

        <v-btn
          type="submit"
          color="primary"
          block
          prepend-icon="mdi-magnify"
          :disabled="!query"
          class="mb-2"
        >
          Buscar
        </v-btn>

        <v-btn
          variant="outlined"
          block
          prepend-icon="mdi-close"
          @click="handleClear"
        >
          Limpiar
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['search-movies', 'clear-results'])

const query = ref('')
const type = ref('movie')
const year = ref('')
const titleInput = ref(null)

const typeOptions = [
  { title: 'Película', value: 'movie' },
  { title: 'Serie', value: 'series' },
  { title: 'Episodio', value: 'episode' }
]

onMounted(() => {
  titleInput.value?.focus()
})

const handleSubmit = () => {
  if (!query.value.trim()) return

  emit('search-movies', {
    query: query.value.trim(),
    type: type.value,
    year: year.value
  })
}

const handleClear = () => {
  query.value = ''
  type.value = 'movie'
  year.value = ''
  emit('clear-results')
}
</script>