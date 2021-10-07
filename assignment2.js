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
Array.prototype.mySome = function(callbackFn) {
    for(let i = 0; i < this.length; i++){
        if (this[i] === undefined){
            continue;
        }
        if (callbackFn(this[i],i,this)){
            return true;
        }
    }
    return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for(let i = 0; i < this.length; i++){
        if (this[i] === undefined){
            continue;
        }
        if (!callbackFn(this[i],i,this)){
            return false;
        }
    }
    return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, initialVal) {
    let result = (initialVal !== undefined) ? initialVal : undefined;
  	let start = 0;
  	while(result === undefined){
      result = this[start];
      start++;
    }
    for(start; start < this.length; start++){
        if (this[start] === undefined){
            continue;
        }
        result = callbackFn(result,this[start],start,this);
    }
    return result;
};

// INCLUDES //
Array.prototype.myIncludes = function(search, index) {
    let start = (index === undefined) ? 0 : 
    	(index < 0) ? this.length + index : index;
    for(start; start <= this.length; start++){
        if(this[start] === undefined){
            continue;
        }
        if (this[start] === search ){
            return true;
        }
    }
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(search, index) {
    let start = (index === undefined) ? 0 :
    	(index < 0) ? this.length + index : index;;
    for(start; start < this.length; start++){
        if(this[start] === search){
            return start;
        }
    }
    return -1;
};

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;

    for(let i = length; i < length +args.length; i++){
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(search, index) {
    let end = (index === undefined || index > 0) ? 0 : index;
  	let start = (index < 0) ? (this.length - 1) + index: this.length - 1
    for(start; start >= end; start--){
        if(this[start] === search){
            return start;
        }
    }
    return -1;
};

// KEYS //
Object.grabKeys = function(object) {
    const newArr = [];
    let arg_i = 0;
    for(const prop in object)
    {
        newArr[arg_i] = prop;
        arg_i++;
    }
    return newArr;
};

// VALUES //
Object.grabValues = function(object) {
    const newArr = [];
    let arg_i = 0;
    for(const prop in object)
    {
        newArr[arg_i] = object[prop];
        arg_i++;
    }
    return newArr;
};


