// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0; i < this.length; i++){
        if (this[i] === undefined){
            continue;
        }
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    const newArr = [];
    for(let i = 0; i < this.length; i++){
        if (this[i] === undefined){
            continue;
        }
        newArr[i] = (callbackFn(this[i],i,this));
    }
    return newArr;
};

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};


//Test//
const eacharray = ['a', 'b', 'c' ,,,'d'];
console.log('test for myeach')
eacharray.forEach(x => console.log(x));
eacharray.myEach(x => console.log(x));
console.log('____________________')
const arr = [1,4,9,16];
console.log('test for mymap')
console.log('Map checks')
console.log(arr.map(x => x*2))
console.log(arr.myMap(x => x*2))
console.log('____________________')


