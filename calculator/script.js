
let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let num3 = document.querySelector('.num3')
let num4 = document.querySelector('.num4')
let num5 = document.querySelector('.num5')
let num6 = document.querySelector('.num6')

let num7 = document.querySelector('.num7')
let num8 = document.querySelector('.num8')

let num9 = document.querySelector('.num9')
let zero = document.querySelector('.zero')
let plus = document.querySelector('.plus')
let equal = document.querySelector('.equal')
let dot = document.querySelector('.dot')
let display = document.querySelector('.display')
let multiply = document.querySelector('.multiply')
let divide = document.querySelector('.divide')
let minus = document.querySelector('.minus')
let ACC = document.querySelector('.AC')
let percent = document.querySelector('.percent')



 
 num1.addEventListener('click', number1)

 function number1(){
      
     display.value+= '1';
    // input.value = e.targe.value 
 }

 num2.addEventListener('click', number2)

function number2(){
     
    display.value+='2'
}

num3.addEventListener('click', number3)

function number3(){
     
    display.value+='3'
}

num4.addEventListener('click', number4)

function number4(){
     
    display.value+='4'
}

num5.addEventListener('click', number5)

function number5(){
     
    display.value+='5'
}

num6.addEventListener('click', number6)

function number6(){
     
    display.value+='6'
}

num7.addEventListener('click', number7)

function number7(){
     
    display.value+='7'
}

num8.addEventListener('click', number8)

function number8(){
     
    display.value+='8'
}

num9.addEventListener('click', number9)

function number9(){
     
    display.value+='9'
}
zero.addEventListener('click', zeroval)

function zeroval(){
     
    display.value+='0';
}


plus.addEventListener('click', pluss)

function pluss(){
     
    display.value += '+'
    

}

minus.addEventListener('click', minuss)

function minuss(){
     
    display.value += '-'
    

}
multiply.addEventListener('click', multiplyy)

function multiplyy(){
     
    display.value += '*'
    

}

divide.addEventListener('click', division)

function division(){
     
    display.value += '/'
    

}

dot.addEventListener('click', doted)

function doted(){
     
    display.value += '.'
    

}

percent.addEventListener('click', percentage)

function percentage(){
     
    display.value+= '%';
    

}

ACC.addEventListener('click', clear)

function clear(){
     
    display.value= ' ';
    

}

equal.addEventListener('click', equalTo);


function equalTo(){
      
    if(display.value==' '){
        alert("please enter the value")
    }
    else{
    display.value = eval(display.value)
    }

 }

