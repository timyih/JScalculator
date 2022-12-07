let displayvalue = "";
let currNum = "";
let nextNum = "";
let op = "";

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
    return parseInt(num1) * parseInt(num2); 
}

function divide(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

function operate(operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2);
    }
    if (operator == '-') {
        return subtract(num1, num2);
    }
    if (operator == '*') {
        return multiply(num1, num2);
    }
    if (operator == '/') {
        return divide(num1, num2);
    }
}

function run() {
    const buttons = document.querySelectorAll('button.num');
    const inputField = document.getElementById('calcInput');
    buttons.forEach(button => button.addEventListener('click', () => {
        if (op == "") {
            currNum = currNum + button.textContent;
            displayvalue = currNum;
        } else {
            display = nextNum;
            nextNum = nextNum + button.textContent;
            displayvalue = nextNum;
        };
        inputField.innerHTML = displayvalue;
    }));

    const operations = document.querySelectorAll('button.op');
    operations.forEach(button => button.addEventListener('click', () => {
        op = button.textContent;
        if(nextNum != ""){
            result = operate(op, currNum, nextNum);
            displayvalue = result;
            currNum = result;
            nextNum = "";
        }
        inputField.innerHTML = displayvalue;
    }));

    const clearbtn = document.getElementById('clrbtn');
    clearbtn.addEventListener('click', () => {
        displayvalue = "";
        currNum = "";
        nextNum = "";
        inputField.innerHTML = displayvalue;
    });

    const eval = document.getElementById('eval');
    eval.addEventListener('click', () => {
        result = operate(op, currNum, nextNum);
        displayvalue = result;
        currNum = result;
        nextNum = "";
        op = "";
        inputField.innerHTML = displayvalue;
    });
}

run();
