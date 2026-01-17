// javascript for stories
const container = document.querySelector(".stories");

const renderPosts = async () => {
  let uri = "http://localhost:3000/posts";
  const res = await fetch(uri);
  const posts = await res.json();
  
  let template = "";
  posts.forEach((post) => {
    template += `
      <div class="story">
        <h2>${post.title}</h2>
        <br>
        <p>${post.body.slice(0, 200)}...</p>
      </div>
    `;
  });
  container.innerHTML = template;
};
window.addEventListener("DOMContentLoaded", () => renderPosts());
