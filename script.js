// =========================
// DISPLAY
// =========================

const display = document.getElementById("display");


// =========================
// BUTTONS
// =========================

const buttons = document.querySelectorAll("button");


// =========================
// BUTTON CLICK
// =========================

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.textContent;


        // CLEAR
        if (value === "C") {

            display.value = "";

        }


        // BACKSPACE
        else if (value === "⌫") {

            display.value = display.value.slice(0, -1);

        }


        // PERCENTAGE
        else if (value === "%") {

            if (display.value !== "") {

                display.value = Number(display.value) / 100;

            }

        }


        // EQUALS
        else if (value === "=") {

            calculate();

        }


        // NUMBERS AND OPERATORS
        else {

            display.value += value;

        }

    });

});


// =========================
// CALCULATE
// =========================

function calculate() {

    if (display.value === "") {
        return;
    }

    try {

        display.value = eval(display.value);

    }

    catch {

        display.value = "Error";

    }

}


// =========================
// KEYBOARD
// =========================

document.addEventListener("keydown", function(event) {

    const key = event.key;


    // NUMBERS + OPERATORS

    if (
        !isNaN(key) ||
        key === "." ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ) {

        display.value += key;

    }


    // ENTER

    else if (key === "Enter") {

        calculate();

    }


    // BACKSPACE

    else if (key === "Backspace") {

        display.value = display.value.slice(0, -1);

    }


    // ESCAPE

    else if (key === "Escape") {

        display.value = "";

    }


    // PERCENTAGE

    else if (key === "%") {

        if (display.value !== "") {

            display.value = Number(display.value) / 100;

        }

    }

});