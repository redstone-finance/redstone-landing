function animateDataPoints(displayInterval, pointsPerDisplayInterval) { 

  const referenceDataPoints = 269400336;
  const referenceTimestamp = 1630398567000;
  const fromReferenceToNow = Date.now() - referenceTimestamp;
  const pointsOnPageOpen = 
    referenceDataPoints + 
    (fromReferenceToNow * (pointsPerDisplayInterval / displayInterval));


  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function animateValue(htmlElement, startPoint, interval, pointsPerInterval) {
    let startTimestamp = null;
    let previousPoint = startPoint;
    let previousTimestamp = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      if ((timestamp - previousTimestamp) > interval) { 
        const progress = ((timestamp - previousTimestamp) / interval) * pointsPerInterval;
        const currentPoint = Math.floor(previousPoint + progress);
        htmlElement.innerHTML = numberWithSpaces(currentPoint);
        previousTimestamp = timestamp;
        previousPoint = currentPoint;
      }
      window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }
    
  const obj = document.getElementById("data-points-number");
  animateValue(obj, pointsOnPageOpen, displayInterval, pointsPerDisplayInterval);

  
}

export default animateDataPoints;


