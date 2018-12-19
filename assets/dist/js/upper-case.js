; (function () {
    "use strict";
    const sentence = prompt("Enter sentence starting with lowercase letter:", "i like JavaScript!");
    if(sentence != null && sentence !== "") {
        const newSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        alert(newSentence);
    }
    else {
        alert("Sentence wasn't written");
    }
}) ();
