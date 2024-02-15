const projects = [
  {
    name: "DeltaPrime",
    image: "assets/img/clients/deltaprime.png",
    url: "https://deltaprime.io/",
  },
  {
    name: "Venus",
    image: "assets/img/clients/venus.png",
    url: "https://venus.io/",
  },
  {
    name: "Sommelier",
    image: "assets/img/clients/sommelier.png",
    url: "https://www.sommelier.finance/",
  },
  {
    name: "Enzyme",
    image: "assets/img/clients/enzyme.png",
    url: "https://www.fujidao.org/",
  },
  {
    name: "Gravita",
    image: "assets/img/clients/gravita.png",
    url: "https://www.gravitaprotocol.com/",
  },
  {
    name: "Silo",
    image: "assets/img/clients/silo.png",
    url: "https://www.silo.finance/",
  },
  {
    name: "Gearbox",
    image: "assets/img/clients/gearbox.png",
    url: "https://gearbox.fi/",
  },
  {
    name: "Morpho Blue",
    image: "assets/img/clients/morpho.png",
    url: "https://app.morpho.org/",
  },
  {
    name: "CIAN",
    image: "assets/img/clients/cian.png",
    url: "https://cian.app/",
  },
  {
    name: "Mento Labs",
    image: "assets/img/clients/mento-finance.svg",
    url: "https://www.mentolabs.xyz/",
  },
  {
    name: "Lido",
    image: "assets/img/clients/lido.png",
    url: "https://lido.fi/",
  },
  {
    name: "Gamma",
    image: "assets/img/clients/gamma.png",
    url: "https://www.gamma.xyz/",
  },
  {
    name: "Vesta Finance",
    image: "assets/img/clients/vesta.png",
    url: "https://vestafinance.xyz/",
  },
  {
    name: "Y2K",
    image: "assets/img/clients/y2k.png",
    url: "https://www.y2k.finance/",
  },
  {
    name: "Swell",
    image: "assets/img/clients/swell.png",
    url: "https://www.swellnetwork.io/",
  },
  {
    name: "Angle",
    image: "assets/img/clients/angle.png",
    url: "https://www.angle.money/",
  },
  {
    name: "LayerBank",
    image: "assets/img/clients/layerbank.png",
    url: "https://layerbank.finance/",
  },
  {
    name: "Cadence Protocol",
    image: "assets/img/clients/cadence.png",
    url: "https://www.cadenceprotocol.io/",
  },
  {
    name: "Silo",
    image: "assets/img/clients/silo.png",
    url: "https://www.silo.finance/",
  },
  {
    name: "Term Finance",
    image: "assets/img/clients/term.png",
    url: "https://mytermfinance.com/",
  },
  {
    name: "Nostra",
    image: "assets/img/clients/nostra.png",
    url: "https://nostra.finance/",
  },
  {
    name: "Hubble Exchange",
    image: "assets/img/clients/hubble-exchange.png",
    url: "https://app.hubble.exchange/",
  },

  {
    name: "ZeroLend",
    image: "assets/img/clients/zerolend.png",
    url: "https://zerolend.xyz/",
  },
  {
    name: "Shoebill",
    image: "assets/img/clients/shoebill.png",
    url: "https://shoebill.finance/",
  },
];

const trustedByCrossChainSection = document.getElementById("cross-chain");
if (trustedByCrossChainSection) {
  const element = document.getElementById("trusted-by");
  if (element.childNodes.length === 0) {
    projects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.classList.add("tab-item");
      projectItem.innerHTML += `
        <a
          href="${project.url}"
          role="button"
          target="_blank"
          rel="noreferrer noopener"
          class="link-like-text-button"
        >
          <img
            loading="lazy"
            src="${project.image}"
            alt="${project.name} Logo"
            height="60"
            width="60"
          />
          <p class="mb-0 mt-2">${project.name}</p>
        </a>
      `;
      element.appendChild(projectItem);
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
    <p class="mb-0 mt-2 fw-bold">
      And many more!
    </p>
  `;
    element.appendChild(manyMoreItem);
  }
}
