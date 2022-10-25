const baseUrl = 'https://m2-api-living.herokuapp.com/news'

export const getCategories = async (page) => {
  const responseJson = await fetch(`${baseUrl}?page=${page}`)
  const response = await responseJson.json()

  return response.news.map(e => e.category)
}

