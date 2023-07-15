let display = document.querySelector(".display");


function digitButt(number){
    display.value += number
}

function nonDigit(symb){
    display.value += symb;
}

function clearDisplay(){
    display.value = ""
}

function deleteLast(){
    display.value = display.value.slice(0,display.value.length-1)
}

function equals(){
    input = display.value
    if (input.indexOf("÷") != -1){
        input = input.replace("÷","/")
    } else if (input.indexOf("×") != -1){
        input = input.replace("×","*")
    }
    display.value = eval(input)
}

window.addEventListener('keydown', keyDown);

function keyDown(e){
    switch(e.code){
        case 'Enter':
            equals()
            break;
    }
}

