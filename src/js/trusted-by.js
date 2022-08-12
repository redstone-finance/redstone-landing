const projects = [
  {
    name: "DeltaPrime",
    image: "assets/img/trusted-by/delta-prime.png",
  },
  {
    name: "ZKX",
    image: "assets/img/trusted-by/zkx.png",
  },
  {
    name: "Moola Market",
    image: "assets/img/trusted-by/moola.png",
  },
  {
    name: "FujiDAO",
    image: "assets/img/trusted-by/fuji.png",
  },
  {
    name: "DLC.link",
    image: "assets/img/trusted-by/dlc-link.png",
  },
  {
    name: "Bundlr Network",
    image: "assets/img/trusted-by/bundlr.png",
  },
  {
    name: "ArDrive",
    image: "assets/img/trusted-by/ardrive.png",
  },
  {
    name: "Pinnata",
    image: "assets/img/trusted-by/pinnata.png",
  },
];

const trustedByCrossChainSection = document.getElementById("cross-chain");
if (trustedByCrossChainSection) {
  const element = document.getElementById("trusted-by");
  if (element.childNodes.length === 0) {
    projects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.classList.add("tab-item");

      const isNonSquareLogo = ["Boba network", "RSK"].includes(project.name);

      projectItem.innerHTML += `
        <img
          loading="lazy"
          src="${project.image}"
          alt="${project.name} Logo"
          height="60"
          ${isNonSquareLogo ? "height='60'" : "width='60'"}
        />
        <p class="mb-0 mt-2">${project.name}</p>
      `;
      element.appendChild(projectItem);
    });
  }
}
