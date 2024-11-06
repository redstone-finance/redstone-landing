const featuredClients = [
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

  {
    name: "ZeroLend",
    logo: "/assets/img/clients/zerolend.png",
    url: "https://zerolend.xyz/",
    announcement:
      "https://twitter.com/redstone_defi/status/1762855479670407290",
    tvlUrl: "https://api.llama.fi/tvl/zerolend",
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
    name: "Lombard",
    logo: "/assets/img/clients/lombard.png",
    url: "https://lombard.finance/",
    announcement: "https://x.com/redstone_defi/status/1843639665808802127",
    tvlUrl: "https://api.llama.fi/tvl/lombard",
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
    name: "Gearbox",
    logo: "/assets/img/clients/gearbox.png",
    url: "https://gearbox.fi/",
    announcement:
      "https://twitter.com/redstone_defi/status/1755626055640211900",
    tvlUrl: "https://api.llama.fi/tvl/gearbox",
  },

  {
    name: "Balancer",
    logo: "/assets/img/clients/balancer.png",
    url: "https://balancer.fi/",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/balancer",
  },
  {
    name: "Solv",
    logo: "/assets/img/clients/solv.jpg",
    url: "https://solv.finance/",
    announcement: "https://x.com/redstone_defi/status/1841840786109038861",
    tvlUrl: "https://api.llama.fi/tvl/solv-protocol",
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
    name: "Kraken (kBTC)",
    logo: "/assets/img/clients/kraken.jpg",
    url: "https://www.kraken.com/",
  },
  {
    name: "KelpDAO",
    logo: "/assets/img/clients/kelp-dao.png",
    url: "https://www.kelpdao.xyz/",
    announcement: "https://x.com/redstone_defi/status/1760998051194573109",
    tvlUrl: "https://api.llama.fi/tvl/kelp-dao",
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
    name: "Veda",
    logo: "/assets/img/clients/veda.png",
    url: "https://veda.tech/",
    tvlUrl: [
      "https://api.llama.fi/tvl/ether.fi-liquid",
      "https://api.llama.fi/tvl/ether.fi-vaults",
    ],
  },
  {
    name: "Dinero",
    logo: "/assets/img/clients/redacted.png",
    url: "https://dinero.xyz/",
    announcement:
      "https://twitter.com/redstone_defi/status/1759608928189727042",
    tvlUrl: "https://api.llama.fi/tvl/dinero",
  },
  {
    name: "Euler V2",
    logo: "/assets/img/clients/euler.png",
    url: "https://www.euler.finance/#/",
    announcement:
      "https://twitter.com/redstone_defi/status/1786425647528874308",
    tvlUrl: "https://api.llama.fi/tvl/euler",
  },
];

