const dataSources = [
  {
    name: "Uniswap",
    image: "/assets/img/data-sources/uniswap.png",
  },
  {
    name: "Sushiswap",
    image: "/assets/img/data-sources/sushiswap.png",
  },
  {
    name: "Coingecko",
    image: "/assets/img/data-sources/coingecko.png",
  },
  {
    name: "Binance",
    image: "/assets/img/data-sources/binance.png",
  },
  {
    name: "Coinbase",
    image: "/assets/img/data-sources/coinbase.svg",
  },
  {
    name: "Kraken",
    image: "/assets/img/data-sources/kraken.png",
  },
  {
    name: "Houbi",
    image: "/assets/img/data-sources/houbi.png",
  },
  {
    name: "Kucoin",
    image: "/assets/img/data-sources/kucoin.png",
  },
  {
    name: "Bitfinex",
    image: "/assets/img/data-sources/bitfinex.png",
  },
  {
    name: "Bittrex",
    image: "/assets/img/data-sources/bittrex.png",
  },
  {
    name: "Trader Joe",
    image: "/assets/img/data-sources/traderjoe.png",
  },
  {
    name: "Pangolin",
    image: "/assets/img/data-sources/pangolin.png",
  },
  {
    name: "Yahoo finance",
    image: "/assets/img/data-sources/yahoo-finance.png",
  },
  {
    name: "ECB",
    image: "/assets/img/data-sources/ecb.png",
  },
  {
    name: "Okcoin",
    image: "/assets/img/data-sources/okcoin.png",
  },
  {
    name: "Curve",
    image: "/assets/img/data-sources/curve.png",
  },
  {
    name: "Balancer",
    image: "/assets/img/data-sources/balancer.png",
  },
  {
    name: "Camelot",
    image: "/assets/img/data-sources/camelot.png",
  },
  {
    name: "Frax",
    image: "/assets/img/data-sources/frax.svg",
  },
  {
    name: "Coinmarketcap",
    image: "/assets/img/data-sources/coinmarketcap.png",
  },
  {
    name: "Lens",
    image: "/assets/img/data-sources/lens.png",
  },
  {
    name: "Twelve Data",
    image: "/assets/img/data-sources/twelve-data.png",
  },
  {
    name: "KAIKO",
    image: "/assets/img/data-sources/kaiko.png",
  },
  {
    name: "4SV",
    image: "/assets/img/data-sources/4sv.png",
  },
];

const dataSourcesCrossChainSection = document.getElementById("cross-chain");
if (dataSourcesCrossChainSection) {
  const element = document.getElementById("data-sources");
  if (element.childNodes.length === 0) {
    dataSources.forEach((dataSource) => {
      const dataSourceItem = document.createElement("div");
      dataSourceItem.classList.add("tab-item");

      const isNonSquare = ["Coinbase"].includes(dataSource.name);

      dataSourceItem.innerHTML += `
        <img
          loading="lazy"
          src="${dataSource.image}"
          alt="${dataSource.name} Logo"
          height="60"
          width="${isNonSquare ? 80 : 60}"
        />
        <p class="mb-0 mt-2">${dataSource.name}</p>
    `;
      element.appendChild(dataSourceItem);
    });
    const manyMoreItem = document.createElement("div");
    manyMoreItem.classList.add(
      "d-flex",
      "col-lg-12",
      "justify-content-center",
      "mt-lg-0",
      "mt-n5"
    );
    manyMoreItem.innerHTML += `
      <p class="mb-0 mt-2 fw-bold">And many more!</p>
    `;
    element.appendChild(manyMoreItem);
  }
}
