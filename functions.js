function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function divide(numer, denom) {
    if(denom === 0) return "ERROR";
    return numer / denom;
}

function multiply(a, b) {
    return a * b;
}

function root(a, b) {
    if(a < 0 || b === 0) return "ERROR";
    return Math.pow(a, 1/b);
}

function pow(a, b) {
    return Math.pow(a, b);
}

function operate(operation, a, b) {
    return operation(a, b);
}