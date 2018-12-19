(() => {
    "use strict";
    const generator = (quantitySym, quantityPass) => {
        let result = "";

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        for (let i = 0; i < quantityPass; i++) {

            for (let k = 0; k < quantitySym; k++) {

                result += String.fromCharCode(getRandomInt(200, 500));
            }
            result += " ";
        }
        return result;
    };
    console.log(generator(5,5));
}) ();
