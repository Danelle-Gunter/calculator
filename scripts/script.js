
// event handlers for the buttons
//grab the buttons
// const buttons = Array.from(document.querySelectorAll('.num'));
// buttons.forEach(bttn => bttn.addEventListener('click', modifyDisplay));

// const clearbtn = document.querySelector('.clear');
// clearbtn.addEventListener('click', clearDisplay);

// const operations = Array.from(document.querySelectorAll('.opr'));
// operations.forEach(opBtns => opBtns.addEventListener('click', calculate));

// grabbing all the buttons
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(bttn => bttn.addEventListener('click', (e) => {
    console.log(e.target.value);
}));

function modifyDisplay(e) {
    const display = document.querySelector(".input-display");
    display.textContent += e.target.value;    
}

function clearDisplay() {
    const display = document.querySelector(".input-display");
    display.textContent = '';
}

function calculate(e) {
    const firstNumber = document.querySelector(".input-display").textContent;
    const operation = e.target.value;
    clearDisplay();
    
    // secondNumber is not showing
    const secondNumber = document.querySelector(".input-display").textContent;
    clearDisplay();
    
    const equalbtn = document.querySelector('.equal');
    equalbtn.addEventListener('click', () => {
        const display = document.querySelector(".input-display");
        display.textContent = operate(firstNumber, secondNumber, operation);
        console.log(display);
        console.log(firstNumber);
        console.log(secondNumber);
    });
    
}

function operate(n1, n2, operand) {
    switch (operand) {
        case '+':
            return n1 + n2;
            break;
        case '-':
            return n1 - n2;
            break;
        case '*':
            return n1 * n2;
            break;
        case '/':
            if (n2 === 0) return 0;
            return ((n1 / n2).toFixed(5)) * 1; // Want to return numbers
            break;
    }    
}
