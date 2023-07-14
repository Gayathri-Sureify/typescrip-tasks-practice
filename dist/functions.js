"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            throw new Error('Invalid operation');
    }
}
exports.calculate = calculate;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
