function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendValue(value) {
    const currentValue = document.getElementById("display").value;

    if (!currentValue && value === "00") {
        return;
    } else {
        document.getElementById("display").value += value;
    }
}

function calculate() {
    try {
        const currentValue = document.getElementById("display").value;

        if (!currentValue) return;

        const expression = document.getElementById("display").value;
        const resolvedExpression = expression.replace(/[÷×]/g, (match) =>
            match === "×" ? "*" : "/"
        );
        document.getElementById("display").value = eval(resolvedExpression);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function deleteValue() {
    const val = document.getElementById("display").value;
    const valArr = val.split("");
    const lastVal = valArr.pop();

    document.getElementById("display").value = valArr.join("");
}
