const pictures = [
  {
    image: "/assets/img/pictures/1.jpg",
  },
  {
    image: "/assets/img/pictures/2.jpg",
  },
  {
    image: "/assets/img/pictures/3.jpg",
  },
  {
    image: "/assets/img/pictures/4.jpg",
  },
  {
    image: "/assets/img/pictures/5.jpg",
  },
  {
    image: "/assets/img/pictures/6.jpg",
  },
  {
    image: "/assets/img/pictures/7.jpg",
  },
  {
    image: "/assets/img/pictures/8.jpg",
  },
  {
    image: "/assets/img/pictures/9.jpg",
  },
  {
    image: "/assets/img/pictures/10.jpeg",
  },
  {
    image: "/assets/img/pictures/11.jpeg",
  },
  {
    image: "/assets/img/pictures/12.jpeg",
  },
  {
    image: "/assets/img/pictures/13.jpeg",
  },
  {
    image: "/assets/img/pictures/14.jpeg",
  },
  {
    image: "/assets/img/pictures/15.jpeg",
  },
  {
    image: "/assets/img/pictures/16.jpeg",
  },
];

const pictureSection = document.getElementById("gallery");
if (pictureSection) {
  pictures.forEach((picture) => {
    const pictureItem = document.createElement("img");
    pictureItem.src = picture.image;
    pictureSection.appendChild(pictureItem);
  });
}
