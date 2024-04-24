import { Injectable } from '@nestjs/common';
import { CalcDto } from './calc.dto';

@Injectable()
export class CalcService {
  calculateExpression(calcBody: CalcDto) {
    const ex = calcBody.expression;

    const operators = {
      '+': (a: number, b: number) => a + b,
      '-': (a: number, b: number) => a - b,
      '*': (a: number, b: number) => a * b,
      '/': (a: number, b: number) => a / b,
    };

    const numbers = ex.split('');

    const stack = [];
    let i = 0;

    while (i < numbers.length) {
      if (operators[numbers[i]]) {
        const operator = operators[numbers[i]];

        const a = stack.pop();
        const b = numbers[i + 1];

        stack.push(operator(parseInt(a), parseInt(b)));
        i += 1;
        console.log(stack);
      } else {
        stack.push(numbers[i]);
      }
      i++;
    }
    const result = stack.pop();

    if (isNaN(result)) {
      return 'Invalid expression';
    }
    return +result;
  }
}
