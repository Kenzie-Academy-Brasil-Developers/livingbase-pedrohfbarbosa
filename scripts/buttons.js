import { renderCards } from "./cards.js"

export const createButtons = (e) => {
 
  const button = document.createElement("button")
  button.innerText = e
  button.classList.add("btn-category")

  button.addEventListener("click", () => {

    localStorage.setItem("categoryNow", e)

    renderCards(e, 0)
    /* window.location.replace("../home/index.html") */
  })

  return button
  
}

export const renderButtonsHome = () => {
  const categories = ["Todos", ...JSON.parse(localStorage.getItem("categories"))]
  
  const btnsWrapper = document.querySelector(".btns-wrapper")
  btnsWrapper.innerHTML = ""

  categories.forEach(e => {
    btnsWrapper.appendChild(createButtons(e))
  })
}