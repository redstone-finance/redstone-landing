import animateDataPoints from "./animate";
import { getClientsCount, allClients } from "./clients";

const getAllTvlUrls = (clients) => {
  return clients
    .map((client) => client.tvlUrl)
    .filter((tvl) => tvl)
    .flat();
};

const getTotalTvlStatValue = (urls) => {
  const promises = urls.map((url) =>
    fetch(url)
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

function fetchData() {
  const preloader = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;

  const sourcesNumberElement = document.getElementById("sources-number");
  const tokensNumberElement = document.getElementById("tokens-number");
  const dataPointsElement = document.getElementById("data-points-number");
  const clientsElement = document.getElementById("clients-number");
  const tvlElement = document.getElementById("tvl-number");

  if (sourcesNumberElement) {
    sourcesNumberElement.innerHTML = preloader;
  }
  if (dataPointsElement) {
    dataPointsElement.innerHTML = preloader;
  }
  if (tokensNumberElement) {
    tokensNumberElement.innerHTML = preloader;
  }
  if (tvlElement) {
    tvlElement.innerHTML = preloader;
  }

  clientsElement.innerHTML = preloader;

  getTotalTvlStatValue(getAllTvlUrls(allClients)).then((total) => {
    tvlElement.innerHTML = total + " billion";
  });
  fetch(
    "https://raw.githubusercontent.com/redstone-finance/redstone-app/main/src/config/sources.json"
  )
    .then((response) => response.json())
    .then((data) => {
      sourcesNumberElement.innerHTML = Object.keys(data).length;
    });

  Promise.all([
    fetch(
      "https://raw.githubusercontent.com/redstone-finance/redstone-oracles-monorepo/main/packages/oracle-node/manifests/data-services/main.json"
    ).then((r) => r.json()),
  ]).then((resp) => {
    let tokensNumber = 0;

    resp.forEach((set) => {
      tokensNumber += Object.keys(set.tokens).length;
    });
    tokensNumberElement.innerHTML = tokensNumber;
  });

  let milisecondInterval = 10;
  let pointsPerDisplayInterval = 0;

  Promise.all([
    fetch(
      "https://arweave.net/SQqLyX5MKMRhfetfIJXJOqht8qPCJyxf1VIUOwIUjas"
    ).then((r) => r.json()),
    fetch(
      "https://arweave.net/syqhA_uEcZ-okZ94NHZCcY3CuUW4aK2njwOp6xQpjSE"
    ).then((r) => r.json()),
    fetch(
      "https://arweave.net/Q7qbcNnOrqFbI4K5vLOecPeZn2YXE8-lEpNmMCCw39w"
    ).then((r) => r.json()),
  ]).then((resp) => {
    resp.forEach((manifest) => {
      let pointsPerInterval = 0;
      Object.values(manifest.tokens).forEach((token) => {
        pointsPerInterval += token.source
          ? Object.keys(token.source).length
          : 1;
      });
      pointsPerDisplayInterval +=
        (pointsPerInterval / manifest.interval) * milisecondInterval;
    });

    animateDataPoints(milisecondInterval, pointsPerDisplayInterval);
  });

  clientsElement.innerHTML = getClientsCount();
}

export default fetchData;
