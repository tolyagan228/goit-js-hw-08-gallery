const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

let gallery = document.querySelector(".js-gallery");
let lightbox = document.querySelector(".js-lightbox");
let lightboxImage = document.querySelector(".lightbox__image");
let lightboxButton = document.querySelector(".lightbox__button");
let lightboxOverlay = document.querySelector(".lightbox__overlay");

for (let i = 0; i < galleryItems.length; i++) {
  let galleryItem = document.createElement("img");

  galleryItem.className = "gallery__image";
  galleryItem.src = galleryItems[i].original;
  galleryItem.alt = galleryItems[i].description;
  gallery.appendChild(galleryItem);
}

let allImages = document.querySelectorAll(".gallery__image");

gallery.addEventListener("click", (event) => {
  let target = event.target;
  let imageLink = target.src;

  lightboxImage.src = imageLink;
  lightbox.classList.add("is-open");

  var targetIndex = Array.from(allImages).indexOf(target);

  document.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
      lightbox.classList.remove("is-open");
    }
    if (
      event.key == "ArrowRight" &&
      targetIndex < Array.from(allImages).length - 1
    ) {
      targetIndex++;
      imageLink = galleryItems[targetIndex].original;
      lightboxImage.src = imageLink;
    }
    if (event.key == "ArrowLeft" && targetIndex > 0) {
      targetIndex--;
      imageLink = galleryItems[targetIndex].original;
      lightboxImage.src = imageLink;
    }
  });
});

lightboxButton.addEventListener("click", () => {
  lightbox.classList.remove("is-open");
});

lightboxOverlay.addEventListener("click", () => {
  lightbox.classList.remove("is-open");
});
