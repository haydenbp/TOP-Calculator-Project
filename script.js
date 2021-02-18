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

const decimalButton = document.getElementById('decimal')

const delButton = document.getElementById('delete')

let operator = null;

let number = null;

let displayText = null

clearButton.addEventListener('click', ()=>{

    number = null

    numberTwo = null

    display.innerText = '';

})

delButton.addEventListener('click', ()=>{

    display.innerText = display.innerText.slice(0,-1)


})


numberButtons.forEach(item => item.addEventListener('click',()=>{

    display.innerText += item.innerText;
    //number = parseInt(display.innerText)
}

))

decimalButton.addEventListener('click', ()=>{

    if(display.innerText.includes('.') == false){

        display.innerText += decimalButton.innerText;
    }


}

)

operatorButtons.forEach(item => item.addEventListener('click',()=>{

    operator = item.innerText
    number = display.innerText
    display.innerText = ''
    console.log(number);
}

))

equalButton.addEventListener('click', ()=>{

    if(number !== null || numberTwo !== null){

    

    let numberTwo = display.innerText

    console.log(operator,number,numberTwo);

    if(operator == '/' && numberTwo != 0){

    display.innerText = operate(operator,parseFloat(number),parseFloat(numberTwo)).toFixed(2)//`${number} ${operator} ${numberTwo} = ${operate(operator,number,numberTwo)}`
    }
    else{
        alert('REEEE YOU CANT DIVIDE BY ZERO')
    }
    }
        
})



