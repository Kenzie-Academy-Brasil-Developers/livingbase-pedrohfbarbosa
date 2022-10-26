import { renderCards } from "./cards.js"

export const homeButton = () => {
  const homeButton = document.querySelector(".go-home-btn")

  homeButton.addEventListener("click", () => {
    localStorage.removeItem("categoryNow")
    window.location.replace("../home/index.html")
  })
}

export const createButtons = (e) => {
 
  const button = document.createElement("button")
  button.innerText = e
  button.classList.add("btn-category")

  button.addEventListener("click", () => {

    localStorage.setItem("categoryNow", e)    
    
    window.location.replace("../home/index.html")
  })

  return button  
}

export const renderButtonsHome = (className) => {
  const categories = ["Todos", ...JSON.parse(localStorage.getItem("categories"))]
  
  const btnsWrapper = document.querySelector(`.${className}`)
  btnsWrapper.innerHTML = ""

  categories.forEach(e => {
    btnsWrapper.appendChild(createButtons(e))
  })
}

export const btnClicked = () => {
  const btnsCategory = [...document.querySelectorAll(".btn-category")]

  btnsCategory.forEach((e) => {
    e.classList.remove("btn-clicked")

    if (localStorage.getItem("categoryNow") == e.innerText){
      e.classList.add("btn-clicked")
    }
  })
}
