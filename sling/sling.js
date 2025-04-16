import { technologyList } from "./technologyList.js";
const ulGallery = document.querySelector(".gallery");
console.log(technologyList);
const galleryMarkupLi = technologyList
  .map(
    ({ img, description, text }) => `
      <li class="gallery__item">
      <p>${text}</p>
        ${img
          .map(
            (image) => `
          <img
            class="gallery__image"
            src="${image}"
            alt="${description}"
            width="350"
          />
        `
          )
          .join("")}
       
      </li>
    `
  )
  .join("");

console.log(galleryMarkupLi);
ulGallery.insertAdjacentHTML("beforeend", galleryMarkupLi);
