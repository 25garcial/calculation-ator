

var num1=0, num2=0;
function sub(num1, num2){
    num1=Number(num1)
    num2=Number(num2)
return num1 - num2;
}
function add(num1, num2){
    num1=Number(num1)
    num2=Number(num2)
return num1+num2;
}
function divide(num1, num2){
    num1=Number(num1)
    num2=Number(num2)
return num1 / num2;
}
function mult(num1, num2){
    num1=Number(num1)
    num2=Number(num2)
return num1 * num2;
}




function operate(data){
    var haveNum1=false;
    data=data.replace(/\s/g,'')
    
    var validData=[1,2,3,4,5,6,7,8,9,0]
    var num1=0;
    var leftOff=0;
    var num2=0;


    for (var i=0;i<data.length; i++){
        
        if (!haveNum1 && Number(data[i]) in validData){
        num1=data.slice(0,i+1)

        
    }else if (data[i]=="+" || data[i]=="-" || data[i]=="x" || data[i]=="/"){
        var operator=data[i];
        leftOff=i;
      haveNum1=true
}
else if (haveNum1 && Number(data[i]) in validData){
    num2 =data.slice(leftOff+1,i+1)

    
}}



console.log(num1)
    console.log(operator)
    console.log(num2)
    switch(operator){
        case "+":
            var result= add(num1, num2);
            break;
        case "-":
            var result= sub(num1, num2);
            break;
        case "x":
            var result= mult(num1, num2);
            break;
        case "/":
            if (num2=="0"){
                result="That is not possible."
            }else{
            var result= divide(num1, num2);
        }
            break;
    }
    document.querySelector(".display").textContent=result;
}

function updateDisplay(e){
    
      
    
    document.getElementById("display").textContent+=e.target.textContent;
}
var select=document.querySelectorAll(".numKey");

select.forEach(select =>
    select.addEventListener('click', e => updateDisplay(e)));
select=document.querySelectorAll(".opKey");
select.forEach(select => 
    select.addEventListener("click", function(e){document.querySelector(".display").textContent+=e.target.textContent; operation=e.target.textContent;}))
select=document.querySelector(".equal");
select.addEventListener("click",function(){operate(document.querySelector(".display").textContent)})
console.log(document.querySelectorAll(".opKey")[0].textContent)