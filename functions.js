function add(a, b) {
    return [a + b, `${a} + ${b} =`];
}

function substract(a, b) {
    return [a - b, `${a} - ${b} =`];
}

function divide(numer, denom) {
    if(denom === 0) return "ERROR";
    return [numer / denom, `${a} ÷ ${b} =`];
}

function multiply(a, b) {
    return [a * b, `${a} ✕ ${b} =`];
}

function root(a, b) {
    if(a < 0 || b === 0) return "ERROR";
    return [Math.pow(a, 1/b), `${b}√${a} =`];
}

function pow(a, b) {
    return [Math.pow(a, b), `${a}^${b} =`];
}

function operate(operation, a, b) {
    return operation(a, b);
}

function addDigit(operand, newDigit) {
    let extendedOperand = operand * 10;
    return extendedOperand + newDigit;
}