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
  const defillamaUrl =
    "https://defillama.com/oracles/RedStone?staking=false&pool2=false&govtokens=false&doublecounted=true&borrowed=true&liquidstaking=false&vesting=false";
  return `
    <div class="tvs-link mt-md-5 w-100" style="max-width: 490px;">
      <a
        href="${defillamaUrl}"
        target="_blank"
        referrerpolicy="no-referrer"
        class="link-like-text-button w-100"
      >
        <div class="py-3 px-4 w-100">
          <div class="d-flex justify-content-between align-items-stretch w-100">
            <!-- TVS Column -->
            <div class="text-center d-flex flex-column" style="flex: 1;">
                <div class="d-flex align-items-center justify-content-center">
                  <h6 class="mb-1 text-nowrap">RedStone TVS  <span class="simple-tooltip ms-1">
                    <img style="width: 13px;" src="/assets/img/icons/info.svg"/>
                    <span class="tooltiptext text-wrap">
                      TVS (Total Value Secured) is a metric similar to TVL (Total Value Locked) that also counts assets that are temporarily outside of the protocol (Borrows & Double Count) but could be lost if an oracle misprices delivered feeds.
                    </span>
                  </span></h6>
                </div>
                ${
                  tvs
                    ? `<h1 class="mt-auto mb-0"><b>$${tvs}B</b></h1>`
                    : `<div class="d-flex align-items-center justify-content-center loader-container-tvs mt-auto">
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                      </div>`
                }
            </div>

            <!-- Separator -->
            <div class="mx-2 d-flex align-items-center">
              <div style="width: 1px; height: 100%; background-color: rgba(59, 130, 246, 0.2);"></div>
            </div>

            <!-- Clients Column -->
            <div class="text-center d-flex flex-column" style="flex: 1;">
              <h6 class="mb-1 text-nowrap">No. of clients
                <span class="simple-tooltip ms-1">
                    <img style="width: 13px;" src="/assets/img/icons/info.svg"/>
                    <span class="tooltiptext text-wrap">
                      TVS (Total Value Secured) is a metric similar to TVL (Total Value Locked) that also counts assets that are temporarily outside of the protocol (Borrows & Double Count) but could be lost if an oracle misprices delivered feeds.
                </span>
              </h6>
              <h2 class="mt-auto mb-0"><b>85</b></h2>
            </div>
              <div class="mx-2 d-flex align-items-center">
              <div style="width: 1px; height: 100%; background-color: rgba(59, 130, 246, 0.2);"></div>
            </div>
             <div class="text-center d-flex flex-column" style="flex: 1;">
              <h6 class="mb-1 text-nowrap">Client's TVL
                <span class="simple-tooltip ms-1">
                    <img style="width: 13px;" src="/assets/img/icons/info.svg"/>
                    <span class="tooltiptext text-wrap">
                      TVS (Total Value Secured) is a metric similar to TVL (Total Value Locked) that also counts assets that are temporarily outside of the protocol (Borrows & Double Count) but could be lost if an oracle misprices delivered feeds.
                </span>
              </h6>
              <h2 class="mt-auto mb-0"><b>$17.4B</b></h2>
            </div>
          </div>
        </div>
      </a>
    </div>
      <a
      href="${defillamaUrl}"
      target="_blank"
      referrerpolicy="no-referrer"
      class="link-like-text-button w-100"
    >
      <div class="mt-2 ml-4" style="font-size: 10px;">
        <small>Sourced from</small> <img src="/assets/img/logos/defillama.svg" style="height: 20px;" />
      </div>
    </a>`;
}

if (document.getElementById("tvs")) {
  // const tvsUrl =
  //   "https://d12s4zpdqk5syt.cloudfront.net/v1/recipes/PHnrSeRI0Uf6O6vtFBE2/results-latest";
  const tvsElement = document.getElementById("tvs");

  getTotalTvlValue(["silostake", "aave", "uniswap"]).then((total) => {
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

  // tvsElement.innerHTML = generateTvsElement();
  const tooltipElements = document.querySelectorAll(".simple-tooltip");
  tooltipElements.forEach((element) =>
    element.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    })
  );
}
