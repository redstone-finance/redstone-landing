import { generateClientCard } from "./clients";

const lstLrtClients = [
  {
    name: "EtherFi",
    logo: "/assets/img/clients/etherfi.png",
    url: "https://www.ether.fi/",
    announcement:
      "https://twitter.com/redstone_defi/status/1737503311941812232",
    tvlUrl: "https://api.llama.fi/tvl/ether.fi",
  },
  {
    name: "KelpDAO",
    logo: "/assets/img/clients/kelp-dao.png",
    url: "https://www.kelpdao.xyz/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/kelp-dao",
  },
  {
    name: "Renzo",
    logo: "/assets/img/clients/renzo.png",
    url: "https://www.renzoprotocol.com/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/renzo",
  },
  {
    name: "Swell",
    logo: "/assets/img/clients/swell.png",
    url: "https://www.swellnetwork.io/",
    announcement:
      "https://blog.redstone.finance/2023/06/22/case-study-redstone-oracles-provides-sweth-feed-for-swell-network",
    tvlUrl: "https://api.llama.fi/tvl/swell",
  },
  {
    name: "StakeWise",
    logo: "/assets/img/clients/stakewise.png",
    url: "https://www.stakewise.io/",
    announcement:
      "https://blog.redstone.finance/2024/01/05/case-study-stakewise-integrates-redstone-oracles-to-bring-oseth-to-defi",
    tvlUrl: "https://api.llama.fi/tvl/stakewise",
  },
  {
    name: "Stader",
    logo: "/assets/img/clients/morpho.png",
    url: "https://www.staderlabs.com/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/stader",
  },
  {
    name: "Redacted Cartel",
    logo: "/assets/img/clients/layerbank.png",
    url: "https://redacted.finance/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/redacted-protocol",
  },
  {
    name: "Lido",
    logo: "/assets/img/clients/lido.png",
    url: "https://lido.fi/",
    announcement:
      "https://blog.redstone.finance/2023/07/06/case-study-redstone-oracles-propelling-defi-with-lidos-steth-price-feed/",
    tvlUrl: "https://api.llama.fi/tvl/lido",
  },
];

const clientsLstLrtSection = document.getElementById("lst-lrt-clients");
if (clientsLstLrtSection) {
  const clientsLstLrtElement = document.getElementById("clients");
  lstLrtClients.forEach((client, index) => {
    const card = document.createElement("div");
    card.classList.add("col-5", "col-md-4", "col-lg-3");
    card.innerHTML = generateClientCard(
      client.name,
      client.logo,
      client.url,
      client.announcement
    );
    card.id = client.name;

    if (clientsLstLrtElement.childNodes.length !== lstLrtClients.length) {
      clientsLstLrtElement.appendChild(card);
    }

    fetch(client.tvlUrl).then((response) => {
      response.json().then((tvl) => {
        const clientCard = document.getElementById(lstLrtClients[index].name);
        clientCard.innerHTML = generateClientCard(
          client.name,
          client.logo,
          client.url,
          client.announcement,
          tvl
        );
      });
    });
  });
}
