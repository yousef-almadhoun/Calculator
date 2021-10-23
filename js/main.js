const displayInput = document.querySelector(".display-input");

const buttonsAction = document.querySelectorAll(".btn-control");

const buttonsNumber = document.querySelectorAll(".btn-number");

let previousValue = "";
let currentValue = "";
let action = "";

buttonsAction.forEach((btnAction) => {
  btnAction.addEventListener("click", function () {
    let btnValue = btnAction.innerText;

    if (btnValue != "=") {
        action = btnValue;
    }

    if (previousValue == "") {
      previousValue = displayInput.innerText;
    } else {
      currentValue = displayInput.innerText;
    }

    if (btnValue != "DEL") {
      displayInput.innerHTML = "0";
    }

    // let numPreviousValue = Number(previousValue);
    // let numCurrentValue = Number(currentValue);

    calculate();

    // switch (btnValue) {
    //   case "AC":
    //     previousValue = "";
    //     currentValue = "";
    //     break;
    //   case "DEL":
    //     let newNumber = displayInput.innerText.slice(0, -1);
    //     displayInput.innerHTML = newNumber;
    //     if (newNumber == "") {
    //       displayInput.innerHTML = "0";
    //     }
    //     break;
    //   case "÷":
    //     if (previousValue != "" && currentValue != "") {
    //       let result = numPreviousValue / numCurrentValue;
    //       displayInput.innerHTML = result;
    //       console.log(result);
    //     }
    //     break;
    //   case "×":
    //     if (previousValue != "" && currentValue != "") {
    //       let result = numPreviousValue * numCurrentValue;
    //       displayInput.innerHTML = result;
    //     }
    //     break;
    //   case "-":
    //     if (previousValue != "" && currentValue != "") {
    //       let result = numPreviousValue - numCurrentValue;
    //       displayInput.innerHTML = result;
    //     }
    //     break;
    //   case "+":
    //     if (previousValue != "" && currentValue != "") {
    //       let result = numPreviousValue + numCurrentValue;
    //       displayInput.innerHTML = result;
    //     }
    //     break;
    //   case "=":
    //     if (previousValue != "" && currentValue != "") {
    //       let result = numPreviousValue + numCurrentValue;
    //       displayInput.innerHTML = result;
    //       previousValue = result;
    //       currentValue = "";
    //     }
    //     break;
    // }
  });
});

buttonsNumber.forEach((btnNumber) => {
  btnNumber.addEventListener("click", function () {
    let currentValue = displayInput.innerText;
    let btnValue = btnNumber.innerText;

    if (currentValue == "0" || currentValue == "Infinity") {
      displayInput.innerHTML = "";
    }

    switch (btnValue) {
      case "0":
        if (currentValue.length > 1 && currentValue == 0) {
          return;
        }
        displayInput.innerHTML += btnValue;
        break;
      case "1":
        displayInput.innerHTML += btnValue;
        break;
      case "2":
        displayInput.innerHTML += btnValue;
        break;
      case "3":
        displayInput.innerHTML += btnValue;
        break;
      case "4":
        displayInput.innerHTML += btnValue;
        break;
      case "5":
        displayInput.innerHTML += btnValue;
        break;
      case "6":
        displayInput.innerHTML += btnValue;
        break;
      case "7":
        displayInput.innerHTML += btnValue;
        break;
      case "8":
        displayInput.innerHTML += btnValue;
        break;
      case "9":
        displayInput.innerHTML += btnValue;
        break;
      case ".":
        if (currentValue.length == 1 && currentValue == 0) {
          displayInput.innerHTML += "0";
        }
        displayInput.innerHTML += btnValue;
        break;
    }
  });
});

function calculate() {

    let numPreviousValue = Number(previousValue);
    let numCurrentValue = Number(currentValue);

    switch (action) {
        case "AC":
          previousValue = "";
          currentValue = "";
          break;
        case "DEL":
          let newNumber = displayInput.innerText.slice(0, -1);
          displayInput.innerHTML = newNumber;
          if (newNumber == "" || currentValue == "Infinity") {
            displayInput.innerHTML = "0";
          }
          break;
        case "÷":
          if (previousValue != "" && currentValue != "") {
            let result = numPreviousValue / numCurrentValue;
            displayInput.innerHTML = result;
            console.log(result);
          }
          break;
        case "×":
          if (previousValue != "" && currentValue != "") {
            let result = numPreviousValue * numCurrentValue;
            displayInput.innerHTML = result;
          }
          break;
        case "-":
          if (previousValue != "" && currentValue != "") {
            let result = numPreviousValue - numCurrentValue;
            displayInput.innerHTML = result;
          }
          break;
        case "+":
          if (previousValue != "" && currentValue != "") {
            let result = numPreviousValue + numCurrentValue;
            displayInput.innerHTML = result;
          }
          break;
      }
}

// const displayInput = document.querySelector('.display__input');

// const numberButtons = document.querySelectorAll('.calculator__key--number');
// const operationButtons = document.querySelectorAll('.calculator__key--operation');

// const allClearButton = document.querySelector('.calculator__key--all-clear');
// const backspaceButton = document.querySelector('.calculator__key--backspace');

// const equalsButton = document.querySelector('.calculator__key--equals');

// // Sub variables
// let currentValue = '0';
// let previousValue = '0';
// let defaultNumberValue = '0';
// let operationValue = '';
// let answerValue = '';
// let startOver = false;

