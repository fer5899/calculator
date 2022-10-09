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

function sqrt(a) {
    if(a < 0) return "ERROR";
    return Math.sqrt(a);
}

function pow(a) {
    return a ** 2;
}