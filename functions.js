function add(a, b) {
    let result = a + b;
    return [result, `${result} +`, "+"];
}

function substract(a, b) {
    let result = a - b;
    return [result, `${result} -`, "-"];
}

function divide(numer, denom) {
    if(denom === 0) {return "ERROR";}
    let result = numer / denom;
    return [result, `${result} ÷`, "÷"];
}

function multiply(a, b) {
    let result = a * b;
    return [result, `${result} ✕`, "✕"];
}

function root(a, b) {
    if(a < 0 || b === 0) {return "ERROR";}
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

function addDigit(newDigit) {
    if (screenResult.textContent.length < MAX_DIGITS_ON_SCREEN) {
        screenResult.textContent += newDigit.toString();
        mainOperand = parseFloat(screenResult.textContent);
    }
}

function removeDigit(operand) {
    operand.textContent = operand.textContent.slice(0,-1);
    mainOperand = parseFloat(operand.textContent);
}

function printOperation(operation, prevOperand, mainOperand) {
    let operationText;
    switch (operation) {
        case root:
            operationText = `(${mainOperand})√${prevOperand} =`;
        break;
        case pow:
            operationText = `${prevOperand}^${mainOperand} =`;
        break;
        case divide:
            operationText = `${prevOperand} ÷ ${mainOperand} =`;
        break;
        case multiply:
            operationText = `${prevOperand} ✕ ${mainOperand} =`;
        break;
        case substract:
            operationText = `${prevOperand} - ${mainOperand} =`;
        break;
        case add:
            operationText = `${prevOperand} + ${mainOperand} =`;
        break;
        default:
            operationText = "ERROR";
    }

    return operationText;
}

function clearVariables() {
    mainOperand = undefined;
    prevOperand = undefined;
    operation = undefined;
}

function updateResult() {
    screenResult.textContent = mainOperand;
}

function equal() {
    screenLastOp.textContent = printOperation(operation, 
        prevOperand, mainOperand);
    mainOperand = operate(operation,prevOperand,mainOperand)[0];
    updateResult();
    clearVariables();
}