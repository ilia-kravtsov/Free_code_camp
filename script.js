// ___________________________________________ 1 Comment Your JavaScript Code

/*
Comments are lines of code that JavaScript will intentionally ignore.
Comments are a great way to leave notes to yourself and to other people
 who will later need to figure out what that code does.

There are two ways to write comments in JavaScript:

Using // will tell JavaScript to ignore the remainder of the text on the current line. This is an in-line comment:

// This is an in-line comment.
You can make a multi-line comment beginning with and ending with .

NOTE: As you write code, you should regularly add comments to clarify the function of parts of your code.
Good commenting can help communicate the intent of your code—both for others and for your future self.

Try creating one of each type of comment.
 */
// This is an in-line comment.

/*
This is multiline comment
 */
// ___________________________________________ 2 Declare JavaScript Variables

/*
In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.

For example, computers distinguish between numbers, such as the number 12, and strings, such as "12", "dog", or "123 cats", which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.

Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the eight data types may be stored in a variable.

Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.

We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

var ourName;
creates a variable called ourName. In JavaScript we end statements with semicolons. Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

Use the var keyword to create a variable called myNaффme.

Hint
Look at the ourName example above if you get stuck.
 */
var myName;
// ___________________________________________ 3 Storing Values with the Assignment Operator

/*
In JavaScript, you can store a value in a variable with the assignment operator (=).

myVariable = 5;
This assigns the Number value 5 to myVariable.

If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.

var myVar;
myVar = 5;
First, this code creates a variable named myVar. Then, the code assigns 5 to myVar. Now, if myVar appears again in the code, the program will treat it as if it is 5.

Assign the value 7 to variable a.
 */
var a;
a = 7
// ___________________________________________ 4 Assigning the Value of One Variable to Another

/*
After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator.

var myVar;
myVar = 5;
var myNum;
myNum = myVar;
The above declares a myVar variable with no value, then assigns it the value 5. Next, a variable named myNum is declared with no value. Then, the contents of myVar (which is 5) is assigned to the variable myNum. Now, myNum also has the value of 5.

Assign the contents of a to variable b.
 */
var a;
a = 7;
var b;
b = a;
// ___________________________________________ 5 Initializing Variables with the Assignment Operator

/*
It is common to initialize a variable to an initial value in the same line as it is declared.

var myVar = 0;
Creates a new variable called myVar and assigns it an initial value of 0.

Define a variable a with var and initialize it to a value of 9.
 */
var a = 9;
// ___________________________________________ 6 Declare String Variables

/*
Previously you used the following code to declare a variable:

var myName;
But you can also declare a string variable like this:

var myName = "your name";
"your name" is called a string literal. A string literal, or string,
is a series of zero or more characters enclosed in single or double quotes.

Create two new string variables: myFirstName and myLastName
and assign them the values of your first and last name, respectively.
 */
const myFirstName = 'ilia';
const myLastName = 'kravtsov';
// ___________________________________________ 7 Understanding Uninitialized Variables

/*
When JavaScript variables are declared, they have an initial value of undefined.
If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number".
If you concatenate a string with an undefined variable, you will get a string of undefined.

Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.
 */
var a = 5;
var b = 10;
var c = 'I am a';
// ___________________________________________ 8 Understanding Case Sensitivity in Variables

/*
 In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

 MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

 Best Practice

 Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

 Examples:

 var someVariable;
 var anotherVariableName;
 var thisVariableNameIsSoLong;
 Modify the existing declarations and assignments so their names use camelCase.

 Do not create any new variables.
 */
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
// ___________________________________________ 9 Explore Differences Between the var and let Keywords

/*
One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:

var camper = "James";
var camper = "David";
console.log(camper);
In the code above, the camper variable is originally declared as James, and is then overridden to be David. The console then displays the string David.

In a small application, you might not run into this type of problem. But as your codebase becomes larger, you might accidentally overwrite a variable that you did not intend to. Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult.

A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. You'll learn about other ES6 features in later challenges.

If you replace var with let in the code above, it results in an error:

let camper = "James";
let camper = "David";
The error can be seen in your browser console.

So unlike var, when you use let, a variable with the same name can only be declared once.

Update the code so it only uses the let keyword.
 */
let catName = "Oliver";
let catSound = "Meow!";
// ___________________________________________ 10 Declare a Read-Only Variable with the const Keyword

