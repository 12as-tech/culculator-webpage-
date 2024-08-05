let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteDigit() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}

function appendDigit(digit) {
    if (display.textContent === '0' && digit !== '.') {
        display.textContent = digit;
    } else {
        display.textContent += digit;
    }
}

function appendOperator(operator) {
    if (!['+', '-', '*', '/'].includes(display.textContent.slice(-1))) {
        display.textContent += operator;
    }
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (e) {
        display.textContent = 'Error';
    }
}
