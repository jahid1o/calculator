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