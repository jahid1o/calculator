function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

let operator, number1, number2

function operate(opt, n1, n2) {
    switch (opt) {
        case "+":
            return add(n1, n2)
        case "-":
            return subtract(n1, n2)
        case "×":
            return multiply(n1, n2)
        case "÷":
            return divide(n1, n2)
    }
}

const value = document.querySelector("#input")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const functions = document.querySelectorAll(".function")

console.log(value)

numbers.forEach(number => {
    number.addEventListener('click', event => {
        if (event.target.textContent == "." && value.value.includes(".")) {
            return
        }
        if (number1 == undefined) {
            number1 = event.target.textContent
            value.value = number1
        } else if (operator == undefined) {
            number1 += event.target.textContent
            value.value += event.target.textContent
        } else if (number2 == undefined) {
            number2 = event.target.textContent
            value.value += event.target.textContent
        } else {
            number2 += event.target.textContent
            value.value += event.target.textContent
        }
    })
})