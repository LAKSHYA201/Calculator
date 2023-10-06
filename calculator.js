let display=document.querySelector(".display");
let displayValue=document.querySelector(".displayValue");
let button0=document.querySelector(".button0");
let button1=document.querySelector(".button1");
let button2=document.querySelector(".button2");
let button3=document.querySelector(".button3");
let button4=document.querySelector(".button4");
let button5=document.querySelector(".button5");
let button6=document.querySelector(".button6");
let button7=document.querySelector(".button7");
let button8=document.querySelector(".button8");
let button9=document.querySelector(".button9");
let AC      =    document.querySelector(".AC");
let calculate=document.querySelector(".calculate");
let divide=document.querySelector(".divide");
let multiply=document.querySelector(".multiply");
let minus=document.querySelector(".minus");
let plus=document.querySelector(".plus");
function forDivide(){
    displayValue.textContent=displayValue.textContent+"/";
}
function forMultiply(){
    displayValue.textContent=displayValue.textContent+"*";
}
function forMinus(){
    displayValue.textContent=displayValue.textContent+"-";
}
function forPlus(){
    displayValue.textContent=displayValue.textContent+"+";
}
function forButton0(){
if(displayValue.textContent==""){displayValue.textContent="";}
   else
   { displayValue.textContent=displayValue.textContent+"0";}
}
function forButton1(){
    displayValue.textContent=displayValue.textContent+"1";
}
function forButton2(){
displayValue.textContent=displayValue.textContent+"2";
}
function forButton3(){
    displayValue.textContent=displayValue.textContent+"3";
}
function forButton4(){
displayValue.textContent=displayValue.textContent+"4";
}
function forButton5(){
    displayValue.textContent=displayValue.textContent+"5";    
}
function forButton6(){
displayValue.textContent=displayValue.textContent+"6";
}
function forButton7(){
   displayValue.textContent=displayValue.textContent+"7";
}
function forButton8(){
displayValue.textContent=displayValue.textContent+"8";
}
function forButton9(){
   displayValue.textContent=displayValue.textContent+"9"; 
}
function forAC(){
    displayValue.textContent="";
}
function forCalculate(){
    let a= eval(displayValue.textContent);
    if(a==Infinity){
        alert("Value too large / Division by 0 is not defined ");
    }
    else{displayValue.textContent=a;}
    
}

button0.addEventListener("click",forButton0);
button1.addEventListener("click",forButton1);
button2.addEventListener("click",forButton2);
button3.addEventListener("click",forButton3);
button4.addEventListener("click",forButton4);
button5.addEventListener("click",forButton5);
button6.addEventListener("click",forButton6);
button7.addEventListener("click",forButton7);
button8.addEventListener("click",forButton8);
button9.addEventListener("click",forButton9);
AC.addEventListener("click",forAC);
plus.addEventListener("click",forPlus);
divide.addEventListener("click",forDivide);
multiply.addEventListener("click",forMultiply);
minus.addEventListener("click",forMinus);
calculate.addEventListener("click",forCalculate);

