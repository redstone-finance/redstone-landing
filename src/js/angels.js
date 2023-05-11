const angels = [
  {
    name: "Stani Kulechov, Aave Companies and Lens Protocol Founder and CEO",
    image: "assets/img/angels/stani-kulechov.png",
  },
  {
    name: "Sandeep Nailwal, Polygon Co-Founder",
    image: "assets/img/angels/sandeep-nailwal.png",
  },
  {
    name: "Alex Gluchovski, Matter Labs (zkSync) CEO & Co-Founder",
    image: "assets/img/angels/alex-gluchovski.png",
  },
  {
    name: "Emin Gün Sirer, AvaLabs (Avalanche) CEO & Co-Founder",
    image: "assets/img/angels/emin-gun-sirer.png",
  },
  {
    name: "Coinflipcanada, GMX Core Contributor",
    image: "assets/img/angels/coinflipcanada.png",
  },
  {
    name: "Richard Ma, Quantstamp CEO",
    image: "assets/img/angels/richard-ma.png",
  },
  {
    name: "Hilmar Orth, Gelato Co-Founder",
    image: "assets/img/angels/hilmar-orth.png",
  },
  {
    name: "Marco Cora, Matter Labs (zkSync) Head of BD",
    image: "assets/img/angels/marco-cora.png",
  },
  {
    name: "Patrick Dai, Qtum Founder",
    image: "assets/img/angels/patrick-dai.png",
  },
];

const angelsSection = document.getElementById("cross-chain");
if (angelsSection) {
  const element = document.getElementById("angels");
  if (element.childNodes.length === 0) {
    angels.forEach((angel) => {
      const angelItem = document.createElement("div");
      angelItem.classList.add("tab-item");

      angelItem.innerHTML += `
        <img
          loading="lazy"
          src="${angel.image}"
          alt="${angel.name} Logo"
          height="100"
          width="100"
        />
        <p class="mb-0 mt-2" style="height: 100px;">${angel.name}</p>
      `;
      element.appendChild(angelItem);
    });
  }
}
