let sale = true;
sale = false;

/* 
The else statement:

- Uses the else keyword following the code block of an if statement.
- Has a code block that is wrapped by a set of curly braces {}.
- The code inside the else statement code block will execute when the if statement’s condition evaluates to false.


*/

if(sale) {
    console.log('Time to buy!');
} else {
    console.log('Time to wait for a sale.');
}

// Comparison Operators
/* 
A list of some handy comparison operators and their syntax:

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==

All comparison statements evaluate to either true or false and are made up of:

Two values that will be compared.
An operator that separates the values and compares them accordingly (>, <, <=,>=,===,!==).
*/

let hungerLevel = 7;

if (hungerLevel === 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}


// Logical Operators

/* 
There are three logical operators:

the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)


When we use the && operator, we are checking that two things are true:

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. Otherwise, if either condition is false, the && condition will evaluate to false and the else block will execute.



---------------------------------------------------------------


If we only care about either condition being true, we can use the || operator:

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}


When using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true. In the code example above, if either day === 'Saturday' or day === 'Sunday' evaluates to true the if‘s condition will evaluate to true and its code block will execute. If the first condition in an || statement evaluates to true, the second condition won’t even be checked. Only if day === 'Saturday' evaluates to false will day === 'Sunday' be evaluated. The code in the else statement above will execute only if both comparisons evaluate to false.





--------------------------------------------------------------------

The ! not operator reverses, or negates, the value of a boolean:

let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true


Essentially, the ! operator will either take a true value and pass back false, or it will take a false value and pass back true.

*/


let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

// ------------------------------------------------------------------
// Truthy and Falsy

/* 
Let’s consider how non-boolean data types, like strings or numbers, are evaluated when checked inside a condition.

Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value — you’ll only check to see if the variable has been assigned a value.

Here’s an example:

let myVariable = 'I Exist!';

if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

The code block in the if statement will run because myVariable has a truthy value; even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional context, it evaluates to true because it has been assigned a non-falsy value.


----------------------------------
So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

- 0
- Empty strings like "" or ''
- null which represent when there is no value at all
- undefined which represent when a declared variable lacks a value
- NaN, or Not a Number

Here’s an example with numbers:

let numberOfApples = 0;

if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

// Prints 'No apples left!'

The condition evaluates to false because the value of the numberOfApples is 0. Since 0 is a falsy value, the code block in the else statement will run.

*/

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment

/* 
Truthy and falsy evaluations open a world of short-hand possibilities!

Say you have a website and want to take a user’s username to make a personalized greeting. Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not:

let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger


------------------------------

If you combine your knowledge of logical operators you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:

let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger

Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation.

*/

let tool = ''; // write 'marker'

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary Operator

/*

n the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.

Take a look at the if...else statement example:

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

We can use a ternary operator to perform the same functionality:

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');


In the example above:

The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.
*/


let isLocked = false;

isLocked ?
  console.log('You will need a key to open the door.') :
  console.log('You will not need a key to open the door.');



// Else If Statements

/* 

Else If Statements
We can add more conditions to our if...else with an else if statement. The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition. Let’s take a look at the syntax:

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed.

In the example above, since stopLight === 'red' evaluates to false and stopLight === 'yellow' evaluates to true, the code inside the first else if statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed.

*/

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
}else {
  console.log('Invalid season.');
}


// The Switch keyword 

/*

else if statements are a great tool if we need to check multiple conditions. In programming, we often find ourselves needing to check multiple values and handling each of them differently. For example:

let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

In the code above, we have a series of conditions checking for a value that matches a groceryItem variable. Our code works fine, but imagine if we needed to check 100 different values! Having to write that many else if statements sounds like a pain!


----------------------------------

A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'

- The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.
- Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case‘s console.log() would run.
- The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
- The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.
- At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.
*/

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
     console.log('You get the gold medal!');
  break;
  case 'second place':
     console.log('You get the silver medal!');
  break;
  case 'third place':
     console.log('You get the bronze medal!');
  break;
  default: 
     console.log('No medal awarded.');
  break;
}