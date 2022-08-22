const partners = [
  {
    name: "Lemniscap",
    url: "https://lemniscap.com/",
    image: "assets/img/partners/lemniscap.png",
  },
  {
    name: "Blockchain Capital",
    url: "https://blockchain.capital/",
    image: "assets/img/partners/blockchain-capital.png",
  },
  {
    name: "Coinbase Ventures",
    url: "https://www.coinbase.com/ventures",
    image: "assets/img/partners/coinbase.png",
  },
  {
    name: "Maven11",
    url: "https://www.maven11.com/",
    image: "assets/img/partners/maven11.svg",
  },
  {
    name: "Distributed Global",
    url: "http://www.distributedglobal.com/",
    image: "assets/img/partners/distributed-global.png",
  },
  {
    name: "Arweave",
    url: "https://www.arweave.org/",
    image: "assets/img/partners/arweave.svg",
  },
  {
    name: "Lattice",
    url: "https://lattice.com/",
    image: "assets/img/partners/lattice.png",
  },
  {
    name: "SevenX",
    url: "https://7xvc.com/",
    image: "assets/img/partners/seven-x.png",
  },
  {
    name: "KR1",
    url: "https://www.kryptonite1.co/",
    image: "assets/img/partners/kr1.jpg",
  },
  {
    name: "BeringWaters",
    url: "https://beringwaters.com/",
    image: "assets/img/partners/beringwaters.png",
  },
  {
    name: "1KX",
    url: "https://twitter.com/1kxnetwork",
    image: "assets/img/partners/1kx.jpeg",
  },
  {
    name: "Collider Ventures",
    url: "https://www.collider.vc/",
    image: "assets/img/partners/collider.png",
  },
  {
    name: "Folius Ventures",
    url: "https://www.folius.ventures/",
    image: "assets/img/partners/folius-ventures.png",
  },
  {
    name: "TRGC",
    url: "https://trgc.io/",
    image: "assets/img/partners/trgc.svg",
  },
  {
    name: "Permanent Ventures",
    url: "https://tqjushdada2qw2abowhuntnplwacih4pa4nb6mitibg2i645xkvq.arweave.net/nBNJHGAYNQtoAXWPRs2vXYAkH48HGh8xE0BNpHuduqs",
    image: "assets/img/partners/permanent-ventures.png",
  },
  {
    name: "4SV",
    url: "https://www.4sv.io/",
    image: "assets/img/partners/4sv.png",
  },
  {
    name: "Numeus",
    url: "https://numeus.xyz/",
    image: "assets/img/partners/numeus.png",
  },
  {
    name: "The Graph",
    url: "https://thegraph.com/",
    image: "assets/img/partners/graph.png",
  },
  {
    name: "Compute Ventures",
    url: "https://compute.ventures/",
    image: "assets/img/partners/compute-ventures.svg",
  },
];

const partnerCrossChainSection = document.getElementById("partners");
if (partnerCrossChainSection) {
  const element = document.getElementById("backed-by");
  if (element.childNodes.length === 0) {
    partners.forEach((partner) => {
      const partnerItem = document.createElement("div");
      partnerItem.classList.add("partner-item");

      const isBlackBackgroundRequired = partner.name === "Distributed Global";

      partnerItem.innerHTML += `
        <a
          href="${partner.url}"
          role="button"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="${partner.image}"
            width="120px"
            alt="${partner.name} Logo"
            style="${
              isBlackBackgroundRequired ? "background: black; padding: 6px" : ""
            }"
          />
        </a>
      `;
      element.appendChild(partnerItem);
    });
  }
}
