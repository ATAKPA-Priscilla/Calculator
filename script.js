document.addEventListener('DOMContentLoaded',()=>{
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '0';
    let previousValue = null;
    let operator = null;
    let awaitingNextInput = true;
    buttons.forEach(button=>{
        button.addEventListener('click',(e)=>{
          const value = e.target.dataset.value;  
          if(e.target.classList.contains('number')){
            handleNumber(value);
          }
          else if(e.target.classList.contains('operator')){
            handleOperator(value);
          }
          else if(e.target.classList.contains('cancel') && value === 'C'){
            handleCancel(value);
          }
          else if(e.target.classList.contains('equals')){
            handleEquals();
          }
          else if(e.target.classList.contains('bs')){
            handleBS();
          }
        })
    })
    function handleCancel(){
        currentInput = '0';
        previousValue = null;
        operator = null;
        awaitingNextInput = true;
        updateDisplay();
    }
    function updateDisplay(){
        display.value = currentInput;
    }
    function handleNumber(value){
      if(value === '.' && currentInput.includes('.')){
        return;
      }
      if(awaitingNextInput === true && value === '.'){
        currentInput = '0.';
        awaitingNextInput = false;
      }
      else if(currentInput==='0' || awaitingNextInput=== true){
        currentInput = value;
        awaitingNextInput = false;
      }
      else{
        currentInput = currentInput + value;
      }
      updateDisplay();
    }
    function handleBS(){
      lastchar = currentInput.slice(0,-1);
      if(lastchar === ''){
        currentInput = '0';
      }
      else{
        currentInput = lastchar;
      }
      updateDisplay();
    }
    function handleOperator(value){
      const inputValue = parseFloat(currentInput);
      if (previousValue !== null && operator !== null){
        calculate();
      }
      else {
        previousValue = inputValue;
      }
      operator = value;
      awaitingNextInput = true;
    }
    function calculate(){
      if (operator === '+'){
        previousValue = previousValue + parseFloat(currentInput);
      }
      else if (operator === '-'){
        previousValue = previousValue - parseFloat(currentInput);
      }
      else if (operator === '*'){
        previousValue = previousValue * parseFloat(currentInput);
      }
      else if (operator === '/'){
        if (parseFloat(currentInput) === 0){
          alert("Error: Division by zero");
          return;
        }
        else{
        previousValue = previousValue / parseFloat(currentInput);
        }
      }
      currentInput = previousValue.toString();
    } 
    function handleEquals(){
      if(currentInput !== null){
        calculate();
        updateDisplay();
        awaitingNextInput = true;
        previousValue = null;
        operator = null;
      }
    }
});