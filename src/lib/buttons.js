import types from './types';

const buttons = [
    {
        id: 'clear',
        value: 'C',
        type: types.FUNCTION,
    },
    {
        id: 'clearEntry',
        value: 'CE',
        type: types.FUNCTION,
    },
    {
        id: 'backspace',
        value: '<=',
        type: types.FUNCTION,
    },
    {
        id: 'divide',
        value: '/',
        type: types.BINARY_OPERATOR,
    },
    {
        id: 'seven',
        value: '7',
        type: types.DIGIT,
    },
    {
        id: 'eight',
        value: '8',
        type: types.DIGIT,
    },
    {
        id: 'nine',
        value: '9',
        type: types.DIGIT,
    },
    {
        id: 'multiply',
        value: '*',
        type: types.BINARY_OPERATOR,
    },
    {
        id: 'four',
        value: '4',
        type: types.DIGIT,
    },
    {
        id: 'five',
        value: '5',
        type: types.DIGIT,
    },
    {
        id: 'six',
        value: '6',
        type: types.DIGIT,
    },
    {
        id: 'subtract',
        value: '-',
        type: types.BINARY_OPERATOR,
    },
    {
        id: 'one',
        value: '1',
        type: types.DIGIT,
    },
    {
        id: 'two',
        value: '2',
        type: types.DIGIT,
    },
    {
        id: 'three',
        value: '3',
        type: types.DIGIT,
    },
    {
        id: 'add',
        value: '+',
        type: types.BINARY_OPERATOR,
    },
    {
        id: 'plusMinus',
        value: '+/-',
        type: types.FUNCTION,
    },
    {
        id: 'zero',
        value: '0',
        type: types.DIGIT,
    },
    {
        id: 'decimal',
        value: '.',
        type: types.DECIMAL,
    },
    {
        id: 'equals',
        value: '=',
        type: types.EQUALS,
    },
];

const memoryButtons = [
    {
        id: 'memoryClear',
        value: 'MC',
        type: types.MEMORY,
    },
    {
        id: 'memoryRecall',
        value: 'MR',
        type: types.MEMORY,
    },
    {
        id: 'memoryPlus',
        value: 'M+',
        type: types.MEMORY,
    },
    {
        id: 'memorySubtract',
        value: 'M-',
        type: types.MEMORY,
    },
    {
        id: 'memoryStore',
        value: 'MS',
        type: types.MEMORY,
    },
];

export default buttons;
export { memoryButtons };
