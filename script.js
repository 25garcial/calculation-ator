function main() {
  var lastKeyPressed = "x";
  var expression="";
  
  function updateDisplay(value) {
    document.getElementById("display").textContent += value;
  }

  function setupButtons() {
    var numElements = document.querySelectorAll(".numKey");
		let numKeys=[0,1,2,3,4,5,6,7,8,9];
    document.querySelector(".clear").addEventListener("click",()=>{
    	document.querySelector('.display').textContent='';
      expression="";
    })
    document.body.addEventListener("keydown", function(e){
      	let char=e.key;
      	if (numKeys.map((val)=>{return String(val)}).includes(char)){
        expression+=char;
        updateDisplay(char);
        lastKeyPressed=char;
        }
        if (["+","-","/","x"].includes(char)&& !["+","-","/","x"].includes(lastKeyPressed)){
   expression+=char;
        updateDisplay(char);
        lastKeyPressed=char;
        }
        if (!["=","Enter"].includes(lastKeyPressed) && ["=","Enter"].includes(char)){
        	operate(expression);
          if (["x","-","+","/"].includes(lastKeyPressed)){
          	expression[-1]="";
            lastKeyPressed="";
            
          }
        }
      });
      
    numKeys.forEach(num =>{
      numElements[num].addEventListener('click', e => {lastKeyPressed = num; expression+=num+1;updateDisplay(num+1)})
      
      });
    var opkey = document.querySelectorAll(".opKey");
    
    opkey.forEach(opkey =>
      opkey.addEventListener("click", function(e) {
        if (!(["+", "-", "/", "x"].includes(lastKeyPressed))) {
          lastKeyPressed = e.target.textContent;
					expression+=e.target.textContent;
          updateDisplay(e.target.textContent);
        }
      }))
    var equalkey = document.querySelector(".equal");
    equalkey.addEventListener("click", function() {
      operate(expression)
    })
  }

  function sub(num) {
    var num = num.split("-");
    let result = Number(num[0]) - Number(num[1]);
    return result;

  }

  function add(num) {
    var result = num.split("+");
     result = Number(result[0]) + Number(result[1]);
    return result;

  }

  function divide(num) {
    var num = num.split("/");
    if (Number(num[1]) == 0) {
      return 0;
    }
    let result = Number(num[0]) / Number(num[1]);
    return result;
  }

  function mult(num) {
    var result = num.split("x");
    result = Number(result[0]) * Number(result[1]);
    return result;
  }

  function operate(data) {
    let result = 0;
    let terms = 0;
    var validData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    data = data.replace(/\s/g, '');

    console.log(`data: ${data}`)
    //12x34
    let opIndex = -1;
    let operation = "";
    opIndex = Math.min(...[data.indexOf("x"), data.indexOf("/")].filter((num) => {
      return num != -1
    }))
    if (opIndex == -1 || opIndex==Infinity) {
      opIndex = Math.min(...[data.indexOf("+"), data.indexOf("-")].filter((num) => {
        return num != -1
      }));
    }

  //get first
  //12x34
  var firstIndex;
  var lastIndex;
  console.log(`op index: ${opIndex}`);
  for (var firstIndex = opIndex - 1; validData.includes(data[firstIndex]) && firstIndex >=
    0; firstIndex--) {}
firstIndex++
  console.log(`first index: ${firstIndex}`);
  for (var lastIndex = opIndex+1; lastIndex < data.length && validData.includes(data[lastIndex]); lastIndex++) {}
  // lastIndex--;
  console.log(`last index: ${lastIndex}`);
  if (lastIndex == data.length) {
    var segment = data.slice(firstIndex);
  } else {
    var segment = data.slice(firstIndex, lastIndex + 1)
  }
  //

  console.log(`calculating: ${segment}`)
  switch (data[opIndex]) {
    case "x":
      data = data.replace(segment, mult(segment));
      break;
    case "/":
      data = data.replace(segment, divide(segment));
      break;
    case "+":
      data = data.replace(segment, add(segment));
      break;
    case "-":
      data = data.replace(segment, sub(segment));
      break;
    default:
      document.querySelector(".display").textContent = data;
      return data;
  }
  expression=operate(data);
  
}

setupButtons();
}
main();
