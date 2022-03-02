
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

// Q1) Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

const practiceArr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const changeEvenToOdd = num => num % 2 === 0 ? num + 1 : num;

practiceArr.map(changeEvenToOdd);


// Q2) Get the names in an array for only those who have a cycle.

const family = [
    {
      name    : 'Tanay',
      haveCycle : true
    },
    {
      name     : 'Akanksha',
      haveCycle : false
    },
    {
      name     : 'Tanvi',
      haveCycle : true
    },
      {
      name     : 'Kanak',
      haveCycle : false
    }
  ];

  const checkCycle = item => item.haveCycle;

family.filter(checkCycle).map((item) => item.name);


// Q3) Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.

const evenLessThan8 = item => item < 8 && item % 2 === 0;

practiceArr.filter(evenLessThan8);


// Q4) Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

const arr2 = ['eat', 'sleep', 'repeat', 'code'];

const lengthLessThan5 = item => item.length < 5;

arr2.filter(lengthLessThan5);


// Q5) Given an array. Write a function to get the sum of all elements which are greater than 50.

const arr3 = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const sumGreaterThan50 = (acc, curr) => curr > 50 ? curr + acc: acc;

arr3.reduce(sumGreaterThan50, 0);


// Q6) Given an array. Write a function to find the product of all elements which are even.

const arr4 = [1, 2, 3, 7, 5, 6, 8, 9];

const productOfEven = (acc, curr) => curr % 2 === 0 ? curr * acc : acc;

arr4.reduce(productOfEven, 1);


// Q7) Given an array of objects. Write a function to find the sum of ages of each person.

const arr5 = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
];

const ageFromArray = item => item.age;

const sumOfAges = (acc, curr) => curr + acc;

arr5.map(ageFromArray).reduce(sumOfAges, 0);


//Q8) Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

const arr6 = ["You", "all", "are", "rockstars"];

const convertToObj = (acc, curr, index) => ({...acc, [index] : curr});

arr6.reduce(convertToObj, {});


//Q9) Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’.


const arr7 = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
];

const isFruitOrVegetagle = item => item.name.length > 5 ? {...item, type: "vegetagle"} : {...item, type: "fruit"};

arr7.map(isFruitOrVegetagle);


// Q10) Given an array of objects:
// a. Get all the items in an array whose quantity is less than 2.

const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
  ];

const quantLessThan2 = item => item.quantity < 2;

inventory.filter(quantLessThan2).map((item) => item.name);

// b. Get the total quantity of items present in the inventory.

const mapQuantity = item => item.quantity;

const totalItems = (acc, curr) => curr+ acc;

inventory.map(mapQuantity).reduce(totalItems, 0);

// c. Find the object which contains the item whose quantity is zero.

const finishedItems = item => item.quantity === 0;

inventory.filter(finishedItems);


// Q11) Given an array. Write a function to join all elements of the array with a hyphen in between them.

const arr8 = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

const hyphenate = (acc, curr) => `${acc}-${curr}`

arr8.reduce(hyphenate);

//OR

arr8.join('-');


// Q12) Write a function that accepts a number as input and inserts hyphens between every two even numbers.

const hyphenBetweenEven = num => {
    const hyphenateEven = (acc, curr) => curr % 2 === 0 && acc[acc.length - 1] % 2 === 0 ? `${acc}-${curr}` : `${acc}${curr}`;

    return num.toString().split("").reduce(hyphenateEven);
}

console.log(hyphenBetweenEven(24345687));


// Q13) Write a function that takes in a string and converts all the characters to uppercase. (Hint: toUpperCase())

const stringToUppercase = str => str.toUpperCase();

stringToUppercase("neogrammer");
stringToUppercase("neoG");


// Q14) Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.

const vowelUppercaseOnly = str => {

    const arrFromStr = str.toLowerCase().split('');

    return arrFromStr.map((char) => char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ? char.toUpperCase() : char);
}

console.log(vowelUppercaseOnly("neoG"));


// Q15) Flatten an array without using flat().

const arr9 = [
  ['a', 'b', 'c'],
  ['c', 'd', 'e'],
  ['e', 'd', 'f'],
];

const flatArray = (acc, curr) => [...acc, ...curr];

console.log(arr9.reduce(flatArray));

// Q16) Count the occurrences of distinct elements in the given array.

let count = 1;

const countOccurrence = (acc, curr) => curr in acc ? {...acc, [curr]: count + 1} : {...acc, [curr]: 1};

console.log(arr9.reduce(flatArray).reduce(countOccurrence, {}));