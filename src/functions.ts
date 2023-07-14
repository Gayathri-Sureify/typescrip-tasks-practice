
export function calculate(operation: string, a: number, b: number): number {
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
  
  function add(a: number, b: number): number {
    return a + b;
  }
  
  function subtract(a: number, b: number): number {
    return a - b;
  }
  
  function multiply(a: number, b: number): number {
    return a * b;
  }
  
  function divide(a: number, b: number): number {
    return a / b;
  }
  