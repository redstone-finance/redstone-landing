const featuredClients = [
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
    name: "Enzyme",
    logo: "/assets/img/clients/enzyme.png",
    url: "https://enzyme.finance/",
    announcement: " https://x.com/redstone_defi/status/1715012465929723989",
    tvlUrl: "https://api.llama.fi/tvl/enzyme-finance",
  },
  {
    name: "DeltaPrime",
    logo: "/assets/img/clients/deltaprime.png",
    url: "https://deltaprime.io/",
    announcement:
      "https://twitter.com/redstone_defi/status/1750519070758436929",
    tvlUrl: "https://api.llama.fi/tvl/deltaprime",
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
    name: "Silo",
    logo: "/assets/img/clients/silo.png",
    url: "https://www.silo.finance/",
    announcement:
      "https://twitter.com/redstone_defi/status/1737503311941812232",
    tvlUrl: "https://api.llama.fi/tvl/silo-finance",
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
    name: "Pendle",
    logo: "/assets/img/clients/pendle.png",
    url: "https://www.pendle.finance/",
    announcement: "https://x.com/redstone_defi/status/1760260799833182642",
    tvlUrl: "https://api.llama.fi/tvl/pendle",
  },
];

const otherClients = [
  {
    name: "Mento",
    logo: "/assets/img/clients/mento.png",
    url: "https://www.silo.finance/",
    announcement:
      "https://blog.redstone.finance/2023/05/18/mento-labs-chooses-redstone-from-multiple-oracle-providers",
    tvlUrl: "https://www.mento.org/",
  },
  {
    name: "CIAN",
    logo: "/assets/img/clients/cian.png",
    url: "https://cian.app/",
    announcement:
      "https://blog.redstone.finance/2023/07/12/case-study-cian-integrates-redstone-oracles-to-revolutionize-algorithmic-strategic-vaults-and-decentralized-automation-tools",
    tvlUrl: "https://api.llama.fi/tvl/cian",
  },
  {
    name: "Gravita",
    logo: "/assets/img/clients/gravita.png",
    url: "https://www.gravitaprotocol.com/",
    announcement:
      "https://twitter.com/redstone_defi/status/1701913686921941128",
    tvlUrl: "https://api.llama.fi/tvl/gravita-protocol",
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
    name: "Stader",
    logo: "/assets/img/clients/stader.png",
    url: "https://www.staderlabs.com/",
    announcement: "https://x.com/redstone_defi/status/1702698921984962623",
    tvlUrl: "https://api.llama.fi/tvl/stader",
  },
  {
    name: "Lido",
    logo: "/assets/img/clients/lido.png",
    url: "https://lido.fi/",
    announcement:
      "https://blog.redstone.finance/2023/07/06/case-study-redstone-oracles-propelling-defi-with-lidos-steth-price-feed",
    tvlUrl: "https://api.llama.fi/tvl/lido",
  },
  {
    name: "Angle",
    logo: "/assets/img/clients/angle.png",
    url: "https://www.angle.money/",
    announcement:
      "https://blog.redstone.finance/2023/08/10/redstones-seamless-integration-with-angle-the-rise-of-real-world-assets-rwas-in-defi",
    tvlUrl: "https://api.llama.fi/tvl/angle",
  },
  {
    name: "Abracadabra",
    logo: "/assets/img/clients/abracadabra.png",
    url: "https://abracadabra.money/",
    announcement:
      "https://twitter.com/redstone_defi/status/1722277568769134705",
    tvlUrl: "https://api.llama.fi/tvl/abracadabra",
  },
  {
    name: "Premia",
    logo: "/assets/img/clients/premia.png",
    url: "https://premia.blue/",
    announcement:
      "https://blog.redstone.finance/2023/09/18/addressing-options-protocols-needs-premia-blue-integrates-redstone-oracles",
    tvlUrl: "https://api.llama.fi/tvl/premia",
  },
  {
    name: "Gearbox",
    logo: "/assets/img/clients/gearbox.png",
    url: "https://gearbox.fi/",
    announcement:
      "https://twitter.com/redstone_defi/status/1755626055640211900",
    tvlUrl: "https://api.llama.fi/tvl/gearbox",
  },
  {
    name: "Sturdy V2",
    logo: "/assets/img/clients/sturdy.png",
    url: "https://v2.sturdy.finance/overview/ethereum",
    announcement:
      "https://twitter.com/redstone_defi/status/1754893704480137270",
    tvlUrl: "https://api.llama.fi/tvl/sturdy",
  },
  {
    name: "Term Finance",
    logo: "/assets/img/clients/term.png",
    url: "https://www.term.finance/",
    announcement:
      "https://twitter.com/redstone_defi/status/1748012557095620702",
    tvlUrl: "https://api.llama.fi/tvl/termfinance",
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
    name: "Curvance",
    logo: "/assets/img/clients/curvance.png",
    url: "https://www.curvance.com/",
    announcement:
      "https://twitter.com/redstone_defi/status/1752735923060801699",
    tvlUrl: "",
  },
  {
    name: "ZKX",
    logo: "/assets/img/clients/zkx.png",
    url: "https://zkx.fi/",
    announcement:
      "https://blog.redstone.finance/2022/11/18/redstonepowered-ep-4-zkx",
    tvlUrl: "",
  },
  {
    name: "Moola Market",
    logo: "/assets/img/clients/moola.png",
    url: "https://moola.market/",
    announcement:
      "https://blog.redstone.finance/2022/01/21/redstone-in-2021-creating-oracles-architecture-and-contracts-sdk-out-of-the-real-need",
    tvlUrl: "https://api.llama.fi/tvl/moola-market",
  },
  {
    name: "Y2K",
    logo: "/assets/img/clients/y2k.png",
    url: "https://www.y2k.finance/",
    announcement:
      "https://twitter.com/redstone_defi/status/1679551315582803968",
    tvlUrl: "https://api.llama.fi/tvl/y2k-finance",
  },
  {
    name: "Float",
    logo: "/assets/img/clients/float.png",
    url: "https://float.capital/",
    announcement:
      "https://blog.redstone.finance/2023/03/15/float-x-gelato-x-redstone-the-fastest-price-data-for-the-best-user-experience",
    tvlUrl: "https://api.llama.fi/tvl/float",
  },
  {
    name: "Yield Yak",
    logo: "/assets/img/clients/yield-yak.png",
    url: "https://yieldyak.com/",
    announcement:
      "https://blog.redstone.finance/2023/05/12/redstone-x-yield-yak-a-new-era-of-defi-with-real-time-token-valuations",
    tvlUrl: "https://api.llama.fi/tvl/yield-yak",
  },
  {
    name: "Cadence",
    logo: "/assets/img/clients/cadence.png",
    url: "https://www.cadenceprotocol.io/",
    announcement: "https://x.com/redstone_defi/status/1645872955388497923",
    tvlUrl: "",
  },
  {
    name: "LoanShark",
    logo: "/assets/img/clients/loanshark.png",
    url: "https://loanshark.tech/",
    announcement:
      "https://twitter.com/redstone_defi/status/1714660648314089788",
    tvlUrl: "https://api.llama.fi/tvl/loanshark-core",
  },
  {
    name: "Vesta Finance",
    logo: "/assets/img/clients/vesta.png",
    url: "https://vestafinance.xyz/",
    announcement:
      "https://blog.redstone.finance/2023/06/09/case-study-redstone-oracles-x-vesta-finance-integration",
    tvlUrl: "https://api.llama.fi/tvl/vesta-finance",
  },
  {
    name: "Voltz",
    logo: "/assets/img/clients/voltz.png",
    url: "https://www.voltz.xyz/",
    announcement:
      "https://twitter.com/redstone_defi/status/1678811445457461248",
    tvlUrl: "https://api.llama.fi/tvl/voltz",
  },
  {
    name: "Raft",
    logo: "/assets/img/clients/raft.png",
    url: "https://raft.fi/",
    announcement:
      "https://twitter.com/redstone_defi/status/1702245848841965989",
    tvlUrl: "https://api.llama.fi/tvl/raft",
  },
  {
    name: "Interest protocol",
    logo: "/assets/img/clients/interest-protocol.png",
    url: "https://interestprotocol.io/",
    announcement:
      "https://twitter.com/interest_dinero/status/1621516358927130624",
    tvlUrl: "https://api.llama.fi/tvl/interest-protocol",
  },
];

