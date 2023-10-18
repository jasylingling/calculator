let firstNumber
let secondNumber
let globalOperator
let displayValue

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

function populate(userInput) {
    if (displayValue === '') {
        displayValue = ''
        document.querySelector("#display").innerText = '';
    }

    if (document.querySelector("#display").innerText === "0") {
        document.querySelector("#display").innerText = userInput;
    } else {
        document.querySelector("#display").innerText += userInput;
    }

    displayValue = document.querySelector("#display").innerText;
}

document.querySelectorAll(".digit").forEach(digit => {
    digit.addEventListener('click', e => {
        populate(digit.dataset.number);
    });
})

document.querySelectorAll(".operator").forEach(operator => {
    operator.addEventListener('click', e => {
        firstNumber = displayValue;
        displayValue = "";
        globalOperator = operator.dataset.operator;
        document.querySelector("#display").innerText = operator.dataset.operator;
    })
})

document.querySelector("#equal").addEventListener('click', e => {
    secondNumber = displayValue;
    console.log(firstNumber, globalOperator, secondNumber)
    displayValue = operate(firstNumber, globalOperator, secondNumber);
    console.log(displayValue);
    let output = displayValue.toString().substring(0, 8); // limit display space to 8 digits
    document.querySelector("#display").innerText = output;
})

document.querySelector("#clear").addEventListener('click', e => {
    displayValue = "";
    firstNumber = "";
    secondNumber = "";
    document.querySelector("#display").innerText = "0";
})