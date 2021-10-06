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
Array.prototype.myFilter = function(callbackFn) {
    const newArr = [];
    let arg_i = 0;
    for(let i = 0; i < this.length; i++){
        if (this[i] === undefined){
            continue;
        }
        if (callbackFn(this[i],i,this)){
            newArr[arg_i] = this[i];
            arg_i++;
        }

    }
    return newArr;
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



