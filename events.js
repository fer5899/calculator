numberButtons.forEach(button => {
        button.addEventListener("click", e => {
            mainOperand = addDigit(mainOperand, parseInt(e.target.textContent));
            screenResult.textContent = mainOperand;
})});

