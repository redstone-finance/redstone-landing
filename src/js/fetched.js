import animateDataPoints from "./animate";

function fetchData() { 

    fetch('https://raw.githubusercontent.com/redstone-finance/redstone-node/main/src/config/sources.json')
        .then(response => response.json())
        .then(data => { 
            console.log('Sources:',Object.keys(data).length);
            const element = document.getElementById("sources-number");
            element.innerHTML = Object.keys(data).length;
        });

    Promise.all([
        fetch('https://raw.githubusercontent.com/redstone-finance/redstone-node/main/manifests/all-supported-tokens.json')
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

            const element = document.getElementById("tokens-number");
            element.innerHTML = tokensNumber;
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


