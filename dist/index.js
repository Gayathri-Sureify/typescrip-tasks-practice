"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const functions_1 = require("./functions");
const result1 = (0, functions_1.calculate)('add', 15, 5);
console.log('Addition result:', result1);
const result2 = (0, functions_1.calculate)('subtract', 17, 4);
console.log('Subtraction result:', result2);
const result3 = (0, functions_1.calculate)('multiply', 104, 95);
console.log('Multiplication result:', result3);
const result4 = (0, functions_1.calculate)('divide', 10, 5);
console.log('Division result:', result4);
