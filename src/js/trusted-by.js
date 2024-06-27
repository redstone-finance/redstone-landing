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
    name: "Pendle",
    image: "assets/img/clients/pendle.png",
    url: "https://www.pendle.finance/",
  },
  {
    name: "Morpho Blue",
    image: "assets/img/clients/morpho.png",
    url: "https://app.morpho.org/",
  },
  {
    name: "Silo",
    image: "assets/img/clients/silo.png",
    url: "https://www.silo.finance/",
  },
  {
    name: "Sommelier",
    image: "assets/img/clients/sommelier.png",
    url: "https://www.sommelier.finance/",
  },
  {
    name: "Gearbox",
    image: "assets/img/clients/gearbox.png",
    url: "https://gearbox.fi/",
  },
  {
    name: "LayerBank",
    image: "assets/img/clients/layerbank.png",
    url: "https://layerbank.finance/",
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
  {
    name: "Term Finance",
    image: "assets/img/clients/term.png",
    url: "https://www.term.finance/",
  },
  {
    name: "Angle",
    image: "assets/img/clients/angle.png",
    url: "https://www.angle.money/",
  },
  {
    name: "Lido",
    image: "assets/img/clients/lido.png",
    url: "https://lido.fi/",
  },
  {
    name: "Swell",
    image: "assets/img/clients/swell.png",
    url: "https://www.swellnetwork.io/",
  },
  {
    name: "Renzo",
    image: "assets/img/clients/renzo.png",
    url: "https://www.renzoprotocol.com/",
  },
  {
    name: "Etherfi",
    image: "assets/img/clients/etherfi.png",
    url: "https://www.ether.fi/",
  },
  {
    name: "Prisma",
    image: "assets/img/clients/prisma.png",
    url: "https://prismafinance.com/",
  },
  {
    name: "Gravita",
    image: "assets/img/clients/gravita.png",
    url: "https://www.gravitaprotocol.com/",
  },
  {
    name: "Enzyme",
    image: "assets/img/clients/enzyme.png",
    url: "https://enzyme.finance/",
  },
  {
    name: "CIAN",
    image: "assets/img/clients/cian.png",
    url: "https://cian.app/",
  },
  {
    name: "Mento",
    image: "assets/img/clients/mento.png",
    url: "https://www.mento.org/",
  },
  {
    name: "Hubble Exchange",
    image: "assets/img/clients/hubble-exchange.png",
    url: "https://app.hubble.exchange/",
  },
  {
    name: "Gamma",
    image: "assets/img/clients/gamma.png",
    url: "https://www.gamma.xyz/",
  },
  {
    name: "Cadence Protocol",
    image: "assets/img/clients/cadence.png",
    url: "https://www.cadenceprotocol.io/",
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
          class="link-like-text-button-flex"
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
    <a class="mb-0 mt-2 fw-bold" href="/clients">
      & many more!
    </a>
  `;
    element.appendChild(manyMoreItem);
  }
}
