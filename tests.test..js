const { add, subtract, multiply, divide } = require('./test.js');
const readline = require('readline');
const calculator = require('./test.js').calculator;

// filepath: /workspaces/skills-copilot-codespaces-2-vscode/test.test.js

describe('Calculator Functions', () => {
    test('add() should return the sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });

    test('subtract() should return the difference of two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(0, 5)).toBe(-5);
        expect(subtract(-3, -2)).toBe(-1);
    });

    test('multiply() should return the product of two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-1, 5)).toBe(-5);
        expect(multiply(0, 10)).toBe(0);
    });

    test('divide() should return the quotient of two numbers', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(5, 2)).toBeCloseTo(2.5);
        expect(divide(0, 5)).toBe(0);
    });

    test('divide() should return an error message when dividing by zero', () => {
        expect(divide(5, 0)).toBe("Error! Division by zero.");
    });
});

describe('Calculator Interactive Logic', () => {

    jest.spyOn(readline, 'createInterface').mockImplementation(() => {
        let inputs = [];
        const mockInterface = {
            question: jest.fn((query, callback) => {
                callback(inputs.shift());
            }),
            close: jest.fn(),
        };
        return mockInterface;
    });

    test('calculator() should handle addition correctly', async () => {
        const inputs = ['1', '2', '3', '5'];
        readline.createInterface().question.mockImplementation((query, callback) => {
            callback(inputs.shift());
        });

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        await calculator();

        expect(consoleSpy).toHaveBeenCalledWith('Result: 5');
        consoleSpy.mockRestore();
    });

    // Additional tests for subtraction, multiplication, division, and invalid inputs can be added similarly.
});