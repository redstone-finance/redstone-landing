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
    announcement: "https://x.com/redstone_defi/status/1760998051194573109",
    tvlUrl: "https://api.llama.fi/tvl/kelp-dao",
  },
  {
    name: "Renzo",
    logo: "/assets/img/clients/renzo.png",
    url: "https://www.renzoprotocol.com/",
    announcement: "https://x.com/redstone_defi/status/1760741284111896625",
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
    logo: "/assets/img/clients/stader.png",
    url: "https://www.staderlabs.com/",
    announcement: "https://x.com/redstone_defi/status/1702698921984962623",
    tvlUrl: "https://api.llama.fi/tvl/stader",
  },
  {
    name: "Redacted Cartel",
    logo: "/assets/img/clients/redacted.png",
    url: "https://redacted.finance/",
    announcement:
      "https://twitter.com/redstone_defi/status/1759608928189727042",
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
    card.classList.add("col-5", "col-md-4", "col-lg-3", "text-center");
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
