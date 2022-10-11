let mainOperand = 0;
let prevOperand;
let operation;

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const screenResult = document.querySelector("div#result");
const screenLastOp = document.querySelector("div#last-operation");
const acButton = document.querySelector("#key-ac");