/*
The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
The console will display an error due to reassigning the value of FAV_PET.

You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant.

Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). You will learn more about objects, arrays, and immutable and mutable values in later challenges. Also in later challenges, you will see examples of uppercase, lowercase, or camelCase variable identifiers.

Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices. Do not change the strings assigned to the variables.
 */
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
// ___________________________________________ 11 Add Two Numbers with JavaScript

/*
Number is a data type in JavaScript which represents numeric data.

Now let's try to add two numbers using JavaScript.

JavaScript uses the + symbol as an addition operator when placed between two numbers.

Example:

const myVar = 5 + 10;
myVar now has the value 15.

Change the 0 so that sum will equal 20.
 */
const sum = 10 + 10;
// ___________________________________________ 12 Subtract One Number from Another with JavaScript

/*
We can also subtract one number from another.

JavaScript uses the - symbol for subtraction.

Example

const myVar = 12 - 6;
myVar would have the value 6.

Change the 0 so the difference is 12.
 */
const difference = 45 - 33;
// ___________________________________________ 13 Multiply Two Numbers with JavaScript

/*
We can also multiply one number by another.

JavaScript uses the * symbol for multiplication of two numbers.

Example

const myVar = 13 * 13;
myVar would have the value 169.

Change the 0 so that product will equal 80.
 */
const product = 8 * 10;
// ___________________________________________ 14 Divide One Number by Another with JavaScript

/*
We can also divide one number by another.

JavaScript uses the / symbol for division.

Example

const myVar = 16 / 2;
myVar now has the value 8.

Change the 0 so that the quotient is equal to 2.
 */
const quotient = 66 / 33;
// ___________________________________________ 15 Increment a Number with JavaScript

/*
You can easily increment or add one to a variable with the ++ operator.

i++;
is the equivalent of

i = i + 1;
Note: The entire line becomes i++;, eliminating the need for the equal sign.

Change the code to use the ++ operator on myVar.
 */
let myVar = 87;

// Only change code below this line
myVar++;
// ___________________________________________ 16 Decrement a Number with JavaScript

/*
You can easily decrement or decrease a variable by one with the -- operator.

i--;
is the equivalent of

i = i - 1;
Note: The entire line becomes i--;, eliminating the need for the equal sign.

Change the code to use the -- operator on myVar.
 */
let myVar = 11;

// Only change code below this line
myVar--;
// ___________________________________________ 17 Create Decimal Numbers with JavaScript

/*
We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.

Note: when you compute numbers, they are computed with finite precision. Operations using floating points may lead to different results than the desired outcome. If you are getting one of these results, open a topic on the freeCodeCamp forum.

Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
 */
const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 1.2
// ___________________________________________ 18 Multiply Two Decimals with JavaScript

/*
In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

Let's multiply two decimals together to get their product.

Change the 0.0 so that product will equal 5.0.
 */
const product = 2.0 * 2.5;
// ___________________________________________ 19 Divide One Decimal by Another with JavaScript

/*
Now let's divide one decimal by another.

Change the 0.0 so that quotient will equal to 2.2.
 */
const quotient = 4.4 / 2.0; // Change this line
// ___________________________________________ 20 Finding a Remainder in JavaScript

/*
The remainder operator % gives the remainder of the division of two numbers.

Example

5 % 2 = 1
5 / 2 = 2 remainder 1
2 * 2 = 4
5 - 4 = 1
Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2. Even numbers have a remainder of 0, while odd numbers a remainder of 1.

17 % 2 = 1
48 % 2 = 0
Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.

Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
 */
const remainder = 11 % 3;
// ___________________________________________ 21 Compound Assignment With Augmented Addition

/*
In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

myVar = myVar + 5;
to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

let myVar = 1;
myVar += 5;
console.log(myVar);
6 would be displayed in the console.

Convert the assignments for a, b, and c to use the += operator.
 */
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;
// ___________________________________________ 22 Compound Assignment With Augmented Subtraction

/*
Like the += operator, -= subtracts a number from a variable.

myVar = myVar - 5;
will subtract 5 from myVar. This can be rewritten as:

myVar -= 5;
Convert the assignments for a, b, and c to use the -= operator.
 */
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;
// ___________________________________________ 23 Compound Assignment With Augmented Multiplication

/*
The *= operator multiplies a variable by a number.

myVar = myVar * 5;
will multiply myVar by 5. This can be rewritten as:

myVar *= 5;
Convert the assignments for a, b, and c to use the *= operator.
 */
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
// ___________________________________________ 24 Compound Assignment With Augmented Division

