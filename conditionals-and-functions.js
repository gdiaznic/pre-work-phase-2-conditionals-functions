/*
//Conditionals and Functions
// Equals
let equals = 1 === 1;

// Greater Than
let greaterThan = 5 > 1;

// Less Than
let lessThan = 2 < 10;

// Greater Than or equals to
let greaterThanEq = 5 >= 5;

// Less than or equals to
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.0;
let storeB = 4.40;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price")
    } else {
        console.log("Their prices are equal")
    }
}
//compareStorePrices(10, 5);
//compareStorePrices(7,10);

function squareNum (number) {
    let squared = number * number;
    return squared;
}

let squaredNumber = squareNum(5);
console.log(squaredNumber);
*/

/*
//Scope
//This is the global scope
let x = 10;

//this is the function scope
function addNumbers (n, m, x) {
    console.log(x);
    let b;
    //block scope like if blocks
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(2,3, 7);
console.log(x);

 */


/*
//Arrays, for loops, while loops
//Array start at 0 index. For example:
//              0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 1, 7];

let arrLen = ourArray.length;
//3 elements of for loops, counter; comparison; increment
for(let i = 0; i < arrLen; i++) {
   // console.log("i is equal to: " +i);
    console.log(ourArray[i]);
    for(let j = 0; j < 10; j++) {
        console.log('j is equal to: ' +j)
    }
}

// don't forget to put the x = x + 1; or else it will run an infinite loop
let x = 0;
while (x < 10){
    console.log('Ran');
    x = x + 1;
}

 */