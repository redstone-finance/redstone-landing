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
    announcement:
      "https://twitter.com/redstone_defi/status/1762492831288246514",
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
      "https://twitter.com/redstone_defi/status/1758884066949214689",
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
  {
    name: "Ethena",
    logo: "/assets/img/clients/ethena.png",
    url: "https://www.ethena.fi/",
    announcement:
      "https://twitter.com/redstone_defi/status/1764682387127226633",
    tvlUrl: "https://stablecoins.llama.fi/stablecoin/146",
  },
  {
    name: "ZeroLend",
    logo: "/assets/img/clients/zerolend.png",
    url: "https://zerolend.xyz/",
    announcement:
      "https://twitter.com/redstone_defi/status/1762855479670407290",
    tvlUrl: "https://api.llama.fi/tvl/zerolend",
  },
  {
    name: "Shoebill",
    logo: "/assets/img/clients/shoebill.png",
    url: "https://shoebill.finance/",
    announcement:
      "https://twitter.com/redstone_defi/status/1763580020751245496",
    tvlUrl: "https://api.llama.fi/tvl/shoebill-finance",
  },
  {
    name: "Redacted Cartel",
    logo: "/assets/img/clients/redacted.png",
    url: "https://redacted.finance/",
    announcement:
      "https://twitter.com/redstone_defi/status/1759608928189727042",
    tvlUrl: "https://api.llama.fi/tvl/redacted",
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

const otherClients = [
  {
    name: "Mento",
    logo: "/assets/img/clients/mento.png",
    url: "https://www.silo.finance/",
    announcement:
      "https://blog.redstone.finance/2023/05/18/mento-labs-chooses-redstone-from-multiple-oracle-providers",
    tvlUrl: "https://api.llama.fi/tvl/mento",
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
    tvlUrl: "https://api.llama.fi/tvl/cadence-protocol",
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
  {
    name: "Reserve",
    logo: "/assets/img/clients/reserve.png",
    url: "https://reserve.org/",
    announcement:
      "https://twitter.com/redstone_defi/status/1758159389297688589",
    tvlUrl: "https://api.llama.fi/tvl/reserve",
  },
  {
    name: "Juice",
    logo: "/assets/img/clients/juice.png",
    url: "https://twitter.com/Juice_Finance",
    announcement:
      "https://twitter.com/redstone_defi/status/1767219012147311017",
    tvlUrl: "https://api.llama.fi/tvl/juice-finance",
  },
  {
    name: "Dolomite",
    logo: "/assets/img/clients/dolomite.png",
    url: "https://dolomite.io/",
    announcement:
      "https://twitter.com/redstone_defi/status/1770843033900102015",
    tvlUrl: "https://api.llama.fi/tvl/dolomite",
  },
  {
    name: "StakeStone",
    logo: "/assets/img/clients/stake-stone.png",
    url: "https://stakestone.io/",
    announcement:
      "https://twitter.com/redstone_defi/status/1750184210432930055",
    tvlUrl: "https://api.llama.fi/tvl/stakestone",
  },
  {
    name: "Arrakis",
    logo: "/assets/img/clients/arrakis.png",
    url: "https://www.arrakis.finance/",
    announcement:
      "https://twitter.com/redstone_defi/status/1768295475260821525",
    tvlUrl: "https://api.llama.fi/tvl/arrakis-finance",
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
    name: "Ionic",
    logo: "/assets/img/clients/ionic.png",
    url: "https://app.ionic.money/",
    announcement:
      "https://twitter.com/redstone_defi/status/1771190205728641304",
    tvlUrl: "https://api.llama.fi/tvl/ionic-protocol",
  },
  {
    name: "Orbit",
    logo: "/assets/img/clients/orbit.png",
    url: "https://orbitlending.io/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/orbit-protocol",
  },
  {
    name: "Kinza",
    logo: "/assets/img/clients/kinza.png",
    url: "https://kinza.finance/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/kinza-finance",
  },
  {
    name: "Puffer",
    logo: "/assets/img/clients/puffer.png",
    url: "https://www.puffer.fi/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/puffer-finance",
  },
  {
    name: "IronClad",
    logo: "/assets/img/clients/ironclad.png",
    url: "https://www.ironclad.finance/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/ironclad-finance",
  },
  {
    name: "Ion Protocol",
    logo: "/assets/img/clients/ion-protocol.png",
    url: "https://ionprotocol.io/",
    announcement: "",
    tvlUrl: "",
  },
  {
    name: "Synonym",
    logo: "/assets/img/clients/synonym.png",
    url: "https://www.synonym.finance/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/synonym-finance",
  },
  {
    name: "LogX",
    logo: "/assets/img/clients/logx.png",
    url: "https://app.logx.trade/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/logx",
  },
  {
    name: "Wand",
    logo: "/assets/img/clients/wand.png",
    url: "https://wand.fi/",
    announcement:
      "https://twitter.com/redstone_defi/status/1763317814088339716",
    tvlUrl: "https://api.llama.fi/tvl/wand-protocol",
  },
  {
    name: "BlastOff",
    logo: "/assets/img/clients/blastoff.png",
    url: "https://blastoff.zone/",
    announcement:
      "https://twitter.com/redstone_defi/status/1763317803422273638",
    tvlUrl: "https://api.llama.fi/tvl/blastoff",
  },
  {
    name: "Phuture",
    logo: "/assets/img/clients/phuture.png",
    url: "https://www.phuture.finance/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/phuture",
  },
  {
    name: "BitPerp",
    logo: "/assets/img/clients/bitperp.png",
    url: "https://twitter.com/bitperp",
    announcement: "",
    tvlUrl: "",
  },
  {
    name: "Lyve Finance",
    logo: "/assets/img/clients/lyve.png",
    url: "https://www.lyvefi.xyz/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/lyvefinance",
  },
  {
    name: "Fraxlend",
    logo: "/assets/img/clients/frax.png",
    url: "https://app.frax.finance/fraxlend/available-pairs",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/fraxlend",
  },
];

function getClientsCount() {
  return featuredClients.length + otherClients.length;
}

// eslint-disable-next-line no-unused-vars
function generateClientCard(name, logo, url, announcement, tvl) {
  let tvlBeforeParsing = tvl;

  if (name === "Ethena") {
    const historicalData = tvlBeforeParsing?.tokens;
    tvlBeforeParsing =
      historicalData?.[historicalData.length - 1]?.circulating?.peggedUSD;
  }

  const formattedTvl = tvlBeforeParsing
    ? new Intl.NumberFormat().format(tvlBeforeParsing.toFixed(0))
    : "";

  return `
    <a
      href="${url}"
      target="_blank"
      referrerpolicy="no-referrer"
      class="link-like-text-button"
    >
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
      </div>
    </a>`;
}

if (document.getElementById("featured-clients")) {
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
}

if (document.getElementById("all-clients")) {
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
    card.id = `${client.name}_all_clients`;

    if (allClientsElement.childNodes.length !== allClients.length) {
      allClientsElement.appendChild(card);
    }

    if (client.tvlUrl) {
      fetch(client.tvlUrl).then((response) => {
        response.json().then((tvl) => {
          const clientCard = document.getElementById(
            `${allClients[index].name}_all_clients`
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
}

export default { getClientsCount, generateClientCard };
