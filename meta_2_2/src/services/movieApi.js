const API_KEY = 'ecf001da'
const BASE_URL = 'https://www.omdbapi.com/'

export const searchMovies = async (params) => {
  const url = new URL(BASE_URL)
  url.searchParams.set('apikey', API_KEY)
  url.searchParams.set('s', params.query)
  url.searchParams.set('type', params.type || 'movie')
  url.searchParams.set('y', params.year || '')
  url.searchParams.set('page', params.page || 1)

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }

  const data = await response.json()

  if (data.Response === 'False') {
    throw new Error(data.Error || 'No se encontraron resultados')
  }

  return data
}

export const getMovieDetails = async (imdbID) => {
  const url = new URL(BASE_URL)
  url.searchParams.set('apikey', API_KEY)
  url.searchParams.set('i', imdbID)
  url.searchParams.set('plot', 'full')

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }

  const data = await response.json()

  if (data.Response === 'False') {
    throw new Error(data.Error || 'No se pudo obtener el detalle')
  }

  return data
}