function animateDataPoints(displayInterval, pointsPerDisplayInterval) { 

  const referenceDataPoints = 771549199;
  const referenceTimestamp = 1630068468954;
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


