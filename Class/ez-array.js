class EZArray extends Array{
    get first() {
        return this[0]
    }
    get last() {
        return this[this.length - 1]
    }
}


let a = new EZArray();
console.log(a instanceof EZArray); 
console.log(a instanceof Array);  
console.log(a.push(1,2,3,4));      
console.log(a.pop());             
console.log(a.first);               
console.log(a.last);             
console.log(a[1]);                
console.log(Array.isArray(a));      
console.log(EZArray.isArray(a));    
