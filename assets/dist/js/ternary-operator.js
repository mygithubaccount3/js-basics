; (function () {
    "use strict";
    /*if (a + b < 4) {
        result = 'Мало';
    } else {
        result = 'Много';
    } //Task: Make this with ternary operator*/
    const a = prompt("Enter first argument:");
    const b = prompt("Enter second argument:");

    ((+a + +b) < 4) ? alert("Less") : alert("More");

}) ();
