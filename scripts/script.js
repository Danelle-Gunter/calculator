
// event handlers for the buttons
//grab the buttons
const buttons = Array.from(document.querySelectorAll('.num'));
buttons.forEach(bttn => bttn.addEventListener('click', modifyDisplay));


function modifyDisplay(e) {
    const display = document.querySelector(".input-display");
    display.textContent += e.target.value; // only displays one click at a time    
}

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (n2 === 0) return 0;
    return n1 / n2;
}

function operate(n1, n2, operand) {
    switch (operand) {
        case '+':
            return add(n1, n2);
            break;
        case '-':
            return subtract(n1, n2);
            break;
        case '*':
            return multiply(n1, n2);
            break;
        case '/':
            return divide(n1, n2);
            break;
    }    
}