function getClientsCount() {
  return featuredClients.length + otherClients.length;
}

// eslint-disable-next-line no-unused-vars
function generateClientCard(name, logo, url, announcement, tvl) {
  const formattedTvl = tvl
    ? new Intl.NumberFormat().format(tvl.toFixed(0))
    : "";

  return `
    <img class="client-picture" src="${logo}"/>
    <div class="client-info fw-medium">
      <p class="mb-0 fs-0">${name}</p>
      ${tvl ? `<p class="mb-0 fs-0">TVL: $${formattedTvl}</p>` : ""}
      ${
        announcement
          ? `<a
        href="${announcement}"
        target="_blank"
        referrerpolicy="no-referrer"
      >
        <p>Announcement</p>
      </a>`
          : ""
      }
    </div>`;
}

if (
  document.getElementById("featured-clients") &&
  document.getElementById("all-clients")
) {
  const featuredClientsElement = document.getElementById("featured-clients");

  featuredClients.forEach((client, index) => {
    const card = document.createElement("div");
    card.classList.add("col-5", "col-md-4", "col-lg-3", "text-center");
    card.innerHTML = generateClientCard(
      client.name,
      client.logo,
      client.url,
      client.announcement
    );
    card.id = client.name;

    if (featuredClientsElement.childNodes.length !== featuredClients.length) {
      featuredClientsElement.appendChild(card);
    }

    if (client.tvlUrl) {
      fetch(client.tvlUrl).then((response) => {
        response.json().then((tvl) => {
          const clientCard = document.getElementById(
            featuredClients[index].name
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
    }
  });

  const allClientsElement = document.getElementById("all-clients");
  const allClients = [...featuredClients, ...otherClients];
  allClients.forEach((client, index) => {
    const card = document.createElement("div");
    card.classList.add("col-5", "col-md-4", "col-lg-3", "text-center");
    card.innerHTML = generateClientCard(
      client.name,
      client.logo,
      client.url,
      client.announcement
    );
    card.id = client.name;

    if (allClientsElement.childNodes.length !== allClients.length) {
      allClientsElement.appendChild(card);
    }

    if (client.tvlUrl) {
      fetch(client.tvlUrl).then((response) => {
        response.json().then((tvl) => {
          const clientCard = document.getElementById(allClients[index].name);
          clientCard.innerHTML = generateClientCard(
            client.name,
            client.logo,
            client.url,
            client.announcement,
            tvl
          );
        });
      });
    }
  });
}

export default { getClientsCount, generateClientCard };
