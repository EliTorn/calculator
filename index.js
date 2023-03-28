const buttons = document.querySelectorAll("button");
let num1 = "";
let num1Before = "";
let num2 = "";
let num2Before = "";
let bool = true;
let symbol = "";
Calculator();

function Calculator() {
    for (const b of buttons) {
        b.addEventListener("click", function () {
            getValue(b);
        })

    }
}


function calc() {
    num1 = Number(num1);
    num2 = Number(num2);
    if (symbol === "+") {
        return num1 + num2;
    } else if (symbol === "*") {
        return num1 * num2;
    }
    if (symbol === "-") {
        return num1 - num2;
    } else if (symbol === "/") {
        return num1 / num2;
    }
}

function clear() {
    num1 = "";
    num2 = "";
    bool = true;
}

function getValue(b) {
    let value = b.textContent;
    if (value === '*' || value === '-' || value === '+' || value === '/') {
        symbol = value;
        document.getElementById("input").value = "";
        bool = false;
    } else if (value === "c") {
        clear();
        document.getElementById("input").value = "";
    } else if (value === '=') {
        document.getElementById("input").value = calc(num1, num2, symbol);
        clear();
    } else {
        printOnScreen(bool, value, b);
    }
}


function printOnScreen(bool, value, b) {
    if (bool) {
        if (value === 'b') {
            num1 = num1Before;
            document.getElementById("input").value = num1Before;
        } else {
            document.getElementById("input").value = num1 + value;
            num1Before = num1;
            num1 += b.textContent;
        }

    } else {
        if (value === 'b') {
            document.getElementById("input").value = num2Before;
            num2 = num2Before;
        } else {
            document.getElementById("input").value = num2 + value;
            num2Before = num2;
            num2 += b.textContent;
        }
    }
}