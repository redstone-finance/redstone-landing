function generateTvsElement(tvs) {
  const defillamaUrl =
    "https://defillama.com/oracles/RedStone?staking=true&pool2=true&govtokens=true&doublecounted=true&borrowed=true&liquidstaking=true&vesting=true";
  return `
    <div class="tvs-link mt-3 mt-md-5">
      <a
        href="${defillamaUrl}"
        target="_blank"
        referrerpolicy="no-referrer"
        class="link-like-text-button"
      >
        <div class="py-2 px-4">
          <h3 class="">Protecting <b>${tvs} billion</b></h3>
          <div class="flex gap-2 align-items-center justify-md-content-left justify-content-center">
            <h6 class="m-0">Total Value Secured (TVS) by</h6>
            <img src="/assets/img/logos/defillama.svg" />
          </div>
        </div>
      </a>
    </div`;
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
}
