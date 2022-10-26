import { renderButtonsHome } from "../../scripts/buttons.js";
import { renderCards } from "../../scripts/cards.js";
import { saveCategories } from "../../scripts/categories.js";
import { setInitialCategoryLocalStorage } from "../../scripts/localStorage.js";
import { getCategories, getNews } from "../../scripts/requests.js";

await saveCategories()

setInitialCategoryLocalStorage()

renderButtonsHome("btns-wrapper")

let page = 0

await renderCards(localStorage.getItem("categoryNow"), page)

const observerDiv = document.querySelector(".observer")

/* console.log((await getNews(page))) */


/* window.addEventListener("beforeunload", (e)=> {
  e.preventDefault()
  localStorage.removeItem("categoryNow")
}) */

const observer = new IntersectionObserver((entries) => {  
  if (entries.some((entry) => entry.isIntersecting)){
    renderCards(localStorage.getItem("categoryNow"), page++)
  }
})

observer.observe(observerDiv)