const otherClients = [
  {
    name: "Agora",
    logo: "/assets/img/clients/agora.svg",
    url: "https://www.agora.finance/",
    tvlUrl: "https://api.llama.fi/tvl/agora",
  },
  {
    name: "Shoebill",
    logo: "/assets/img/clients/shoebill.png",
    url: "https://shoebill.finance/",
    tvlUrl: "https://api.llama.fi/tvl/shoebill-finance",
  },
  {
    name: "Ebisu",
    logo: "/assets/img/clients/ebisu.png",
    url: "https://ebisu.finance/",
    tvlUrl: "https://api.llama.fi/tvl/ebisu",
  },
  {
    name: "Satoshi Protocol",
    logo: "/assets/img/clients/satoshi.png",
    announcement: "https://x.com/Satoshi_BTCFi/status/1842211984567324997",
    url: "https://www.satoshiprotocol.org/",
    tvlUrl: "https://api.llama.fi/tvl/satoshi-protocol",
  },
  {
    name: "Mountain Protocol",
    logo: "/assets/img/clients/mountain.png",
    announcement: "https://x.com/redstone_defi/status/1749431872206348754",
    url: "https://mountainprotocol.com/",
    tvlUrl: "https://api.llama.fi/tvl/mountain-protocol",
  },
  {
    name: "Overnight",
    logo: "/assets/img/clients/overnight.webp",
    url: "https://overnight.fi/",
    tvlUrl: "https://api.llama.fi/tvl/overnight-finance",
  },
  {
    name: "Anzen",
    logo: "/assets/img/clients/anzen.jpg",
    url: "https://x.com/AnzenFinance",
    tvlUrl: "https://api.llama.fi/tvl/anzen-finance",
  },
  {
    name: "Cygnus",
    logo: "/assets/img/clients/cygnus.jpg",
    url: "https://cygnus.finance/",
    tvlUrl: "https://api.llama.fi/tvl/cygnus",
  },
  {
    name: "SkateFi",
    logo: "/assets/img/clients/skate_fi.jpg",
    url: "https://x.com/skate_fi",
    announcement: "https://x.com/redstone_defi/status/1826590572741808172",
    tvlUrl: "https://api.llama.fi/tvl/skate-fi",
  },
  {
    name: "Symbiotic",
    logo: "/assets/img/clients/symbiotic.webp",
    url: "https://symbiotic.fi/",
    announcement: "https://x.com/redstone_defi/status/1824456969962525145",
    tvlUrl: "https://api.llama.fi/tvl/symbiotic",
  },
  {
    name: "AO",
    logo: "/assets/img/clients/ao.png",
    url: "https://ao.arweave.dev/",
    announcement: "https://x.com/redstone_defi/status/1832086628686574030",
    tvlUrl: "",
  },
  {
    name: "EVAA",
    logo: "/assets/img/clients/evaa.jpeg",
    url: "https://evaa.finance/",
    tvlUrl: "https://api.llama.fi/tvl/evaa-protocol",
  },
  {
    name: "Mento",
    logo: "/assets/img/clients/mento.png",
    url: "https://www.mento.org/",
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
    tvlUrl: "https://api.llama.fi/tvl/cian-protocol",
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
    name: "PumpBTC",
    logo: "/assets/img/clients/pump-btc.jpg",
    url: "https://mainnet.pumpbtc.xyz/",
    announcement: "https://x.com/redstone_defi/status/1840752927872577956",
    tvlUrl: "https://api.llama.fi/tvl/pumpBTC",
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
    announcement: "https://x.com/redstone_defi/status/1679551310990024704",
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
    announcement: "https://x.com/redstone_defi/status/1714660633898336668",
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
    tvlUrl: "https://api.llama.fi/tvl/reserve-protocol",
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
    name: "Arrakis",
    logo: "/assets/img/clients/arrakis.png",
    url: "https://www.arrakis.finance/",
    announcement:
      "https://twitter.com/redstone_defi/status/1768295475260821525",
    tvlUrl: "https://api.llama.fi/tvl/arrakis-finance",
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
    announcement: "https://x.com/redstone_defi/status/1791136552430833742",
    tvlUrl: "https://api.llama.fi/tvl/orbit-protocol",
  },
  {
    name: "Kinza",
    logo: "/assets/img/clients/kinza.png",
    url: "https://kinza.finance/",
    announcement:
      "https://twitter.com/redstone_defi/status/1774089203451887997",
    tvlUrl: "https://api.llama.fi/tvl/kinza-finance",
  },
  {
    name: "IronClad",
    logo: "/assets/img/clients/ironclad.png",
    url: "https://www.ironclad.finance/",
    announcement:
      "https://twitter.com/redstone_defi/status/1772700106867061009",
    tvlUrl: "https://api.llama.fi/tvl/ironclad-finance",
  },
  {
    name: "Ion Protocol",
    logo: "/assets/img/clients/ion-protocol.png",
    url: "https://ionprotocol.io/",
    announcement:
      "https://twitter.com/redstone_defi/status/1772641449244594405",
    tvlUrl: "https://api.llama.fi/tvl/ion-protocol",
  },
  {
    name: "Sumer.money",
    logo: "/assets/img/clients/sumer-money.webp",
    url: "https://sumer.money/",
    tvlUrl: "https://api.llama.fi/tvl/sumer.money",
  },
  {
    name: "Alien Finance",
    logo: "/assets/img/clients/alien.jpg",
    url: "https://alien.finance/",
    tvlUrl: "https://api.llama.fi/tvl/alien-finance",
  },
  {
    name: "Lore Finance",
    logo: "/assets/img/clients/lore.jpg",
    url: "https://lore.finance/",
    tvlUrl: "https://api.llama.fi/tvl/lore-finance",
  },
  {
    name: "Gauntlet",
    logo: "/assets/img/clients/gauntlet.jpeg",
    url: "https://www.gauntlet.xyz/",
  },
  {
    name: "fBomb",
    logo: "/assets/img/clients/fbomb.jpg",
    url: "https://x.com/fbombopera",
  },
  {
    name: "Re7",
    logo: "/assets/img/clients/re7.jpeg",
    url: "https://re7.capital/",
  },
  {
    name: "CoinDesk Indices CESR",
    logo: "/assets/img/clients/coindesk.jpg",
    announcement: "https://x.com/perkinscr97/status/1833522573885215038",
    url: "https://www.coindesk.com/",
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
    announcement: "https://x.com/redstone_defi/status/1777698036099297736",
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
    announcement: "https://x.com/redstone_defi/status/1778075562046816467",
    tvlUrl: "https://api.llama.fi/tvl/lyvefinance",
  },
  {
    name: "Opal",
    logo: "/assets/img/clients/opal.png",
    url: "https://opaldefi.xyz/",
    announcement:
      "https://twitter.com/redstone_defi/status/1775946468458918299",
    tvlUrl: "",
  },
  {
    name: "Merchant Moe",
    logo: "/assets/img/clients/merchant-moe.png",
    url: "https://merchantmoe.com/",
    announcement:
      "https://twitter.com/redstone_defi/status/1778471787640336442",
    tvlUrl: "https://api.llama.fi/tvl/merchant-moe",
  },
  {
    name: "GHO",
    logo: "/assets/img/clients/gho.png",
    url: "https://gho.xyz/",
    announcement:
      "https://twitter.com/redstone_defi/status/1773726966040129938",
    tvlUrl: "",
  },
  {
    name: "Native",
    logo: "/assets/img/clients/native.png",
    url: "https://aqua.native.org/",
    announcement:
      "https://twitter.com/redstone_defi/status/1781030443963552168",
    tvlUrl: "https://api.llama.fi/tvl/native",
  },
  {
    name: "Goku Money",
    logo: "/assets/img/clients/goku-money.png",
    url: "https://twitter.com/goku_stable",
    announcement:
      "https://twitter.com/redstone_defi/status/1780959653456904464",
    tvlUrl: "https://api.llama.fi/tvl/goku-money",
  },
  {
    name: "Tokemak",
    logo: "/assets/img/clients/tokemak.png",
    url: "https://www.tokemak.xyz/",
    announcement:
      "https://twitter.com/redstone_defi/status/1780933859179450536",
    tvlUrl: "https://api.llama.fi/tvl/tokemak",
  },
  {
    name: "Hubble Exchange",
    logo: "/assets/img/clients/hubble.png",
    url: "https://app.hubble.exchange/",
    announcement:
      "https://twitter.com/redstone_defi/status/1780597130517942531",
    tvlUrl: "https://api.llama.fi/tvl/hubble-exchange",
  },
  {
    name: "Synfutures",
    logo: "/assets/img/clients/synfutures.png",
    url: "https://oyster.synfutures.com/#/odyssey",
    announcement: "",
    tvlUrl: "https://api.llama.fi/tvl/synfutures",
  },
  {
    name: "Clave",
    logo: "/assets/img/clients/clave.png",
    url: "https://getclave.io/",
    announcement:
      "https://twitter.com/redstone_defi/status/1784945784460591379",
    tvlUrl: "",
  },
  {
    name: "SphereX",
    logo: "/assets/img/clients/spherex.png",
    url: "https://www.sx.xyz/",
    announcement:
      "https://twitter.com/redstone_defi/status/1788569792741605533",
    tvlUrl: "",
  },
  {
    name: "Seismic Finance",
    logo: "/assets/img/clients/seismic-finance.png",
    url: "https://app.seismic.finance/",
    announcement:
      "https://twitter.com/redstone_defi/status/1788599830161551470",
    tvlUrl: "https://api.llama.fi/tvl/seismic",
  },
  {
    name: "Glyph",
    logo: "/assets/img/clients/glyph.png",
    url: "https://www.glyph.fi/",
    announcement: "https://x.com/redstone_defi/status/1789324604231840046",
    tvlUrl: "https://api.llama.fi/tvl/glyph",
  },
  {
    name: "f(x) Protocol",
    logo: "/assets/img/clients/fx-protocol.png",
    url: "https://fx.aladdin.club/assets/",
    announcement: "https://x.com/redstone_defi/status/1793671435254366568",
    tvlUrl: "https://api.llama.fi/tvl/fx-protocol",
  },
  {
    name: "Swaap",
    logo: "/assets/img/clients/swaap.png",
    url: "https://www.swaap.finance/",
    announcement: "https://x.com/redstone_defi/status/1793341079103983654",
    tvlUrl: "https://api.llama.fi/tvl/swaap",
  },
  {
    name: "Lista DAO",
    logo: "/assets/img/clients/lista-dao.png",
    url: "https://linktr.ee/lista_dao",
    announcement: "https://x.com/redstone_defi/status/1791507378338242852",
    tvlUrl: "https://api.llama.fi/tvl/lista-dao",
  },
  {
    name: "Segment",
    logo: "/assets/img/clients/segment.png",
    url: "https://app.segment.finance/",
    announcement: "https://x.com/redstone_defi/status/1803075558814961731 ",
    tvlUrl: "https://api.llama.fi/tvl/segment-finance",
  },
  {
    name: "Yei",
    logo: "/assets/img/clients/yei.png",
    url: "https://www.yei.finance/",
    announcement: "https://x.com/redstone_defi/status/1803805083152638089",
    tvlUrl: "https://api.llama.fi/tvl/yei-finance",
  },
  {
    name: "BitLen",
    logo: "/assets/img/clients/bitlen.png",
    url: "https://www.bitlen.io/",
    announcement: "https://x.com/redstone_defi/status/1814314379778941211",
    tvlUrl: "https://api.llama.fi/tvl/bitlen-finance",
  },
  {
    name: "Elixir",
    logo: "/assets/img/clients/elixir.jpg",
    url: "https://www.elixir.xyz/",
    announcement: "https://x.com/redstone_defi/status/1848741129745023135",
    tvlUrl: "https://api.llama.fi/tvl/elixir",
  },
  {
    name: "Silo Finance",
    logo: "/assets/img/clients/silo.png",
    url: "https://www.silo.finance/",
    announcement: "https://x.com/redstone_defi/status/1755305505814384880",
    tvlUrl: "https://api.llama.fi/tvl/silo-finance",
  },
  {
    name: "Silo Stake",
    logo: "/assets/img/clients/silo-stake.jpg",
    url: "https://www.silostaking.io/",
    announcement: "https://x.com/redstone_defi/status/1803805083152638089",
    tvlUrl: "https://api.llama.fi/tvl/silostake",
  },
  {
    name: "HAI",
    logo: "/assets/img/clients/hai.webp",
    url: "https://www.letsgethai.com/",
    announcement:
      "https://x.com/redstone_defi/status/1851308060050161775/photo/1",
    tvlUrl: "",
  },
];

