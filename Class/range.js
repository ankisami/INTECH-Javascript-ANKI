class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) {
        if (this.from <= this.to) {
            return(this.from <= x && this.to >= x)
        } else {
            return(this.to <= x && this.from >= x)
        }
    }
    static parse(s) {
        let array = this.integerRangePattern.exec(s)
        if(array != null) {
            return new Range(array[1], array[2]);
        }
    }
    static integerRangePattern = /^[(](-?\d+)[.]{3}(-?\d+)[)]$/;
}

class Span extends Range {
    constructor(from, span) {
        const osuper = span > 0 ? [from, from + span] : [from + span, from]; 
        super(...osuper);
    }
}

Range.prototype.toString = function () {
    return `(${this.from}...${this.to})`
} 

const range = new Range(1, 5);
console.log(range.from);
console.log(range.to);
console.log(range.includes(5));
console.log(range.toString());
console.log(Range.parse("(12...2000000)"));


console.log((new Span(2, 4)).toString()); 
console.log((new Span(12, -8)).toString()); 
