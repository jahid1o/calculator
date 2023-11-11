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

function addDot() {
    if (number2 == undefined) {
        if (operator == undefined) {
            if (number1 == undefined) {
                number1 = "."
                value.value = "."
            } else {
                if (!number1.includes(".")) {
                    number1 += "."
                    value.value += "."
                }
            }
        } else {
            number2 = "."
            value.value += "."
        }
    } else {
        if (!number2.includes(".")) {
            number2 += "."
            value.value += "."
        }
    }
}

function addZero() {
    if (number2 == undefined) {
        if (operator == undefined) {
            if (number1 != undefined && number1[0] != "0") {
                number1 += "0"
                value.value += "0"
            }
        }
    } else {
        if (number2[0] != "0") {
            number2 += "0"
            value.value += "0"
        }
    }
}

function addNumber(number) {
    if (number1 == undefined) {
        number1 = number
        value.value = number1
    } else {
        if (operator == undefined) {
            number1 += number
        } else if (number2 == undefined) {
            number2 = number
        } else {
            number2 += number
        }
        value.value += number
    }
}

const value = document.querySelector("#input")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const functions = document.querySelectorAll(".function")

numbers.forEach(number => {
    number.addEventListener('click', event => {
        if (event.target.textContent == ".") {
            addDot()
        } else if (event.target.textContent == "0" || event.target.textContent == "00") {
            if (number2 == undefined) {
                if (operator == undefined) {
                    if (number1 != undefined && number1[0] != "0") {
                        number1 += event.target.textContent
                        value.value += event.target.textContent
                    }
                }
            } else {
                if (number2[0] != "0") {
                    number2 += event.target.textContent
                    value.value += event.target.textContent
                }
            }
        } else {
            addNumber(event.target.textContent)
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
                value.value = ""
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

document.addEventListener("keydown", event => {
    console.log(event.key, event.code)
})