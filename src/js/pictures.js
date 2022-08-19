const pictures = [
  {
    text: "test 1",
    image: "assets/img/pictures/6.jpg",
  },
  {
    text: "test 2",
    image: "assets/img/pictures/7.jpg",
  },
  {
    text: "test 3",
    image: "assets/img/pictures/8.jpg",
  },
  {
    text: "test 4",
    image: "assets/img/pictures/9.jpg",
  },
];

const pictureSection = document.getElementById("pictures");
if (pictureSection) {
  pictures.forEach((picture) => {
    const pictureItem = document.createElement("div");
    pictureItem.classList.add("col-12", "col-sm-5", "col-md-3", "col-lg-3");

    pictureItem.innerHTML += `
      <img
        loading="lazy"
        src="${picture.image}"
        alt="${picture.text}"
        width="100%"
      />
      <p class="mb-0 mt-2 text-center">${picture.text}</p>
    `;
    pictureSection.appendChild(pictureItem);
  });
}
