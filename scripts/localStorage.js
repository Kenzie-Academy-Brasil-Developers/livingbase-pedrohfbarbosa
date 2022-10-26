export const setInitialCategoryLocalStorage = () => {
  const categoryNow = localStorage.getItem("categoryNow")

  if (!categoryNow) {
    localStorage.setItem("categoryNow", "Todos")
  }
}