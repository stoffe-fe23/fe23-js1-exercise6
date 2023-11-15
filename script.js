function addHeading(type, headingText) {
    const heading = document.createElement(type);
    heading.innerText = headingText;
    heading.classList.add(type == "h1" ? "heading-1" : "heading-2");
    document.body.appendChild(heading);
}

addHeading("h1", "Övning 6");

//////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "Arrow-funktioner (konsoll)");

const divideNumbers = (x, y) => x / y;
console.log("Division", divideNumbers(5, 10));

const getThirdElement = arr => arr[2];
const strings = ['en string', 'en annan string', 'en tredje string', 'en fjärde string'];
console.log("Third Element", getThirdElement(strings));

const celsiusToFahrenheit = degrees => (degrees * 1.8) + 32;
console.log("Fahrenheit", celsiusToFahrenheit(22));

const fahrenheitToCelsius = degrees => (degrees - 32) / 1.8;
console.log("Celsius", fahrenheitToCelsius(90));

const sumAll = (...arguments) => {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log("Sum All", sumAll(12, 42, 22, 18, 9, 2));


//////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "Matte med array (konsoll)");

function arrayMapNumbers(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
}

const numbers = [19, 221, 32, 76, 981, 2];
const numbers2 = [...numbers];
const double = (x) => x * 2;
const square = (x) => x * x;

console.log("ORIGINAL", numbers);
arrayMapNumbers(numbers, double);
console.log("DOUBLED", numbers);
arrayMapNumbers(numbers2, square);
console.log("SQUARED", numbers2);

//////////////////////////////////////////////////////////////////////////////////
addHeading("h2", "Highest & lowest (konsoll)");

const getHighest = (x, y) => x > y ? x : y;
const getLowest = (x, y) => x < y ? x : y;

function getArrayValue(array, callback) {
    let compare = array[0];
    for (let i = 0; i < array.length; i++) {
        compare = callback(array[i], compare);
    }
    return compare;
}

const cmpNumbers = [19, 221, 32, 76, 981, 2];
const highest = getArrayValue(cmpNumbers, getHighest);
const lowest = getArrayValue(cmpNumbers, getLowest);

console.log("COMPARE DATA", cmpNumbers);
console.log("LOWEST", lowest);
console.log("HIGHEST", highest);