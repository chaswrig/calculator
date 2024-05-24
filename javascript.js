//Number keys update the display number
const numberKeys = document.querySelectorAll(".numberkey");
numberKeys.forEach(key => {
    key.addEventListener("click", (e) => {
        displayNum = displayNum + key.textContent.toString().valueOf();
        display.textContent = displayNum;
    });
});

//Function keys update firstNum and clear the display to start second num
const functionKeys = document.querySelectorAll(".functionkey");
functionKeys.forEach(key => {
    key.addEventListener("click", (e) =>{
        if (key.id === 'result') {
            getResults(firstNum);
        } else if (key.id === 'backspace') {
            display.textContent = 0;
            displayNum = '';
            firstNum = 0;
            secondNum = 0;
        } else {
            operand = key.id;
            firstNum = displayNum.valueOf();
            displayNum = ''
        }  
    });
});

//Set up display
const display = document.querySelector("#display");
display.textContent = 0;

//Operands
let displayNum = '';
let firstNum = 0;
let secondNum = 0;
let operand = '';
let result = 0;


//TODO: Math functions
function add(firstNum, secondNum){
    return Number(firstNum) + Number(secondNum);
};

function subtract(firstNum, secondNum){
    return Number(firstNum) - Number(secondNum);
};

function multiply(firstNum, secondNum){
    return Number(firstNum) * Number(secondNum);
};

function divide(firstNum, secondNum){
    if(Number(secondNum) === 0){
        alert("Cannot divide by zero.")
        return 0;
    } else {
        return Number(firstNum) / Number(secondNum);
    }
};

//TODO: Backspace function
function backspace(){

};

//Result function
function getResults(firstNum){
    secondNum = display.textContent.toString().valueOf();
    switch (operand) {
        case 'division':
            result = divide(firstNum,secondNum);
            break;
        case 'multiplication':
            result = multiply(firstNum,secondNum);
            break;
        case 'subraction':
            result = subtract(firstNum,secondNum);
            break;
        case 'addition':
            result = add(firstNum,secondNum);
            break;
        default:
            result = 12345;
    }
    display.textContent = result.toString();
    displayNum = '';
    firstNum = result; //Can change this to accept multiple operations, I think
    secondNum = 0;
    operand = '';
};