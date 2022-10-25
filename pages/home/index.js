import { renderButtonsHome } from "../../scripts/buttons.js";
import { renderCards } from "../../scripts/cards.js";
import { saveCategories } from "../../scripts/categories.js";
import { getCategories, getNews } from "../../scripts/requests.js";

await saveCategories()

console.log((await getNews(0)))

renderButtonsHome()

await renderCards("Todos", 0)