import { generateClientCard } from "./clients";

const clientsMainPage = [
  {
    name: "Venus",
    logo: "/assets/img/clients/venus.png",
    url: "https://venus.io/",
    announcement:
      "https://twitter.com/redstone_defi/status/1679188915218173952",
    tvlUrl: "https://api.llama.fi/tvl/venus",
  },
  {
    name: "Morpho Blue",
    logo: "/assets/img/clients/morpho.png",
    url: "https://app.morpho.org/",
    announcement:
      "https://twitter.com/redstone_defi/status/1753335171020136620",
    tvlUrl: "https://api.llama.fi/tvl/morpho-blue",
  },
  {
    name: "LayerBank",
    logo: "/assets/img/clients/layerbank.png",
    url: "https://layerbank.finance/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/layerbank",
  },
  {
    name: "Sommelier",
    logo: "/assets/img/clients/sommelier.png",
    url: "https://www.sommelier.finance/",
    announcement: "https://x.com/redstone_defi/status/1692574274605793339",
    tvlUrl: "https://api.llama.fi/tvl/sommelier",
  },
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
];

const clientsMainPageSection = document.getElementById("clients");
if (clientsMainPageSection) {
  const clientsMainPageElement = document.getElementById("main-page-clients");
  clientsMainPage.forEach((client, index) => {
    const card = document.createElement("div");
    card.classList.add("col-5", "col-md-4", "col-lg-3", "text-center");
    card.innerHTML = generateClientCard(
      client.name,
      client.logo,
      client.url,
      client.announcement
    );
    card.id = client.name;

    if (clientsMainPageElement.childNodes.length !== clientsMainPage.length) {
      clientsMainPageElement.appendChild(card);
    }

    fetch(client.tvlUrl).then((response) => {
      response.json().then((tvl) => {
        const clientCard = document.getElementById(clientsMainPage[index].name);
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
