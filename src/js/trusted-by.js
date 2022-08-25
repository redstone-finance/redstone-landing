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
    name: "Pinnata",
    image: "assets/img/trusted-by/pinnata.svg",
    url: "https://twitter.com/PinnataXYZ",
  },
  {
    name: "EverFinance",
    image: "assets/img/trusted-by/everfinance.png",
    url: "https://ever.finance/",
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
    name: "Unilend Finance",
    image: "assets/img/trusted-by/unilend-finance.png",
    url: "https://unilend.finance/",
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
  }
}
