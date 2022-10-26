import { getCategories } from "./requests.js"

export const saveCategories = async () => {
  let page = 0
  let categories = []
  let catNow = ["initial"]

  while (catNow.length > 0) {
    catNow = await getCategories(page)

    catNow.forEach(e => {
      if(!categories.includes(e)){
        categories.push(e)
      }
    })

    page++
  }
  
  localStorage.setItem("categories", JSON.stringify(categories))

  return categories
}