;(function () {
    "use strict";
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const lowerLimit = prompt("Enter lower limit:");
    const upperLimit = prompt("Enter upper limit:");
    const result = getRandomIntInclusive(lowerLimit, upperLimit);
    alert(result);
}) ();