/*
The /= operator divides a variable by another number.

myVar = myVar / 5;
Will divide myVar by 5. This can be rewritten as:

myVar /= 5;
Convert the assignments for a, b, and c to use the /= operator.
 */
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;
// ___________________________________________ 25 Escaping Literal Quotes in Strings

/*
When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

Alan said, "Peter is learning JavaScript".
Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

I am a "double quoted" string inside "double quotes".
 */
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// ___________________________________________ 26 Quoting Strings with Single Quotes


/*
String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.

const conversation = 'Finn exclaims to Jake, "Algebraic!"';
However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
Here badStr will throw an error.

In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing.

Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.
 */
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// ___________________________________________ 27 Escape Sequences in Strings

/*
Quotes are not the only characters that can be escaped inside a string. Escape sequences allow you to use characters you may not otherwise be able to use in a string.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.

Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.
 */
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// ___________________________________________ 28 Concatenating Strings with Plus Operator

/*
In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.

Example

'My name is Alan,' + ' I concatenate.'
Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

const ourStr = "I come first. " + "I come second.";
The string I come first. I come second. would be displayed in the console.

Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.
 */

const myStr = 'This is the start. ' + 'This is the end.'; // Change this line

// ___________________________________________ 29 Concatenating Strings with the Plus Equals Operator

/*
We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

let ourStr = "I come first. ";
ourStr += "I come second.";
ourStr now has a value of the string I come first. I come second..

Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.
 */
let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.'

// ___________________________________________ 30 Constructing Strings with Variables

/*
Sometimes you will need to build a string. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

Example:

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
ourStr would have a value of the string Hello, our name is freeCodeCamp, how are you?.

Set myName to a string equal to your name and build myStr with myName between the strings My name is  and  and I am well!
 */
// Only change code below this line
const myName = "ilia";
const myStr = 'My name is ' + myName + ' and I am well!';

// ___________________________________________ 31 Appending Variables to Strings

/*
Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

Example:

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStr would have the value freeCodeCamp is awesome!.

Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

 */
const someAdjective = "wonderful";
let myStr = "Learning to code is ";
myStr += someAdjective

// ___________________________________________ 32 Find the Length of a String

/*
You can find the length of a String value by writing .length after the string variable or string literal.

console.log("Alan Peter".length);
The value 10 would be displayed in the console. Note that the space character between "Alan" and "Peter" is also counted.

For example, if we created a variable const firstName = "Ada", we could find out how long the string Ada is by using the firstName.length property.

Use the .length property to set lastNameLength to the number of characters in lastName.

по моему мы сможем использовать length для обрезания строки 
 */
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
// ___________________________________________ 33 Use Bracket Notation to Find the First Character in a String

/*
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word Charles is C. So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

Example:

const firstName = "Charles";
const firstLetter = firstName[0];
firstLetter would have a value of the string C.

Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

Hint: Try looking at the example above if you get stuck.
 */
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
// ___________________________________________ 34 Understand String Immutability

/*
In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:

let myStr = "Bob";
myStr[0] = "J";
Note that this does not mean that myStr could not be re-assigned. The only way to change myStr would be to assign it with a new value, like this:

let myStr = "Bob";
myStr = "Job";
Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
 */
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
// ___________________________________________ 35 Use Bracket Notation to Find the Nth Character in a String

/*
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word Charles is C. So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

Example:

const firstName = "Charles";
const firstLetter = firstName[0];
firstLetter would have a value of the string C.

Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

Hint: Try looking at the example above if you get stuck.
 */
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// ___________________________________________ 36 Use Bracket Notation to Find the Last Character in a String

/*
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
lastLetter would have a value of the string a.

Use bracket notation to find the last character in the lastName variable.

Hint: Try looking at the example above if you get stuck.
 */
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
// ___________________________________________ 37 Use Bracket Notation to Find the Nth-to-Last Character in a String

/*
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the const firstName = "Augusta" string by using firstName[firstName.length - 3]

Example:

const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
thirdToLastLetter would have a value of the string s.

Use bracket notation to find the second-to-last character in the lastName string.

Hint: Try looking at the example above if you get stuck.
 */
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2];; // Change this line
// ___________________________________________ 38 Word Blanks

/*
You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence:

It was really ____, and we ____ ourselves ____.
This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.
 */
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = `some ${myAdjective} ${myNoun} ${myVerb} ${myAdverb}`; // Change this line
// Only change code above this line
// ___________________________________________ 39 Store Multiple Values in one Variable using JavaScript Arrays

/*
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

const sandwich = ["peanut butter", "jelly", "bread"];
Modify the new array myArray so that it contains both a string and a number (in that order).
 */
