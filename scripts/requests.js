const baseUrl = 'https://m2-api-living.herokuapp.com/news'

export const getCategories = async (page) => {
  try {

    const responseJson = await fetch(`${baseUrl}?page=${page}`)
    const response = await responseJson.json()
    
    if (responseJson.ok){
      return response.news.map(e => e.category)
    }
    
  }catch (err) {
    console.log(err)
  }
}

export const getNews = async (page) => {
  try {   
    const responseJson = await fetch(`${baseUrl}?page=${page}`)
    const response = await responseJson.json()
  
    if (responseJson.ok){
      return response.news
    }
    
  }catch(err){
    console.log(err)
  }
}