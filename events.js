numberButtons.forEach(button => {
    button.addEventListener("click", e => {
        mainOperand = addDigit(mainOperand, parseInt(e.target.textContent));
        screenResult.textContent = mainOperand;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", e => {
        let prevOperation = operation;
        let operationResult = [];
        let result;
        let lastOperationText;
        
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

        mainOperand = 0;

        screenLastOp.textContent = lastOperationText;
        screenResult.textContent = mainOperand;
            
    });
});


