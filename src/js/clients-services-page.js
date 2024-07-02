import { generateClientCard } from "./clients";

const clientsServicesPage = [
  {
    name: "Pendle",
    logo: "/assets/img/clients/pendle.png",
    url: "https://www.pendle.finance/",
    announcement: "https://x.com/redstone_defi/status/1760260799833182642",
    tvlUrl: "https://api.llama.fi/tvl/pendle",
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
    name: "Venus",
    logo: "/assets/img/clients/venus.png",
    url: "https://venus.io/",
    announcement:
      "https://twitter.com/redstone_defi/status/1679188915218173952",
    tvlUrl: "https://api.llama.fi/tvl/venus",
  },
  {
    name: "Fraxlend",
    logo: "/assets/img/clients/frax.png",
    url: "https://app.frax.finance/fraxlend",
    announcement: "https://x.com/redstone_defi/status/1804529795310682267",
    tvlUrl: "https://api.llama.fi/tvl/fraxlend",
  },

  {
    name: "Ethena",
    logo: "/assets/img/clients/ethena.png",
    url: "https://www.ethena.fi/",
    announcement:
      "https://twitter.com/redstone_defi/status/1764682387127226633",
    tvlUrl: "https://api.llama.fi/tvl/ethena",
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
    name: "Renzo",
    logo: "/assets/img/clients/renzo.png",
    url: "https://www.renzoprotocol.com/",
    announcement: "https://x.com/redstone_defi/status/1760741284111896625",
    tvlUrl: "https://api.llama.fi/tvl/renzo",
  },
  {
    name: "Puffer",
    logo: "/assets/img/clients/puffer.png",
    url: "https://www.puffer.fi/",
    announcement: "https://x.com/redstone_defi/status/1777383319640113558",
    tvlUrl: "https://api.llama.fi/tvl/puffer-finance",
  },
];

const clientsServicesPageSection = document.getElementById(
  "services-page-clients"
);
if (clientsServicesPageSection) {
  const clientsServicesPageElement = document.getElementById("clients");
  clientsServicesPage.forEach((client, index) => {
    const card = document.createElement("div");
    card.classList.add("col-5", "col-md-4", "col-lg-3", "text-center");
    card.innerHTML = generateClientCard(
      client.name,
      client.logo,
      client.url,
      client.announcement
    );
    card.id = client.name;

    if (
      clientsServicesPageElement.childNodes.length !==
      clientsServicesPageSection.length
    ) {
      clientsServicesPageElement.appendChild(card);
    }

    fetch(client.tvlUrl).then((response) => {
      response.json().then((tvl) => {
        const clientCard = document.getElementById(
          clientsServicesPage[index].name
        );
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
