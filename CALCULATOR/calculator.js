function calculator(num1, operator, num2) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
            case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            result = num1 / num2;
            break;
        default:
            return 'Error: Invalid operator';
    }
    return result;
}  
console.log(calculator(10, '+', 5));
console.log(calculator(10, '-', 5));
console.log(calculator(10, '*', 5));
console.log(calculator(10, '/', 5));
