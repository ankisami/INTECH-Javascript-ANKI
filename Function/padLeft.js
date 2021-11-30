const chai = require("chai");

function padLeft(char, str, quantity) {
    
    let toPad = ""
    for (let q = 0; q < quantity; q++) {
        toPad += char
    }

    return toPad + str
}

const padZeros = padLeft.bind(null, "0");
const padSpaces = padLeft.bind(null, " ");

chai.assert.equal(padLeft("0", "123", 6),"000000123");
chai.assert.equal(padZeros("11011", 8), "0000000011011");
chai.assert.equal(padSpaces("11011", 8), "        11011");
