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
    name: "Polygon zkEVM & PoS",
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
    name: "zkSync Era",
    image: "assets/img/chains/zk-sync.png",
  },
  {
    name: "Base",
    image: "assets/img/chains/base.png",
  },
  {
    name: "Scroll",
    image: "assets/img/chains/scroll.png",
  },
  {
    name: "Starknet",
    image: "assets/img/chains/starknet.png",
  },
  {
    name: "Canto",
    image: "assets/img/chains/canto.png",
  },
  {
    name: "Fuel Network",
    image: "assets/img/chains/fuel-network.png",
  },
  {
    name: "TON",
    image: "assets/img/chains/ton.png",
  },
  {
    name: "Fantom",
    image: "assets/img/chains/fantom.png",
  },
  {
    name: "Mode",
    image: "assets/img/chains/mode.png",
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
    name: "Manta",
    image: "assets/img/chains/manta.png",
  },
  {
    name: "Blast",
    image: "assets/img/chains/blast.png",
  },
  {
    name: "Cronos",
    image: "assets/img/chains/cronos.png",
  },
  {
    name: "Mantle",
    image: "assets/img/chains/mantle.png",
  },
  {
    name: "Linea",
    image: "assets/img/chains/linea.png",
  },
  {
    name: "Fraxtal",
    image: "assets/img/chains/fraxtal.png",
  },
  {
    name: "Reya",
    image: "assets/img/chains/reya.png",
  },
  {
    name: "zkLink Nova",
    image: "assets/img/chains/zklink-nova.png",
  },
  {
    name: "Etherlink",
    image: "assets/img/chains/etherlink.png",
  },
  {
    name: "B² Network",
    image: "assets/img/chains/b2network.png",
  },
  {
    name: "X Layer",
    image: "assets/img/chains/xlayer.png",
  },
  {
    name: "Parallel",
    image: "assets/img/chains/parallel.png",
  },
  {
    name: "BOB",
    image: "assets/img/chains/bob.png",
  },
  {
    name: "Story Protocol",
    image: "assets/img/chains/story-protocol.png",
  },
  {
    name: "Berachain",
    image: "assets/img/chains/berachain.png",
  },
  {
    name: "CyberConnect",
    image: "assets/img/chains/cyberconnect.png",
  },
];

const chainsCrossChainSection = document.getElementById("cross-chain");
if (chainsCrossChainSection) {
  const element = document.getElementById("chains");
  if (element.childNodes.length === 0) {
    chains.forEach((chain) => {
      const chainItem = document.createElement("div");
      chainItem.classList.add("tab-item");

      chainItem.innerHTML += `
        <img
          loading="lazy"
          src="${chain.image}"
          alt="${chain.name} Logo"
          height="60"
          width="60"
        />
        <p class="mb-0 mt-2">${chain.name}</p>
      `;
      element.appendChild(chainItem);
    });
    const manyMoreItem = document.createElement("div");
    manyMoreItem.classList.add(
      "d-flex",
      "col-lg-12",
      "justify-content-center",
      "mt-lg-0",
      "mt-n5"
    );
    manyMoreItem.innerHTML += `
      <a
        class="mb-0 mt-2 fw-bold"
        href="https://docs.redstone.finance/docs/smart-contract-devs/supported-chains"
        target="_blank"
        role="button"
        referrerpolicy="no-referrer"
      >
        Full list in Docs!
      </a>
    `;
    element.appendChild(manyMoreItem);
  }
}