// Only change code below this line
const myArray = ['some', 24];
// ___________________________________________ 40 Nest one Array within Another Array

/*
You can also nest arrays within other arrays, like below:

const teams = [["Bulls", 23], ["White Sox", 45]];
This is also called a multi-dimensional array.

Create a nested array called myArray.
 */
// Only change code below this line
const myArray = [['some'], [123]];
// ___________________________________________ 41 Access Array Data with Indexes

/*
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


Example

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
The console.log(array[0]) prints 50, and data has the value 60.
 */
const myArray = [50, 60, 70];
const myData = myArray[0]

// ___________________________________________ 42 Modify Array Data With Indexes

/*
Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

Example

const ourArray = [50, 40, 30];
ourArray[0] = 15;
ourArray now has the value [15, 40, 30].

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

Modify the data stored at index 0 of myArray to a value of 45.
 */
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45
// ___________________________________________ 43 Access Multi-Dimensional Arrays With Indexes

/*
One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outermost (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

Example

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
In this example, subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], and element has the value 11 .

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

Using bracket notation select an element from myArray such that myData is equal to 8.
 */
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
// ___________________________________________ 44 Manipulate Arrays With push Method

/*
An easy way to append data to the end of an array is via the push() method.

The push() method takes one or more arguments and appends them to the end of the array, in the order in which they appear. It returns the new length of the array.

Examples:

const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1 now has the value [1, 2, 3, 4, 5] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].

Push ["dog", 3] onto the end of the myArray variable.
 */
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])
// ___________________________________________ 45 Manipulate Arrays With pop Method

/*
Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
The first console.log will display the value 6, and the second will display the value [1, 4].

Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
 */
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop()
// ___________________________________________ 46 Manipulate Arrays With shift Method

/*
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Example:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
 */
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift()
// ___________________________________________ 47 Manipulate Arrays With unshift Method

/*
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

Example:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

Add ["Paul", 35] to the beginning of the myArray variable using unshift().
 */
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35])
// ___________________________________________ 48 Shopping List

/*
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list.
 */
const myList = [["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],];
// ___________________________________________ 49 Write Reusable JavaScript with Functions

/*
In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName() {
  console.log("Hello World");
}
You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message Hello World on the dev console. All of the code between the curly braces will be executed every time the function is called.

Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function.

 */
function reusableFunction() {
    console.log('Hi World')
  }
  
  reusableFunction()
// ___________________________________________ 50 Passing Values to Functions with Arguments

/*
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.
 */
function functionWithArgs (param1, param2) {
    console.log(param1 + param2)
  }
  
  functionWithArgs(1,2)

// ___________________________________________ 51 Return a Value from a Function with Return

/*
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3.

Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
 */
function timesFive (num) {
  return num * 5
}
// ___________________________________________ 52 Global Scope and Functions

/*
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
 */
// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
// ___________________________________________ 53 Local Scope and Functions


/*
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.

The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.
 */
function myLocalScope() {
  // Only change code below this line
  const myVar = 'some'
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
// ___________________________________________ 54 Global vs. Local Scope in Functions

/*
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
The function myFun will return the string Head because the local version of the variable is present.

Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
 */
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = 'sweater'
  // Only change code above this line
  return outerWear;
}

myOutfit();
// ___________________________________________ 55 Understanding Undefined Value returned from a Function


/*
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
 */
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum += 5;
}
// Only change code above this line

addThree();
addFive();
// ___________________________________________ 56 Assignment with a Returned Value

/*
If you'll recall from our discussion about Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have defined a function sum which adds two numbers together.

ourSum = sum(5, 12);
Calling the sum function with the arguments of 5 and 12 produces a return value of 17. This return value is assigned to the ourSum variable.

Call the processArg function with an argument of 7 and assign its return value to the variable processed.
 */
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7)
// Only change code below this line

// ___________________________________________ 57 Stand in Line

/*
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
 */
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  const deletedElement = arr.shift()
  return deletedElement;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
// ___________________________________________ 58 Understanding Boolean Values

/*
Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.

Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

Modify the welcomeToBooleans function so that it returns true instead of false.


 */
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}
// ___________________________________________ 59 Use Conditional Logic with If Statements

/*
if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true) returns the string It was true, and test(false) returns the string It was false.

When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.

Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
 */
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return 'Yes, that was true'
  } else {
    return 'No, that was false'
  }


  // Only change code above this line

}
// ___________________________________________ 60 Comparison with the Equality Operator

/*
There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
 */
