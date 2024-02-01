  function updateDisplay(e) {
   document.getElementById("display").textContent += e.target.textContent;
 }
 
 function setupButtons(){
 var select = document.querySelectorAll(".numKey");

 select.forEach(select =>
   select.addEventListener('click', e => updateDisplay(e)));
 select = document.querySelectorAll("#opKey");
 select.forEach(select =>
   select.addEventListener("click", function(e) {
     document.querySelector(".display").textContent += e.target.textContent;
     operation = e.target.textContent;
   }))
 select = document.querySelector(".equal");
 select.addEventListener("click", function() {
   operate(document.querySelector(".display").textContent)
 })
 }
 
 function sub(num) {
   var result = num.split("-");
   result = Number(num[0])-Number(num[1]);
   return result;

 }

 function add(num) {

   var result = num.split("+");
   console.log(result);
   result=Number(result[0])+Number(result[1]);
   return result;

 }

 function divide(num) {
   var result = num.split("/");
   if (Number(num[1])==0){
   	return "divide by 0";
   }
   result=Number(num[0])/Number(num[1]);
   return result;
 }

 function mult(num) {
   var result = num.split("x");
   result=Number(result[0])*Number(result[1]);
   return result;
 }

 function operate(data) {
 
 var result=0;
 var terms=0;
  var validData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
   data = data.replace(/\s/g, '');
   
  console.log(`data: ${data}`)
 	//12x34
  var opIndex=-1;
  var operation="";
  
  if (data.indexOf("x")!=-1){
   opIndex=data.indexOf("x");
   operation="x";
  }
   if (data.indexOf("/")<opIndex && data.indexOf("/")!=-1){
   		opIndex=data.indexOf("/");
      operation="/";
   }
    if (data.indexOf("+")!=-1 && opIndex==-1){
     opIndex=data.indexOf("+");
    operation="+"
    if (data.indexOf("-")<opIndex && data.indexOf("-") != -1){
     opIndex=data.indexOf("-");
    operation="-";
   } 
   }
   
   
   
  //get first
  //12x34
  var firstIndex;
  var lastIndex;
  console.log(`op index: ${opIndex}`);
   for(var firstIndex=opIndex-1; data[firstIndex] in validData && firstIndex>0; firstIndex--){}
  console.log(`first index: ${firstIndex}`);
 for(var lastIndex=opIndex+1; lastIndex<data.length && data[lastIndex] in validData; lastIndex++){
  }
  lastIndex--;
  console.log(`last index: ${lastIndex}`);
  if (lastIndex==data.length){
  var segment=data.slice(firstIndex);
  }else{
  var segment=data.slice(firstIndex, lastIndex+1)
  }
  //
  
  console.log(`calculating: ${segment}`)
  switch(operation){
  	case "x":
    	data=data.replace(segment, mult(segment));
      break;
  case "/":
  	data=data.replace(segment, divide(segment));
    break;
  case "+":
  	data=data.replace(segment, add(segment));
    break;
  case "-":
  	data=data.replace(segment, sub(segment));
    break;
  default:
  
   document.querySelector(".display").textContent = data;
  	return;
  }
  operate(data);
  
         
 
 }

 function main() {
setupButtons();
 }
 main();
