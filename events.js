numberButtons.forEach(button => {
    button.addEventListener("click", e => {
        if(typeof operation === "undefined") screenLastOp.textContent = "";
        mainOperand = addDigit(e.target.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", e => {
        let prevOperation = operation;
        let operationResult = [];
        let result;
        let lastOperationText;

        if(typeof mainOperand === "undefined") {mainOperand = 0;}
        
        if(typeof prevOperation !== "undefined") {
            operationResult = operate(prevOperation, prevOperand, mainOperand);
            mainOperand = operationResult[0];
            prevOperand = operationResult[0];
        } 

        switch (e.target.textContent) {
            case "ʸ√x":
                operation = root;
                lastOperationText = `()√${mainOperand}`;
            break;

            case "xʸ":
                operation = pow;
                lastOperationText = `${mainOperand} ^`;
            break;

            case "÷":
                operation = divide;
                lastOperationText = `${mainOperand} ÷`;
            break;

            case "✕":
                operation = multiply;
                lastOperationText = `${mainOperand} ✕`;
            break;

            case "-":
                operation = substract;
                lastOperationText = `${mainOperand} -`;
            break;

            case "+":
                operation = add;
                lastOperationText = `${mainOperand} +`;
            break;
        }
        
        if(typeof prevOperation === "undefined") {
            result = lastOperationText;
            prevOperand = mainOperand;
        }

        mainOperand = undefined;

        screenLastOp.textContent = lastOperationText;
        updateResult();
            
    });
});

acButton.addEventListener("click", () => {
    clearVariables();
    screenLastOp.textContent = "";
    updateResult();
});

delButton.addEventListener("click", () => {
    mainOperand = removeDigit(mainOperand);
    updateResult();
});

equalButton.addEventListener("click", () => {
    if (typeof operation === "undefined" || typeof prevOperand === "undefined"
        || typeof mainOperand === "undefined") return;
    screenLastOp.textContent = printOperation(operation, 
        prevOperand, mainOperand);
    mainOperand = operate(operation,prevOperand,mainOperand)[0];
    updateResult();
    clearVariables();
});

dotButton.addEventListener("click", () => {
    if (!screenResult.textContent.includes(".")) {
        screenResult.textContent += ".";
    }
});

negButton.addEventListener("click", () => {
    mainOperand = -mainOperand;
    updateResult();
});


