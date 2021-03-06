/* This assignment will give you some practice with creating arrays and using their methods. */

/* Please note that his is NOT a function-based challenge (aside from your challenge banner function). Everything should be in the global scope--this means you will benefit from using `for` loops instead of `while`. */


// Challenge 0
//
// Challenge banner time! Write a function that console.logs "####### Challenge n #######", where n is the number passed into the function.
function challengeBanner(n) {
  console.log(`####### Challenge ${n} #######`);
}
// Call this function before each of the below challenges, passing in the number of the current challenge.
// 
//
// Challenge 1
challengeBanner(1);

function printStudents(students) {
  for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
}

// Loop through the following array, console.logging out each value.
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];

printStudents(students);

// Challenge 2
challengeBanner(2);

function printGradesBackwards(grades) {
  const lastGrade = grades.length - 1;
  for(let i = lastGrade; i > -1; i--) {
    console.log(grades[i]);
  }
}
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];

printGradesBackwards(grades);

// Challenge 3
challengeBanner(3);

function printEvenNumbers(arr) {
  for(let i = 0; i < arr.length; i++) {
    let isEven = arr[i] % 2 === 0 ? true : false;
    if(isEven) {
      console.log(arr[i])
    }
  }
}
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

printEvenNumbers(positiveNumbers);

// Challenge 4
challengeBanner(4);

function printEvenNumbers2(arr) {
  for(let i = 0; i < arr.length; i++) {
    let isEven = Math.abs(arr[i]) % 2 === 0 ? true : false;
    if(isEven) {
      console.log(arr[i]);
    }
  }
}
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

printEvenNumbers2(mixedSignNumbers);

// Challenge 5
challengeBanner(5);

function remove3(arr) {
  arr.splice(0, 2);
  arr.splice(arr.length - 1, 1)
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

remove3(symmetricalCapitals);

// Challenge 6
challengeBanner(6);

function add3(arr, start, end1, end2) {
  arr.splice(0, 0, start);
  arr.splice(arr.length, 0, end1);
  arr.splice(arr.length, 0, end2);
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

add3(fibonacciNumbers, 0, 21, 34);

// Challenge 7
challengeBanner(7);

function printArray(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// Make a NEW array with 5 values of your choice, using the same syntax as the arrays from the previous 6 challenges, that is, every value should be placed within the square brackets.  Now console.log out each value individually.
const myArray = [3, 10, 7, 7, 5];

printArray(myArray);

// Challenge 8
challengeBanner(8);
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const emptyArray = [];
emptyArray.push("pushed");
emptyArray.unshift("1", "2", "3", "4");

printArray(emptyArray);

// Challenge 9
challengeBanner(9);

// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
for(let i = 3; i < 11; i++) {
  console.log(students[i]);
}

// Challenge 10
challengeBanner(10);
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.
const studentsCopy = [];

for(let i = 3; i < 11; i++) {
  studentsCopy.push(students[i]);
}

printArray(studentsCopy);

// Challenge 11
challengeBanner(11);
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the two arrays are the same, because `slice` does NOT modify the original array.
const studentsSlice = students.slice(3, 11);
console.log("\nSlice Array:");
printArray(studentsSlice);

console.log("\nOriginal Array:");
printArray(students);

// Challenge 12
challengeBanner(12);
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
dinosaurs.splice(4, 3);
printArray(dinosaurs);

// Challenge 13
challengeBanner(13);
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
const dinoString = dinosaurs.join("*");
console.log(dinoString);

// Challenge 14
challengeBanner(14);
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
dinosaurs.reverse();
console.log(dinosaurs);

// Challenge 15
challengeBanner(15);
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
const colors = primaries.concat(secondaries);

printArray(colors);
printArray(primaries);
printArray(secondaries);