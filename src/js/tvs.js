function generateTvsElement(tvs) {
  tvs;
  const defillamaUrl =
    "https://defillama.com/oracles/RedStone?staking=false&pool2=false&govtokens=false&doublecounted=true&borrowed=true&liquidstaking=false&vesting=false";
  const tmpTvs = "$3.43";
  return `
    <div class="tvs-link mt-3 mt-md-5">
      <a
        href="${defillamaUrl}"
        target="_blank"
        referrerpolicy="no-referrer"
        class="link-like-text-button"
      >
        <div class="py-2 px-4">
          <div class="flex gap-2 align-items-center justify-content-center mb-2">
            <h3 class="mb-0">Protecting</h3>
            ${
              tmpTvs
                ? `<h3 class="mb-0"><b>${tmpTvs} billion</b></h3>`
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
            <h6 class="m-0">Total Value Secured (TVS) by</h6>
            <img src="/assets/img/logos/defillama.svg" />
          </div>
        </div>
      </a>
    </div>`;
}

if (document.getElementById("tvs")) {
  const tvsUrl =
    "https://simplescraper.io/api/UCyfpCsZgxWOriZ6Gt2Q?apikey=dUkGSzMvdCuU1fKgkpFxuGAFpkCJM1xA";
  const tvsElement = document.getElementById("tvs");
  fetch(tvsUrl).then((response) => {
    response.json().then((parsedResponse) => {
      const tvs = parsedResponse.data[0].TVS;
      const parsedTvs = tvs.slice(0, 4);
      tvsElement.innerHTML = generateTvsElement(parsedTvs);
    });
  });

  tvsElement.innerHTML = generateTvsElement();
}
