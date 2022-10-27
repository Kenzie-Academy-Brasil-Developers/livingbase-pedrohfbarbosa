import { btnClicked, renderButtonsHome } from "../../scripts/buttons.js";
import { renderCards } from "../../scripts/cards.js";
import { saveCategories } from "../../scripts/categories.js";
import { setInitialCategoryLocalStorage } from "../../scripts/localStorage.js";
import { getNews } from "../../scripts/requests.js";

await saveCategories()

setInitialCategoryLocalStorage()

renderButtonsHome("btns-wrapper")

let page = 0

await renderCards(localStorage.getItem("categoryNow"), page)

const observerDiv = document.querySelector(".observer")

const observer = new IntersectionObserver(async (entries) => {  
  if (entries.some((entry) => entry.isIntersecting)){
    const news = await getNews(page)

    if (news.length > 0){
      renderCards(localStorage.getItem("categoryNow"), page++)
    }
  }
})

observer.observe(observerDiv)

btnClicked()