const projects = [
  {
    name: "DeltaPrime",
    image: "assets/img/trusted-by/delta-prime.png",
    url: "https://deltaprime.io/",
  },
  {
    name: "ZKX",
    image: "assets/img/trusted-by/zkx.png",
    url: "https://zkx.fi/",
  },
  {
    name: "Moola Market",
    image: "assets/img/trusted-by/moola.png",
    url: "https://moola.market/",
  },
  {
    name: "FujiDAO",
    image: "assets/img/trusted-by/fuji.png",
    url: "https://www.fujidao.org/",
  },
  {
    name: "DLC.link",
    image: "assets/img/trusted-by/dlc-link.png",
    url: "https://www.dlc.link/",
  },
  {
    name: "Bundlr Network",
    image: "assets/img/trusted-by/bundlr.png",
    url: "https://bundlr.network/",
  },
  {
    name: "ArDrive",
    image: "assets/img/trusted-by/ardrive.png",
    url: "https://ardrive.io/",
  },
  {
    name: "Brightpool Finance",
    image: "assets/img/trusted-by/brightpool.png",
    url: "https://brightpool.finance/",
  },
  {
    name: "Prime Protocol",
    image: "assets/img/trusted-by/prime-protocol.png",
    url: "https://www.primeprotocol.xyz/",
  },
  {
    name: "Mento Finance",
    image: "assets/img/trusted-by/mento-finance.svg",
    url: "https://mento.finance/",
  },
  {
    name: "Lido",
    image: "assets/img/trusted-by/lido.png",
    url: "https://lido.fi/",
  },
  {
    name: "Gamma",
    image: "assets/img/trusted-by/gamma.png",
    url: "https://www.gamma.xyz/",
  },
  {
    name: "Vesta Finance",
    image: "assets/img/trusted-by/vesta-finance.png",
    url: "https://vestafinance.xyz/",
  },
  {
    name: "Y2K",
    image: "assets/img/trusted-by/y2k.png",
    url: "https://www.y2k.finance/",
  },
  {
    name: "Yield Yak",
    image: "assets/img/trusted-by/yield-yak.png",
    url: "https://twitter.com/yieldyak_/",
  },
  {
    name: "Float Capital",
    image: "assets/img/trusted-by/float-capital.png",
    url: "https://float.capital/",
  },
  {
    name: "Cadence Protocol",
    image: "assets/img/trusted-by/cadence-protocol.png",
    url: "https://twitter.com/CadenceProtocol",
  },
  {
    name: "Silo",
    image: "assets/img/trusted-by/silo.png",
    url: "https://www.silo.finance/",
  },
  {
    name: "Raft",
    image: "assets/img/trusted-by/raft.png",
    url: "https://www.raft.fi/",
  },
  {
    name: "Nostra",
    image: "assets/img/trusted-by/nostra.png",
    url: "https://nostra.finance/",
  },
  {
    name: "Hubble Exchange",
    image: "assets/img/trusted-by/hubble-exchange.png",
    url: "https://twitter.com/HubbleExchange/",
  },
  {
    name: "EMDX",
    image: "assets/img/trusted-by/emdx.png",
    url: "https://twitter.com/emdx_io/",
  },
  {
    name: "Voltz",
    image: "assets/img/trusted-by/voltz.png",
    url: "https://twitter.com/voltz_xyz/",
  },
  {
    name: "Swell",
    image: "assets/img/trusted-by/swell.png",
    url: "https://twitter.com/swellnetworkio/photo",
  },
];

const trustedByCrossChainSection = document.getElementById("cross-chain");
if (trustedByCrossChainSection) {
  const element = document.getElementById("trusted-by");
  if (element.childNodes.length === 0) {
    projects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.classList.add("tab-item");

      const isBlackBackgroundRequired = project.name === "Prime Protocol";

      projectItem.innerHTML += `
        <a
          href="${project.url}"
          role="button"
          target="_blank"
          rel="noreferrer noopener"
          class="trusted-by-button"
        >
          <img
            loading="lazy"
            src="${project.image}"
            alt="${project.name} Logo"
            height="60"
            width="60"
            style="${
              isBlackBackgroundRequired ? "background: black; padding: 6px" : ""
            }"  
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
