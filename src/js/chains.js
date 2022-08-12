const chains = [
  {
    name: "Ethereum",
    image: "assets/img/chains/eth.png",
  },
  {
    name: "Avalanche",
    image: "assets/img/chains/avax.png",
  },
  {
    name: "Polygon",
    image: "assets/img/chains/polygon.png",
  },
  {
    name: "Celo",
    image: "assets/img/chains/celo.png",
  },
  {
    name: "BNB",
    image: "assets/img/chains/bnb.png",
  },
  {
    name: "Optimism",
    image: "assets/img/chains/optimism.png",
  },
  {
    name: "Arbitrum",
    image: "assets/img/chains/arbitrum.png",
  },
  {
    name: "Fantom",
    image: "assets/img/chains/fantom.png",
  },
  {
    name: "Stacks",
    image: "assets/img/chains/stacks.png",
  },
  {
    name: "Evmos",
    image: "assets/img/chains/evmos.png",
  },
  {
    name: "Kava",
    image: "assets/img/chains/kava.png",
  },
  {
    name: "Gnosis",
    image: "assets/img/chains/gnosis.png",
  },
  {
    name: "RSK",
    image: "assets/img/chains/rsk.png",
  },
  {
    name: "Klaytn",
    image: "assets/img/chains/klaytn.png",
  },
  {
    name: "Cronos",
    image: "assets/img/chains/cronos.png",
  },
  {
    name: "Elrond",
    image: "assets/img/chains/elrond.png",
  },
  {
    name: "Metis",
    image: "assets/img/chains/metis.png",
  },
  {
    name: "Boba network",
    image: "assets/img/chains/boba.png",
  },
  {
    name: "Harmony",
    image: "assets/img/chains/harmony.png",
  },
  {
    name: "Moonbeam",
    image: "assets/img/chains/moonbeam.png",
  },
  {
    name: "Aurora",
    image: "assets/img/chains/aurora.png",
  },
  {
    name: "OKC",
    image: "assets/img/chains/okc.png",
  },
  {
    name: "Oasis Network",
    image: "assets/img/chains/oasis.png",
  },
  {
    name: "Velas",
    image: "assets/img/chains/velas.png",
  },
  {
    name: "Ontology",
    image: "assets/img/chains/ontology.png",
  },
];

const chainsCrossChainSection = document.getElementById("cross-chain");
if (chainsCrossChainSection) {
  const element = document.getElementById("chains");
  if (element.childNodes.length === 0) {
    chains.forEach((chain) => {
      const chainItem = document.createElement("div");
      chainItem.classList.add("tab-item");

      const isNonSquareLogo = ["Boba network", "RSK"].includes(chain.name);

      chainItem.innerHTML += `
        <img
          loading="lazy"
          src="${chain.image}"
          alt="${chain.name} Logo"
          height="60"
          ${isNonSquareLogo ? "height='60'" : "width='60'"}
        />
        <p class="mb-0 mt-2">${chain.name}</p>
      `;
      element.appendChild(chainItem);
    });
  }
}
