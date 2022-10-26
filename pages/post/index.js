import { homeButton, renderButtonsHome } from "../../scripts/buttons.js";
import { mainPost } from "../../scripts/mainPost.js";

homeButton()

await mainPost(localStorage.getItem("postId"))

renderButtonsHome("btns-wrapper-post")