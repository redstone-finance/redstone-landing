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
    image: "assets/img/partners/coinbase-ventures.png",
  },
  {
    name: "Maven11",
    url: "https://www.maven11.com/",
    image: "assets/img/partners/maven11.png",
  },
  {
    name: "Arrington Capital",
    url: "https://www.arringtoncapital.com/",
    image: "assets/img/partners/arrington-capital.svg",
  },
  {
    name: "Arweave",
    url: "https://www.arweave.org/",
    image: "assets/img/partners/arweave.svg",
  },

  {
    name: "Lattice",
    url: "https://lattice.fund/",
    image: "assets/img/partners/lattice.png",
  },
  {
    name: "SevenX",
    url: "https://7xvc.com/",
    image: "assets/img/partners/seven-x.png",
  },
  {
    name: "IOSG",
    url: "https://iosg.vc/",
    image: "assets/img/partners/iosg.png",
  },
  {
    name: "Spartan Capital",
    url: "https://www.spartangroup.io/",
    image: "assets/img/partners/spartan-capital.jpg",
  },
  {
    name: "White Star Capital",
    url: "https://whitestarcapital.com/",
    image: "assets/img/partners/white-star-capital.png",
  },
  {
    name: "Protagonist",
    url: "https://www.protagonist.co/",
    image: "assets/img/partners/protagonist.png",
  },

  {
    name: "Alphemy Capital",
    url: "https://alphemy.capital/",
    image: "assets/img/partners/alphemy-capital.png",
  },
  {
    name: "Samara Asset Group",
    url: "https://www.samara-ag.com/",
    image: "assets/img/partners/samara-asset-group.png",
  },
  {
    name: "gumi Cryptos Capital",
    url: "https://www.gumi-cryptos.com/",
    image: "assets/img/partners/gumi-cryptos.jpeg",
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
    name: "Distributed Global",
    url: "http://www.distributedglobal.com/",
    image: "assets/img/partners/distributed-global.png",
  },

  {
    name: "Amber Group",
    url: "https://www.ambergroup.io/",
    image: "assets/img/partners/amber-group.png",
  },
  {
    name: "Thanefield Capital",
    url: "https://thanefield.capital/",
    image: "assets/img/partners/thanefield-capital.jpg",
  },
  {
    name: "Selini Capital",
    url: "https://www.selinicapital.com/",
    image: "assets/img/partners/selini-capital.png",
  },
  {
    name: "4RC",
    url: "https://www.fourthrevolution.capital/",
    image: "assets/img/partners/4rc.png",
  },
  {
    name: "Revelo Intel",
    url: "https://revelointel.com/",
    image: "assets/img/partners/revelo-intel.png",
  },
  {
    name: "HTX Ventures",
    url: "https://www.htx.com/ventures",
    image: "assets/img/partners/htx-ventures.png",
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
    name: "Kenetic Capital",
    url: "https://www.kenetic.capital/",
    image: "assets/img/partners/kenetic-capital.png",
  },
  {
    name: "Relayer Capital",
    url: "https://relayer.capital/",
    image: "assets/img/partners/relayer-capital.jpg",
  },
];

const partnersSection = document.getElementById("partners");
if (partnersSection) {
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
