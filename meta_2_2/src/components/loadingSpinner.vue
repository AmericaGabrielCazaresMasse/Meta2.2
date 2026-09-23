<template>
  <div v-if="loading" class="d-flex flex-column align-center justify-center pa-8">
    <v-progress-circular
      indeterminate
      color="primary"
      size="64"
      width="6"
    />
    <p class="mt-4 text-body-1">Buscando películas...</p>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    required: true,
    default: false
  }
})
</script>