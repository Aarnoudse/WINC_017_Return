// Checking if a number is big

/*
const checks_number = function (number1) {
    const abc = number1
    if (abc > 100) {
        return "true"
    }
    return "false"
}

const input = checks_number(101)
console.log(input);
*/

// Bouncer at a club

/*
const brendaBot = function (max, _current, age) {
    if (max < _current) {
        return "it's too busy now, come back later";
    }
    else if (age < 18) {
        return "this is a club for adults";
    }
    else return "come in"
}


const PersonA = brendaBot(300, 25555, 14)
console.log(PersonA);

*/

//Calculating the average

const gem = function (number1, number2, number3, number4, number5) {
    console.log(Math.round((number1 + number2 + number3 + number4 + number5) / 5))
}

const reeks1 = gem(300, 25555, 14, 55, 55)
console.log(reeks1);