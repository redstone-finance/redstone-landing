const angels = [
  {
    name: "Stani Kulechov",
    title: "Aave & Lens Founder",
    image: "assets/img/angels/stani-kulechov.png",
    url: "https://twitter.com/StaniKulechov",
  },
  {
    name: "Sandeep Nailwal",
    title: "Polygon Co-Founder",
    image: "assets/img/angels/sandeep-nailwal.png",
    url: "https://twitter.com/sandeepnailwal",
  },
  {
    name: "Alex Gluchovski",
    title: "zkSync Co-Founder",
    image: "assets/img/angels/alex-gluchovski.png",
    url: "https://twitter.com/gluk64",
  },
  {
    name: "Emin Gün Sirer",
    title: "Ava Labs Founder",
    image: "assets/img/angels/emin-gun-sirer.png",
    url: "https://twitter.com/el33th4xor",
  },
  {
    name: "Smokey",
    title: "Berachain Co-Founder",
    image: "assets/img/angels/smokey.jpg",
    url: "https://x.com/SmokeyTheBera",
  },
  {
    name: "Richard Ma",
    title: "Quantstamp CEO",
    image: "assets/img/angels/richard-ma.png",
    url: "https://www.linkedin.com/in/rtmtd/",
  },
  {
    name: "Jeff Yin",
    title: "Merlin Chain Founder",
    image: "assets/img/angels/jeff-yin.jpg",
    url: "https://x.com/BitmapTech",
  },
  {
    name: "Daniel Dizon",
    title: "Swell Founder",
    image: "assets/img/angels/daniel-dizon.jpg",
    url: "https://x.com/daniel_swell_",
  },
  {
    name: "Mike Silagadze",
    title: "Etherfi CEO",
    image: "assets/img/angels/mike-silagadze.jpg",
    url: "https://x.com/MikeSilagadze",
  },
  {
    name: "Amir Forouzani",
    title: "Puffer CEO",
    image: "assets/img/angels/amir-forouzani.jpg",
    url: "https://x.com/amironchain",
  },
  {
    name: "Coinflipcanada",
    title: "GMX Contributor",
    image: "assets/img/angels/coinflipcanada.png",
    url: "https://twitter.com/coinflipcanada",
  },
  {
    name: "Patrick Dai",
    title: "Qtum Founder",
    image: "assets/img/angels/patrick-dai.png",
    url: "https://twitter.com/PatrickXDai",
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
        <a
          href="${angel.url}"
          role="button"
          target="_blank"
          rel="noreferrer noopener"
          class="link-like-text-button-flex"
        >
          <img
            class="testimonial-image"
            loading="lazy"
            src="${angel.image}"
            alt="${angel.name} Logo"
          />
          <p class="mb-0 mt-2">${angel.name}</p>
          <p class="mb-0 mt-0" style="height: 75px;">${angel.title}</p>
        </a>
      `;
      element.appendChild(angelItem);
    });
  }
}
