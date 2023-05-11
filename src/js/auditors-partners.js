const auditorsPartners = [
  {
    name: "ABDK",
    image: "assets/img/auditors-partners/abdk.png",
  },
  {
    name: "Peckshield",
    image: "assets/img/auditors-partners/peckshield.png",
  },
  {
    name: "Piotr Szlachciak",
    image: "assets/img/auditors-partners/l2beat.png",
  },
  {
    name: "AuditOne",
    image: "assets/img/auditors-partners/auditone.png",
  },
  {
    name: "Gelato",
    image: "assets/img/auditors-partners/gelato.png",
  },
  {
    name: "Quantstamp",
    image: "assets/img/auditors-partners/quantstamp.png",
  },
  {
    name: "Sygnum",
    image: "assets/img/auditors-partners/sygnum.png",
  },
  {
    name: "Caldera",
    image: "assets/img/auditors-partners/caldera.png",
  },
];

const auditorsPartnersChainsCrossChainSection =
  document.getElementById("cross-chain");
if (auditorsPartnersChainsCrossChainSection) {
  const element = document.getElementById("auditors-partners");
  if (element.childNodes.length === 0) {
    auditorsPartners.forEach((auditorsPartnersElement) => {
      const auditorsPartnersItem = document.createElement("div");
      auditorsPartnersItem.classList.add("tab-item");

      auditorsPartnersItem.innerHTML += `
        <img
          loading="lazy"
          src="${auditorsPartnersElement.image}"
          alt="${auditorsPartnersElement.name} Logo"
          height="60"
          width="60
        />
        <p class="mb-0 mt-2">${auditorsPartnersElement.name}</p>
      `;
      element.appendChild(auditorsPartnersItem);
    });
  }
}
