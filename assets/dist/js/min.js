; (function () {
    "use strict";
    const firstArg = prompt("Enter first argument:", "8");
    const secondArg = prompt("Enter second argument:", "2");

    if(+firstArg > +secondArg) {
        alert(+secondArg);
    }
    else if(+firstArg < +secondArg) {
        alert(+firstArg);
    }
    else if(+firstArg === +secondArg) {
        alert(+firstArg + "=" + +secondArg);
    }
    else {
        alert("Invalid argument(s)");
    }
}) ();
