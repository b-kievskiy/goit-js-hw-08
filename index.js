import images from "./gallery-items.js";

("use strict");
const parentList = document.querySelector("ul.js-gallery");
const lightboxOverlay = document.querySelector(".js-lightbox");
const lightboxContent = document.querySelector(".lightbox__image");
const closeButton = document.querySelector(".lightbox__button");

images.map((image) => {
  parentList.insertAdjacentHTML(
    "beforeend",
    `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>
    `
  );
});

parentList.addEventListener("click", openOverlay);

function openOverlay(e) {
  e.preventDefault();
  const imageLink = e.target.dataset.source;

  lightboxOverlay.classList.add("is-open");
  lightboxContent.setAttribute("src", `${imageLink}`);
}

closeButton.addEventListener("click", closeOverlay);

function closeOverlay(e) {
  lightboxOverlay.classList.remove("is-open");
  lightboxContent.removeAttribute("src");
}
