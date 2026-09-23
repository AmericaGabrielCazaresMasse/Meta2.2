<template>
  <v-container class="pa-8">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">🎬 Buscador de Películas</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <movie-search
          @search-movies="handleSearch"
          @clear-results="handleClear"
        />
      </v-col>

      <v-col cols="12" md="8">
        <loading-spinner :loading="loading" />

        <movie-list
          v-if="movies.length > 0"
          :movies="movies"
          @select-movie="handleMovieSelect"
        />

        <v-pagination
          v-if="totalPages > 1"
          v-model="currentPage"
          :length="totalPages"
          :total-visible="5"
          class="mt-4"
          @update:model-value="handlePageChange"
        />

        <movie-details
          v-if="selectedMovie"
          :movie="selectedMovie"
          @close-details="handleCloseDetails"
        />

        <v-alert
          v-if="error"
          type="error"
          class="mt-4"
        >
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import movieSearch from '@/components/movieSearch.vue'
import movieList from '@/components/movieList.vue'
import movieDetails from '@/components/movieDetails.vue'
import loadingSpinner from '@/components/loadingSpinner.vue'
import { searchMovies, getMovieDetails } from '@/services/movieApi'

const movies = ref([])
const selectedMovie = ref(null)
const loading = ref(false)
const error = ref('')
const currentPage = ref(1)
const totalResults = ref(0)
const lastSearchParams = ref(null)

const totalPages = computed(() => Math.ceil(totalResults.value / 10))

const handleSearch = async (searchParams, page = 1) => {
  loading.value = true
  error.value = ''
  lastSearchParams.value = searchParams
  currentPage.value = page

  try {
    const response = await searchMovies({ ...searchParams, page })
    if (response.Search) {
      movies.value = response.Search
      totalResults.value = Number(response.totalResults) || 0
    } else {
      movies.value = []
      totalResults.value = 0
      error.value = 'No se encontraron películas'
    }
  } catch (err) {
    error.value = 'Error al buscar películas'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const handlePageChange = (page) => {
  if (lastSearchParams.value) {
    handleSearch(lastSearchParams.value, page)
  }
}

const handleMovieSelect = async (imdbID) => {
  loading.value = true
  try {
    selectedMovie.value = await getMovieDetails(imdbID)
  } catch (err) {
    error.value = 'Error al cargar detalles de la película'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const handleCloseDetails = () => {
  selectedMovie.value = null
}

const handleClear = () => {
  movies.value = []
  selectedMovie.value = null
  error.value = ''
  totalResults.value = 0
  currentPage.value = 1
  lastSearchParams.value = null
}

onMounted(() => {
  handleSearch({ query: 'matrix', type: 'movie', year: '' })
})
</script>