// Setup
function testEqual(val) {
  if (val == 12 ) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
// ___________________________________________ 61 Comparison with the Strict Equality Operator

/*
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.

Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
 */
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
// ___________________________________________ 62 Practice comparing different values

/*
In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3
typeof '3'
typeof 3 returns the string number, and typeof '3' returns the string string.

The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.
 */
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
// ___________________________________________ 63 Comparison with the Inequality Operator

/*
The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
 */
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
// ___________________________________________ 64 Comparison with the Strict Inequality Operator

/*
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
 */
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
// ___________________________________________ 65 Comparison with the Greater Than Operator

/*
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
Add the greater than operator to the indicated lines so that the return statements make sense.


 */
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
// ___________________________________________ 66 Comparison with the Greater Than Or Equal To Operator

/*
The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.

Examples

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
 */
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
// ___________________________________________ 67 Comparison with the Less Than Operator

/*
The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

Examples

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
Add the less than operator to the indicated lines so that the return statements make sense.
 */
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
// ___________________________________________ 68 Comparison with the Less Than Or Equal To Operator

/*
The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

Examples

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
Add the less than or equal to operator to the indicated lines so that the return statements make sense.
 */
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
// ___________________________________________ 69 Comparisons with the Logical And Operator

/*
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if.

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
This code will return Yes if num is greater than 5 and less than 10. The same logic can be written with the logical and operator.

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
 */
function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
      return "Yes";
  }
  
  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
// ___________________________________________ 70 Comparisons with the Logical Or Operator

/*
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints.

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
This code will return Yes if num is between 5 and 10 (5 and 10 included). The same logic can be written with the logical or operator.

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
 */
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
// ___________________________________________ 71 Introducing Else Statements

/*
When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
Combine the if statements into a single if/else statement.
 */
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
// ___________________________________________ 72 Introducing Else If Statements

/*
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
Convert the logic to use else if statements.
 */
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);
// ___________________________________________ 73 Logical Order in If Else Statements

/*
Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
And the second just switches the order of the statements:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
While these two functions look nearly identical if we pass a number to both we get different outputs.

foo(0)
bar(0)
foo(0) will return the string Less than one, and bar(0) will return the string Less than two.

Change the order of logic in the function so that it will return the correct statements in all cases.
 */
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
// ___________________________________________ 74 Chaining If Else Statements

/*
if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge
 */
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return 'Tiny'
  } else if (num < 10) {
    return 'Small'
  } else if (num < 15) {
    return 'Medium'
  } else if (num < 20) {
    return 'Large'
  } else {
    return 'Huge'
  }
  // Only change code above this line
}

testSize(0);
// ___________________________________________ 75 Golf Code

/*
In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
 */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
    if (strokes === 1) {
      return names[0]
    } else if (strokes <= par - 2) {
      return names[1]
    } else if (strokes === par - 1) {
      return names[2]
    } else if (strokes === par) {
      return names[3]
    } else if (strokes === par + 1) {
      return names[4]
    } else if (strokes === par + 2) {
      return names[5]
    } else if (strokes >= par + 3) {
      return names[6]
    }  
  // Only change code above this line
}

golfScore(5, 4);
// ___________________________________________ 76 Selecting from Many Options with Switch Statements

/*
If you need to match one value against many options, you can use a switch statement. A switch statement compares the value to the case statements which define various possible values. Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.

Here is an example of a switch statement:

switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
 */
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    answer = 'alpha'
    break;
    case 2:
    answer = 'beta'
    break;
    case 3:
    answer = 'gamma'
    break;
    case 4:
    answer = 'delta'
    break;
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);
// ___________________________________________ 77 Adding a Default Option in Switch Statements

/*
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff
*/
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'stuff';
      break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
// ___________________________________________ 78 Multiple Identical Options in Switch Statements

/*
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.

Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.
 */
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
// ___________________________________________ 79 Replacing If Else Chains with Switch

/*
If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
Change the chained if/else if statements into a switch statement.
*/
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 'bob':
    answer = 'Marley';
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
    break;
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);
// ___________________________________________ 80 Returning Boolean Values from Functions

/*
You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}
Fix the function isLess to remove the if/else statements.
*/
function isLess(a, b) {
  // Only change code below this line
  return a < b
  // Only change code above this line
}

isLess(10, 15);
// ___________________________________________

/*

*/

// ___________________________________________

/*

*/

// ___________________________________________

/*

*/

// ___________________________________________

/*

*/

// ___________________________________________

/*

*/

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */
// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */

// ___________________________________________

/*

 */