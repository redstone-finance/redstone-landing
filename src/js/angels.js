const angels = [
  {
    name: "Stani Kulechov",
    title: "Aave & Lens Founder",
    image: "assets/img/angels/stani-kulechov.png",
  },
  {
    name: "Sandeep Nailwal",
    title: "Polygon Co-Founder",
    image: "assets/img/angels/sandeep-nailwal.png",
  },
  {
    name: "Alex Gluchovski",
    title: "zkSync Co-Founder",
    image: "assets/img/angels/alex-gluchovski.png",
  },
  {
    name: "Emin Gün Sirer",
    title: "Avalanche Co-Founder",
    image: "assets/img/angels/emin-gun-sirer.png",
  },
  {
    name: "Coinflipcanada",
    title: "GMX Contributor",
    image: "assets/img/angels/coinflipcanada.png",
  },
  {
    name: "Richard Ma",
    title: "Quantstamp CEO",
    image: "assets/img/angels/richard-ma.png",
  },
  {
    name: "Hilmar Orth",
    title: "Gelato Co-Founder",
    image: "assets/img/angels/hilmar-orth.png",
  },
  {
    name: "Marco Cora",
    title: "zkSync BD Head",
    image: "assets/img/angels/marco-cora.png",
  },
  {
    name: "Patrick Dai",
    title: "Qtum Founder",
    image: "assets/img/angels/patrick-dai.png",
  },
];

const angelsSection = document.getElementById("cross-chain");
if (angelsSection) {
  const element = document.getElementById("angels");
  if (element.childNodes.length === 0) {
    angels.forEach((angel) => {
      const angelItem = document.createElement("div");
      angelItem.classList.add("partner-item");
      angelItem.classList.add("mt-4");

      angelItem.innerHTML += `
        <img
          class="testimonial-image"
          loading="lazy"
          src="${angel.image}"
          alt="${angel.name} Logo"
        />
        <p class="mb-0 mt-2">${angel.name}</p>
        <p class="mb-0 mt-0" style="height: 100px;">${angel.title}</p>
      `;
      element.appendChild(angelItem);
    });
  }
}