// // Loop thorugh all (numberButtons)
// numberButtons.forEach(number => {
//   // When click on (number) button
//   number.addEventListener('click', function() {
//     // Call functions
//     appendNumber(number.innerText);
//     updateDisplay();
//   });
// });

// // Loop thorugh all (operationButtons)
// operationButtons.forEach(operation => {
//   // When click on (operation) button
//   operation.addEventListener('click', function() {
//     // Call functions
//     setOperation(operation.innerText);
//     updateDisplay();
//   });
// });

// // When click on (equalsButton) button
// equalsButton.addEventListener('click', function() {
//   // Call functions
//   calculator();
//   updateDisplay();
// });

// // When click on (allClearButton) button
// allClearButton.addEventListener('click', function() {
//   // Call functions
//   cleardisplay();
//   updateDisplay();
// });

// // When click on (backspaceButton) button
// backspaceButton.addEventListener('click', function() {
//   // Call functions
//   backspace();
//   updateDisplay();
// });

// // Append-number function
// function appendNumber(number) {
//   // If number is (.) and the current-value includes (.), stop the executing
//   if(number == '.' && currentValue.includes('.')) return;
//   // If current-value length is equal to 16, stop the executing
//   if(currentValue.length == 16) return;
//   // If current-value length is equal to 9, add class (display__output--fs) on (displayOutput)
//   if(currentValue.length == 9) displayOutput.classList.add('display__output--fs');

//   // Append the number
//   if(currentValue == '0') {
//     if(number == '.') {
//       currentValue += number;
//     }else {
//       currentValue = number;
//     }
//   }else {
//     currentValue += number;
//   }

//   // If start-over is true
//   if(startOver) {
//     // Call clear-display function and send for it the number
//     cleardisplay(number);
//     // Sat start-over to false
//     startOver = false;
//     // If number is (.) add '0.' inside  currentValue, else add the number inside currentValue
//     number == '.' ? currentValue = '0.' : currentValue = number
//     // Add class (display__output--fs) on display-output element
//     displayOutput.classList.remove('display__output--fs');
//   }

//   // Call
//   displayReader()
// };

// // Set-operation function
// function setOperation(operation) {
//   // If current-value is empty, stop the executing
//   if(currentValue == '') return;
//   // If previous-value is not default-number-value
//   //  and current-value is default-number-value, stop the executing
//   if(previousValue != defaultNumberValue && currentValue == defaultNumberValue) return;
//   // If previous-value is not default-number-value, call (calculator) function
//   if(previousValue != defaultNumberValue) calculator();

//   // Pass values
//   operationValue = operation;
//   previousValue = currentValue;
//   currentValue = defaultNumberValue;
//   startOver = false;

//   // Call
//   displayReader()
// };

// // Clear-display function
// function cleardisplay() {
//   // Clear everything
//   currentValue = defaultNumberValue;
//   previousValue = defaultNumberValue;
//   operationValue = '';
//   displayOutput.classList.remove('display__output--fs');
// };

// // Backpsace function
// function backspace() {
//   // If the current-value lenght is equal to 1
//   if(currentValue.length == 1) {
//     // Pass default-number-value to current-value
//     currentValue = defaultNumberValue;
//   }else { // Else
//     // Delete last characther and pass new value to current-value
//     currentValue = currentValue.toString().slice(0, -1);
//   }

//   // If the current-value lenght is less than or equal to 9
//   if(currentValue.length <= 9) {
//     // Remove (display__output--fs) class from display-output element
//     displayOutput.classList.remove('display__output--fs');
//   }

//   // If start-over is true
//   if(startOver == true) {
//     // Call clear-display function
//     cleardisplay()
//     // Remove (display__output--fs) class from display-output element
//     displayOutput.classList.remove('display__output--fs');
//   }
// };

// // Display-reader function
// function displayReader() {
//   if(previousValue != defaultNumberValue) {
//     // Update display-reader value
//     displayReaderDom.innerHTML = `display is ${previousValue} ${operationValue} ${currentValue == defaultNumberValue ? '' : currentValue}`;
//   }else {
//     // Set display-reader value
//     displayReaderDom.innerHTML = `display is ${currentValue} ${operationValue}`;
//   }
// };

// // Calculator function
// function calculator() {
//   // Convert string input to numbers
//   let currentNumber = parseFloat(currentValue);
//   let previousNumber = parseFloat(previousValue);

//   // Perform calculation
//   switch(operationValue) {
//     case '÷':
//       answerValue = previousNumber / currentNumber;
//       break;
//     case '×':
//       answerValue = previousNumber * currentNumber;
//       break;
//     case '-':
//       answerValue = previousNumber - currentNumber;
//       break;
//     case '+':
//       answerValue = previousNumber + currentNumber;
//       break;
//     default:
//       return;
//   };

//   // Pass values
//   currentValue = answerValue.toString();
//   previousValue = `${previousNumber} ${operationValue} ${currentNumber} =`;
//   // Empty operation-value
//   operationValue = '';
//   // Set start-over to true
//   startOver = true;

//   // Update display-reader value with the final result
//   displayReaderDom.innerText = `display is ${answerValue}`;
// };

// // Update-display function
// function updateDisplay() {
//   // Append the current-value inner the display-output
//   displayOutput.innerText = currentValue;

//   // Append the previous-value && operation-value inner the display-input
//   displayInput.innerText = `${previousValue} ${operationValue}`;
// };

// // :D
