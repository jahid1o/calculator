let operator, number1, number2

function operate(opt, n1, n2) {
    n1 = Number(n1)
    n2 = Number(n2)
    let result
    switch (opt) {
        case "+":
            result = n1 + n2
            break
        case "-":
            result = n1 - n2
            break
        case "×":
            result = n1 * n2
            break
        case "÷":
            result = n1 / n2
            break
        case "%":
            result = n1 % n2
            break
    }
    return (result % 1 != 0) ? result.toFixed(4) : result
}

function del() {
    if (number2 == undefined) {
        if (operator == undefined) {
            number1 = (number1 != undefined && number1.length > 1) ? number1.slice(0, number1.length - 1) : undefined
            value.value = value.value.slice(0, value.value.length - 1)
        } else {
            operator = undefined
            value.value = value.value.slice(0, value.value.length - 1)
        }
    } else {
        number2 = (number2.length > 1) ? number2.slice(0, number2.length - 1) : undefined
        value.value = value.value.slice(0, value.value.length - 1)
    }
}

const value = document.querySelector("#input")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const functions = document.querySelectorAll(".function")

numbers.forEach(number => {
    number.addEventListener('click', event => {
        if (event.target.textContent == "." && value.value.includes(".")) {
            return
        }
        if (number1 == undefined) {
            number1 = event.target.textContent
            value.value = number1
        } else {
            if (operator == undefined) {
                number1 += event.target.textContent
            } else if (number2 == undefined) {
                number2 = event.target.textContent
            } else {
                number2 += event.target.textContent
            }
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
                break
            case "DEL":
                del()
                break
        }
    })
})