/*let js = 'amazing';
40 + 8 + 23 - 8;
console.log("Jonas")
console.log(23)

let firstName = "Bobert";

console.log(firstName)
console.log(firstName)
console.log(firstName)
console.log(firstName)


let myFirstJob = 'Programmer'
let mySecondJob = 'Barista'
console.log(myFirstJob)
console.log(mySecondJob)


true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun)

// console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 'Jonas')
javascriptIsFun = 'YES!';
console.log(javascriptIsFun)

let year;
console.log(year)
year = 1990;
console.log(typeof year)

console.log(typeof null)


let age = 30;
age = 31;

const birthYear = 1990;
// birthYear = 1991;

// const job;

var job = 'programmer'
job = 'janitor'

lastName = 'Cherry'
console.log(lastName)

const now = 2037
const ageAaron = now - 1990;
const ageGilbert = now - 2011;
console.log(ageAaron, ageGilbert)

console.log(ageAaron * 2, ageGilbert / 10, 2 ** 3)

const firstName = 'AAron'
const lastName = 'Cherry'
console.log(firstName + ' ' + lastName)

let x = 10 + 5;
console.log(x)
x += 10
console.log(x)
let y = [0, 1, 2, 3, 4, 5]
for (i in y)
    console.log(i ** 2)
for (i in y) {
    i++;
    console.log(i);
}
let h = j = 10e90
console.log(h)
console.log(j)

const firstName = 'AAron'
const aaronNew = `I'm ${firstName}`
console.log(aaronNew)

const age = 14;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving liscense \n🤼')
} else {
    console.log(`Sarah needs to wait ${18 - age} years`)
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)


const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(inputYear + 18)

console.log(String(23), 23)

console.log('I am ' + 31 + ' years old')
console.log('10' - 2)
console.log('10' + 2)
console.log('10' - '2' + 9)


console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0;
if (money) {
    console.log("That's some good beef!")
} else {
    console.log("It is when you're broke.")
}

// let height;
// if (height) {
//     console.log("Height is defined.")
// } else {
//     console.log("Height is not defined.")
// }

try {
    console.log(height + 9)
} catch {
    console.log("Height is not defined.")
}

console.log('18' == 18)
console.log('18' === 18)

const favoriteNumber = prompt("What's your favorite number?")

console.log(`You like ${Number(favoriteNumber)}` + 2 + ` way too much!`)

const yourAge = prompt("What is your age?")
if (yourAge < 18) {
    console.log("You're still a kid, have some fun!")
} else if (yourAge < 31 && yourAge > 18) {
    console.log("You still have some time to figure it out.")
} else {
    console.log("You better get a move on!")
}


const day = prompt("What day is it?")
switch (day) {
    case 'monday':
    case 'Monday':
        console.log('Prepare for the week.')
        break;
    case 'tuesday':
    case 'Tuesday':
        console.log('Work on modeling.')
        break;
    case 'wednesday': case 'Wednesday':
        console.log('Work on slide deck.')
        break;
    case 'thursday': case 'Thursday':
        console.log('Work on Notebook and Reports.')
        break;
    case 'friday': case 'Friday':
        console.log('Present to the group.')
        console.log('Push all updates to GIT.')
        break;
    default:
        console.log("Not a valid day of the week.")
}
*/

const age = 31;
age >= 18 ? console.log("I like to drink wine.") :
    console.log("I like to drink water.")

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink)

console.log(`I like to drink ${drink}.`)