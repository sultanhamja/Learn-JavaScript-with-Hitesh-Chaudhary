

const lastName = new String('sultan') //2 



// console.log(lastname.length); //gives us length of the variable value
// console.log(lastName[0]);


// console.log(lastName.toUpperCase()); // .toUpperCase is a string method used to make all latter of string capital


// console.log(lastName.charAt(2)); // .charAt gives us the letter on that particular index of a string
// console.log(lastName.indexOf("t")); // .indexOf gives us the index of on that particular letter of a string

const fullName = new String("HamjaSultan")

const name = fullName.substring(0,5) // gives us  another string with given index value but remember that it does not takes the last index for eg 0,5 is HamjaS but it will return Hamja    

// console.log(name);

const familyName = fullName.slice(0,4) // you can use negative value in slice but not in sunstring

const sport = "  cricket   "
// console.log(sport.trim());  // .trim method removes the extraspaces (whitespace), tabs and newlines from begining and end of the string 

const url = "https://hamja.com/hamja%20sultan"  


console.log(url.replace('%20', '-')); // .replace is used for replacing the character in string  


console.log(url.includes('hamja')); //.includes returns boolean (true or false) on string or variable it is called

const games = "cricket-football-handball"

console.log(myGames.split(' '));


// console.log(games.split('-')); // .split is used to convert string into an array 
