numberButtons.forEach(button => {
    button.addEventListener("click", e => {
        if(typeof operation === "undefined") screenLastOp.textContent = "";
        if(typeof mainOperand === "undefined") screenResult.textContent = "";
        addDigit(e.target.textContent);
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
            if(operationResult[0] === "E") {
                equal();
                return;
            }
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
    if (typeof mainOperand === "undefined") return;
    removeDigit(screenResult);
});

equalButton.addEventListener("click", () => {
    if (typeof operation === "undefined" || typeof prevOperand === "undefined"
        || typeof mainOperand === "undefined") return;
    equal();
});

dotButton.addEventListener("click", () => {
    if (!screenResult.textContent.includes(".")) {
        screenResult.textContent += ".";
    }
});

negButton.addEventListener("click", () => {
    if(typeof mainOperand === "undefined") return;
    mainOperand = -mainOperand;
    updateResult();
});


