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

function remainder(num1, num2) {
    return num1 % num2
}

let operator, number1, number2

function operate(opt, n1, n2) {
    n1 = Number(n1)
    n2 = Number(n2)
    switch (opt) {
        case "+":
            return add(n1, n2)
        case "-":
            return subtract(n1, n2)
        case "×":
            return multiply(n1, n2)
        case "÷":
            return divide(n1, n2)
        case "%":
            return remainder(n1, n2)
    }
}

function del() {
    //
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

operators.forEach(opt => {
    opt.addEventListener("click", event => {
        if (number2 != undefined) {
            number1 = operate(operator, number1, number2)
            number2 = undefined
            operator = event.target.textContent
            value.value = number1 + operator
        } else if (number1 != undefined) {
            operator = event.target.textContent
            value.value = number1 + operator
        }
    })
})

functions.forEach(func => {
    func.addEventListener("click", event => {
        switch (event.target.textContent) {
            case "AC":
                number1 = number2 = operator = undefined
                value.value = "0"
                break
            case "=":
                if (number2 != undefined) {
                    number1 = operate(operator, number1, number2)
                    number2 = operator = undefined
                    value.value = number1
                }
        }
    })
})