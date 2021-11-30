import { assert } from 'chai';


function dump(obj) {
    let strObj;
    let size = 0;

    strObj = "{";
    for (let [key, value] of Object.entries(obj)) {

        if (Array.isArray(value)) strObj += `${key}:[${value}]`;
        else strObj += `${key}:"${value}"`;
        size++;
        if (size < Object.keys(obj).length) strObj += ',';
    };


    strObj += "}";
    return strObj;
};



let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];
// => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}

assert.equal(dump(obj), '{firstname:\"Alan\",lastname:\"Turing\",birthday:[1921,6,23]}', "Error, is not equal");