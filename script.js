function add(num1,num2){

    return num1 + num2


}

function subtract(num1,num2){

    return num1 - num2


}

function multiply(num1,num2){

    return num1 * num2
}

function divide(num1,num2){

    return num1 / num2
}

function operate(operator,num1,num2){

    if(operator == '+'){

        return add(num1,num2)

    }

    else if(operator == '-'){

         return subtract(num1,num2)

    }

    else if(operator == '*'){

         return multiply(num1,num2)

    }

    else if(operator == '/'){

         return divide(num1,num2)

    }



}

const clearButton = document.getElementById('clear');

const numberButtons = document.querySelectorAll('.number');

const equalButton = document.getElementById('equals');

const display = document.getElementById('display');

const operatorButtons = document.querySelectorAll('.operator');

let operator = null;

let number = null;

clearButton.addEventListener('click', ()=>{

    display.innerText = '';

})



numberButtons.forEach(item => item.addEventListener('click',()=>{

    display.innerText += item.innerText;
    //number = parseInt(display.innerText)
    console.log(number);
}

))

operatorButtons.forEach(item => item.addEventListener('click',()=>{

    operator = item.innerText
    number = parseInt(display.innerText)
    display.innerText = ''
    console.log(operator);
}

))

equalButton.addEventListener('click', ()=>{

    let numberTwo = parseInt(display.innerText)

    console.log(operator,number,numberTwo);

    display.innerText = `${number} ${operator} ${numberTwo} = ${operate(operator,number,numberTwo)}`
    console.log(display.innerText);

})



console.log(operatorButtons)