function getClientsCount() {
  return featuredClients.length + otherClients.length;
}

function emptyAnnouncementLink(name) {
  return name === "Balancer"
    ? `<a class="inactive-link">
    <p>Announcement</p>
  </a>`
    : "";
}

function generateClientCard(name, logo, url, announcement, tvl) {
  const formattedTvl = tvl
    ? new Intl.NumberFormat().format(tvl.toFixed(0))
    : "";

  return `
    <a
      href="${url}"
      target="_blank"
      referrerpolicy="no-referrer"
      class="link-like-text-button-flex"
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
            : `${emptyAnnouncementLink(name)}`
        }
      </div>
    </a>`;
}

function sortFn(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
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
      if (Array.isArray(client.tvlUrl)) {
        console.log("tvl is array", client.name);
        const promises = client.tvlUrl.map((url) =>
          fetch(url).then((response) => response.json())
        );

        Promise.all(promises)
          .then((tvlValues) => {
            const totalTvl = tvlValues.reduce((sum, tvl) => sum + tvl, 0);
            const clientCard = document.getElementById(
              featuredClients[index].name
            );
            clientCard.innerHTML = generateClientCard(
              client.name,
              client.logo,
              client.url,
              client.announcement,
              totalTvl
            );
          })
          .catch((error) => {
            console.error("Error fetching TVL values:", error);
          });
      } else {
        // Handle single URL case
        fetch(client.tvlUrl)
          .then((response) => response.json())
          .then((tvl) => {
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
          })
          .catch((error) => {
            console.error("Error fetching TVL value:", error);
          });
      }
    }
  });
}

if (document.getElementById("all-clients")) {
  const allClientsElement = document.getElementById("all-clients");
  const allClients = [...featuredClients, ...otherClients];
  allClients.sort(sortFn).forEach((client, index) => {
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
