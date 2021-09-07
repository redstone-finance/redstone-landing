import animateDataPoints from "./animate";

function fetchData() { 

    const preloader = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;

    const sourcesNumberElement = document.getElementById("sources-number");
    const tokensNumberElement = document.getElementById("tokens-number");
    const dataPointsElement = document.getElementById("data-points-number");

    sourcesNumberElement.innerHTML = preloader;
    tokensNumberElement.innerHTML = preloader;
    dataPointsElement.innerHTML = preloader;

    fetch('https://raw.githubusercontent.com/redstone-finance/redstone-node/main/src/config/sources.json')
        .then(response => response.json())
        .then(data => { 
            console.log('Sources:',Object.keys(data).length);
            sourcesNumberElement.innerHTML = Object.keys(data).length;
        });

    Promise.all([
        fetch('https://raw.githubusercontent.com/redstone-finance/redstone-node/main/manifests/main.json')
            .then(r => r.json()),
        fetch('https://raw.githubusercontent.com/redstone-finance/redstone-node/main/manifests/stocks.json')
            .then(r => r.json()),
    ])  
    .then(
        resp => {
            let tokensNumber = 0;

            resp.forEach(set => {
                tokensNumber += Object.keys(set.tokens).length;
            })
            console.log(tokensNumber)
            tokensNumberElement.innerHTML = tokensNumber;
        }
    );
    
    let milisecondInterval = 10;    
    let pointsPerDisplayInterval = 0;

    Promise.all([
        fetch('https://arweave.net/SQqLyX5MKMRhfetfIJXJOqht8qPCJyxf1VIUOwIUjas').then(r => r.json()),
        fetch('https://arweave.net/syqhA_uEcZ-okZ94NHZCcY3CuUW4aK2njwOp6xQpjSE').then(r => r.json()),
        fetch('https://arweave.net/Q7qbcNnOrqFbI4K5vLOecPeZn2YXE8-lEpNmMCCw39w').then(r => r.json())
    ])
    .then(
        resp => {
            resp.forEach(
                (manifest ) => {
                    let pointsPerInterval = 0;
                    Object.values(manifest.tokens).forEach(
                        token => { 
                            pointsPerInterval += (token.source ? Object.keys(token.source).length : 1 )
                        });
                    pointsPerDisplayInterval += 
                    ((pointsPerInterval / manifest.interval) * milisecondInterval);    
                }    
            )

            animateDataPoints(milisecondInterval, pointsPerDisplayInterval)
        }
    );
         
}   


        

export default fetchData;


