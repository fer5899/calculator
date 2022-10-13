const MAX_DIGITS_ON_SCREEN = 15;

let mainOperand = 0;
let prevOperand;
let operation;

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const screenResult = document.querySelector("div#result");
const screenLastOp = document.querySelector("div#last-operation");
const acButton = document.querySelector("#key-ac");
const delButton = document.querySelector("#key-del");
const equalButton = document.querySelector("#key-equal");
const dotButton = document.querySelector("#key-dot");
const negButton = document.querySelector("#key-neg");