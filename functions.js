function add(a, b) {
    let result = a + b;
    return [result, `${result} +`, "+"];
}

function substract(a, b) {
    let result = a - b;
    return [result, `${result} -`, "-"];
}

function divide(numer, denom) {
    if(denom === 0) return "ERROR";
    let result = numer / denom;
    return [result, `${result} ÷`, "÷"];
}

function multiply(a, b) {
    let result = a * b;
    return [result, `${result} ✕`, "✕"];
}

function root(a, b) {
    if(a < 0 || b === 0) return "ERROR";
    let result = Math.pow(a, 1/b);
    return [result, `()√${result}`, "√"];
}

function pow(a, b) {
    let result = Math.pow(a, b);
    return [result, `${result}^()`, "^"];
}

function operate(operation, prevOperand, mainOperand) {
    return operation(prevOperand, mainOperand);
}

function addDigit(operand, newDigit) {
    let extendedOperand = operand * 10;
    return extendedOperand + newDigit;
}

function removeDigit(operand) {
    return Math.trunc(operand/10);
}