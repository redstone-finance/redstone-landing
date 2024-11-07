const getTotalTvlValue = (protocols) => {
  const promises = protocols.map((protocol) =>
    fetch(`https://api.llama.fi/tvl/${protocol}`)
      .then((response) => response.text())
      .then((data) => parseFloat(data) || 0)
  );

  return Promise.all(promises)
    .then((values) => {
      const sum = values.reduce((acc, curr) => acc + curr, 0);
      // Format to billions with 1 decimal place
      return (sum / 1e9).toFixed(1);
    })
    .catch((error) => {
      console.error("Error fetching TVL values:", error);
      throw error;
    });
};

function generateTvsElement(tvs) {
  // const defillamaUrl =
  //   "https://defillama.com/oracles/RedStone?staking=false&pool2=false&govtokens=false&doublecounted=true&borrowed=true&liquidstaking=false&vesting=false";
  return `
    <div class="tvs-link mt-3 mt-md-5">
        <div class="py-2 px-4">
          <div class="flex gap-2 align-items-center justify-content-center mb-2">
            <h3 class="mb-0">Protecting</h3>
            ${
              tvs
                ? `<h3 class="mb-0"><b>${tvs} billion</b></h3>`
                : `<div class="flex align-items-center justify-content-center loader-container-tvs">
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                  </div>`
            }
            <div class="simple-tooltip">
              <img src="/assets/img/icons/info.svg" />
              <span class="tooltiptext">
                TVS (Total Value Secured) is a metric similar to TVL (Total Value Locked) that also counts assets that are temporarily outside of the protocol (Borrows & Double Count) but could be lost if an oracle misprices delivered feeds.
              </span>
            </div>
          </div>
          <div class="flex gap-2 align-items-center justify-md-content-left justify-content-center">
            <h6 class="m-0">RedStone Total Value Secured, based on TVL from</h6>
            <img src="/assets/img/logos/defillama.svg" />
          </div>
        </div>
    </div>`;
}

if (document.getElementById("tvs")) {
  // const tvsUrl =
  //   "https://d12s4zpdqk5syt.cloudfront.net/v1/recipes/PHnrSeRI0Uf6O6vtFBE2/results-latest";
  const tvsElement = document.getElementById("tvs");
  const protocolIds = [
    "evaa-protocol",
    "yield-yak",
    "venus",
    "fraxlend",
    "puffer-finance",
    "lombard",
    "zerolend",
    "deltaprime",
    "layerbank",
    "gearbox",
    "sommelier",
    "enzyme-finance",
    "euler",
    "angle",
    "gravita-protocol",
    "bitlen-finance",
    "cian-protocol",
    "dolomite",
    "cygnus",
    "ionic-protocol",
    "juice-finance",
    "ironclad-finance",
    "kinza-finance",
    "lista-dao",
    "merchant-moe",
    "mento",
    "native",
    "orbit",
    "premia",
    "segment-finance",
    "satoshi-protocol",
    "sturdy",
    "sumer.money",
    "synonym-finance",
    "skate-fi",
    "tokemak",
    "yei-finance",
  ];
  getTotalTvlValue(protocolIds).then((total) => {
    tvsElement.innerHTML = generateTvsElement(total);
    const tooltipElements = document.querySelectorAll(".simple-tooltip");
    tooltipElements.forEach((element) =>
      element.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      })
    );
  });
  // fetch(tvsUrl).then((response) => {
  //   response.json().then((parsedResponse) => {
  //     const tvs = parsedResponse.data[0].RedStoneTVS;
  //     const parsedTvs = tvs.slice(0, 4);
  //     tvsElement.innerHTML = generateTvsElement(parsedTvs);
  //   });
  // });

  tvsElement.innerHTML = generateTvsElement();
  const tooltipElements = document.querySelectorAll(".simple-tooltip");
  tooltipElements.forEach((element) =>
    element.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    })
  );
}
