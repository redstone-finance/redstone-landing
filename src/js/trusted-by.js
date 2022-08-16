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
    url: "https://www.pinnata.xyz/earn",
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
          class="trusted-by-button"
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
  }
}
