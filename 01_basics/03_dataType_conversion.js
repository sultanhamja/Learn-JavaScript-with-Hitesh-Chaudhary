const someNumber = 123
const someString = "hamja123"


// console.log(someString);
// console.log(typeof someString);
// console.log(someNumber);
// console.log(typeof someNumber);

let someStringInNumber = Number(someString)
let someNumberInString = String(someNumber); //this will convert the string into number but it is imprtant to check what we are getting in return, because you will get type as number but the value will be NaN (not a number)

console.log(someNumberInString);
console.log(typeof someNumberInString);
console.log(someStringInNumber);
console.log(typeof someStringInNumber);

// converting null to number will return 0 as a value which is not what we want in some cases 
// converting undefined to number will return NaN (Not a Number)
// converting Boolean(true) to number will return 1
// converting Boolean(false) to number will return 0


let isLoggedIn = "hamja"

const booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true, 0 => false : while converting in boolean
//  "" => false : empty string will return false while converting in boolean
//  "hamja" => true : value in string will return true while converting in boolean




// there are more conversions that we can do but this is some normal conversion we saw