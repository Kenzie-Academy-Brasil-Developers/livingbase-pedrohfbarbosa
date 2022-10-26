import { getCurrentNews } from "./requests.js";

export const mainPost = async (id) => {
  const post = await getCurrentNews(id)

  const sectionPost = document.querySelector(".main-post")

  sectionPost.innerHTML = `
    <div class="post-header">
      <h2>
        ${post.title}
      </h2>
      <p>
        ${post.description}
      </p>
    </div>

    <div class="post-img">
      <img src="${post.image}" alt="${post.title}">  
    </div>

    <div class="post-body">
      <p>
        ${post.content}
      </p>
    </div>
  `
}