// Problem 1
// let country = 'United States'
// let continent = 'North America'
// let population = 3.295e8

// console.log(country)
// console.log(continent)
// console.log(population)

// Problem 2
// const isIsland = false;
// let language;
// console.log(isIsland)
// console.log(population)
// console.log(country)
// console.log(language)

// Problem 3
// language = 'American'
// isIsland = true

// Challenge 1

//Test data 1
// const markMass = 92;
// const markHeight = 1.95;
// const johnMass = 92;
// const johnHeight = 1.95;

// function calculate_bmi(x, y) {
//     return x / y ** 2
// }
// const markBMI = calculate_bmi(markMass, markHeight)
// const johnBMI = calculate_bmi(johnMass, johnHeight)

// if (markBMI > johnBMI) {
//     console.log("Mark's BMI is higher.")
// } else if (markBMI < johnBMI) {
//     console.log("John's BMI is higher.")
// } else {
//     console.log("They have the same BMI.")
// }
// console.log(calculate_bmi(markMass, markHeight))

// function who_won(x, y) {
//     console.log(`Dolphins average score: ${x}`)
//     console.log(`Koalas average score: ${y}`)
//     if (x > y && x >= 100) {
//         console.log("Dolphins win the house cup.")
//     } else if (x < y && y >= 100) {
//         console.log("Koalas win the house cup.")
//     } else if (x == y && y >= 100 && x >= 100) {
//         console.log("It was a tie and no one gets shit.")
//     } else {
//         console.log("No one did well enough to get shit.")
//     }
// }
// //Data 1
// let dolphinsAverageScore = (96 + 108 + 89) / 3;
// let koalasAverageScore = (88 + 91 + 110) / 3;
// who_won(dolphinsAverageScore, koalasAverageScore)
// console.log('\n')
// //Data 2
// dolphinsAverageScore = (97 + 112 + 101) / 3;
// koalasAverageScore = (109 + 95 + 123) / 3;
// who_won(dolphinsAverageScore, koalasAverageScore)
// console.log('\n')
// //Data 3
// dolphinsAverageScore = (97 + 112 + 101) / 3;
// koalasAverageScore = (97 + 112 + 101) / 3;
// who_won(dolphinsAverageScore, koalasAverageScore)
// let array = [90, 101, 102]
// for (i in array) {
//     console.log(array[i])
// }
// function take_mean(x) {
//     let average = 0;
//     for (i in x) {
//         average += x[i] / length(x)
//     }
// }
// console.log(take_mean(array))

const bill = prompt("How much is the bill?")
const tip = (bill < 50) || (bill > 300) ? bill * 0.2 : bill * 0.15
const total = Number(bill) + tip
console.log(`The bill is ${bill} dollhairs.`)
console.log(`The tip should be ${tip} dollhairs.`)
console.log(`The total should be ${total} dollhairs.`)