// 1. What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

// Mutating array methods: These are methods of arrays, which change the array.
// i. push()
// ii. pop()
// iii. unshift()   
// iv. shift()   
// v. splice()   

// Non-Mutating array methods: These are methods of arrays, which do not change the array.
// i. filter()
// ii. map()
// iii. concat()   
// iv. indexOf()   
// v. includes()  



//2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

// Add ‘Kotlin’ to the end of the array
languages.push('kotlin')
console.log(languages)

// Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java')
console.log(languages)

// Remove the first item in the array
languages.shift(0)
console.log(languages)

// Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala', 'Swift')
console.log(languages)

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, 'Go', 'Rust')
console.log(languages)

// 3. What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
	function changeFruit( fruit ) {
    		fruit[2] = "orange";
    		return fruit;
	}
console.log(changeFruit(fruit))
// The value of fruit: [ 'apple', 'mango', 'orange' ]



// 4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10

const arr = [7, 0, 2, 10, 35];

let largestNumber = arr[0];

function maxValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (largestNumber  < arr[i] ) {
            largestNumber  = arr[i];
        }
    } return largestNumber 
      
}
console.log(maxValue(arr));



// 5. Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,
// valTimesIndex([1,2,3]) // [0,2,6]
    //    valTimesIndex([5,10,15]) // [0,10,30]


const numbers = [5, 2, 10, 12, 15, 6, 29, 45]

numbers.forEach((number) => {
    number = number*numbers.indexOf(number)
    console.log(number)
});



