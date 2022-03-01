
// Q1) Take an object with your mom's name & your age. Now create an obj for your sibling by age difference.

const familyObj = {
    momName : "Mom",
    myAge : 22
};

const sisObj = {...familyObj, myAge: familyObj.myAge + 3};


// Q2) Take an arr with 5 colors. Create another arr by adding two more colors to it.

const colors = ["red", "blue", "green", "orange", "pink"];
const moreColors = [...colors, "white", "black"];


// Q3) Write a function birthday() to take name and age in an object & and increase the age.

const birthday = personObj => ({...personObj, age: personObj.age + 1});

const personInfo = {
    name: "Tanjiro",
    age: 18
};


// Q4) Write a func which can tell whether a no. is less than 10 or not. Supply this func to .filter() to get an array with numbers less than 10 in it.

const isLessThan10 = num => num < 10;

const arr = [2,16,5,8,11,13];

arr.filter(isLessThan10);


// Q5) Given an arr of numbers, return an object for each item.

const arrayToObj = array => ({item: array});

arr.map(arrayToObj);


// Q6) Given an arr of numbers, calculate the sum.

const arraySum = (acc, curr) => acc + curr;

arr.reduce(arraySum, 0);


// Q7) Can you write your own reduce using for loop?

Array.prototype.myReduce = function(callbackfn, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue;
    for(var i = 0; i < this.length; i++) {
        if(accumulator !== undefined) {
            accumulator = callbackfn.call(undefined, accumulator, this[i], i, this);
        }
        else {
            accumulator = this[i];
        }
    }
    return accumulator;
}


// Q8) Given an array of integers:

// a. Find the sum of all odd numbers.

const sumOdd = (acc, curr) => curr % 2 === 0 ? acc : curr + acc;

arr.reduce(sumOdd, 0);


// b. Find the sum of all numbers at odd indices.

const sumOddIndices = (acc, curr, currIndex) => currIndex % 2 === 0 ? acc: curr + acc;

arr.reduce(sumOddIndices, 0);


// c. Find the biggest number in the array.

const largestInArray = (acc, curr) => curr > acc ? acc = curr : acc;

arr.reduce(largestInArray, 0);


// d. Find the numbers divisible by 10.

const isDivisibleBy10 = integer => integer % 10 === 0;

arr.filter(isDivisibleBy10);


// e. Return an array where odd no.s are incremented by one & even no.s are decremented by one.

const increaseOddDecreaseEven = num => num % 2 === 0 ? num - 1 : num + 1;

arr.map(increaseOddDecreaseEven);


// f. Return an object with sum of all odd numbers and even numbers separately.

const sumOfOddEven = (oddEvenSum, curr) => curr % 2 === 0 ? {...oddEvenSum, even: oddEvenSum.even + curr} : {...oddEvenSum, odd: oddEvenSum.odd + curr};

const oddEvenSumObj = { even: 0, odd: 0};

arr.reduce(sumOfOddEven, oddEvenSumObj);


// Q9) Given an array of strings

// a. Find the no. of strings with similar no. of characters.

const input = ["apple", "orange", "mango", "papaya"];

const isLengthSame = (accObj, curr) => curr.length in accObj ? {...accObj, [curr.length] :  accObj[curr.length] + 1} : {...accObj, [curr.length] : 1};

input.reduce(isLengthSame, {});


// b. Return an array with strings which have vowels.

const isVowel = item => item.includes("a" || "e" || "i" || "o" || "u");

input.filter(isVowel);


// c. Return an array of objects with key as item and value as number of characters in the string.

const arrOfObjects = item => ({ [item]: item.length});

input.map(arrOfObjects);


// Q10) Create a func which takes your name & returns a func which would add your name to anything that function says.

const getName = myName => msg => `${myName}, says ${msg}`;

const giveMsg = getName("Taran");

giveMsg("Hello!");


// Q11) Write a func which can log any txt with userName. Another func which can write any txt with userID. Compose both functions to give one function which can log any text with both userName + userID.

const logUserName = msg => `userName: ${msg}`;

const logUserID = msg => `userID: 878263 :: ${msg}`;

const userData = msg => logUserID(logUserName(msg));

userData("taran.16");


// Q12) The One Question
// Write a function compose() which can take any no. of functions and return a function which will run the given functions in order when called with an argument.

const increment = num => num + 1;
const double = num => num * 2;
const square = num => num * num;

const compose = (...rest) => (arg) => {
    const functionList = [...rest];

    const functionOrder = (acc, curr) => curr(acc);

    return functionList.reduce(functionOrder, arg);
}
console.log(compose(increment, double, square)(2));



// FP/ES6+ Practice Exercises
