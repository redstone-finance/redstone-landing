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
    title: "L2Beat Co-Founder",
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
  {
    name: "AltLayer",
    image: "assets/img/auditors-partners/altlayer.png",
  },
  {
    name: "Conduit",
    image: "assets/img/auditors-partners/conduit.png",
  },
  {
    name: "Lumoz",
    image: "assets/img/auditors-partners/lumoz.png",
  },
  {
    name: "Chaos Labs",
    image: "assets/img/auditors-partners/chaos-labs.png",
  },
  {
    name: "Gauntlet",
    image: "assets/img/auditors-partners/gauntlet.png",
  },
  {
    name: "Alterscope",
    image: "assets/img/auditors-partners/alterscope.png",
  },
  {
    name: "TokenLogic",
    image: "assets/img/auditors-partners/tokenlogic.png",
  },
  {
    name: "Sei",
    image: "assets/img/auditors-partners/sei.png",
  },
  {
    name: "Monad",
    image: "assets/img/auditors-partners/monad.png",
  },
  {
    name: "EigenLayer",
    image: "assets/img/auditors-partners/eigenlayer.png",
  },
  {
    name: "Staking Rewards",
    image: "assets/img/auditors-partners/staking-rewards.png",
  },
  {
    name: "Klin",
    image: "assets/img/auditors-partners/klin.png",
  },
  {
    name: "Hashnote",
    image: "assets/img/auditors-partners/hashnote.png",
  },
  {
    name: "Astria",
    image: "assets/img/auditors-partners/astria.png",
  },
  {
    name: "Espresso Systems",
    image: "assets/img/auditors-partners/espresso-systems.png",
  },
  {
    name: "Safary",
    image: "assets/img/auditors-partners/safary.png",
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
        />
        <p class="mb-0 mt-2">${auditorsPartnersElement.name}</p>
        <p class="mb-0 mt-0">${auditorsPartnersElement?.title ?? ""}</p>
      `;
      element.appendChild(auditorsPartnersItem);
    });
  }
}
