import types from './types';

const buttons = [
    {
        id: 'zero',
        value: '0',
        type: types.DIGIT,
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
        id: 'add',
        value: '+',
        type: types.BINARY_OPERATOR,
    },
    {
        id: 'subtract',
        value: '-',
        type: types.BINARY_OPERATOR,
    },
    {
        id: 'multiply',
        value: '*',
        type: types.BINARY_OPERATOR,
    },
    {
        id: 'divide',
        value: '/',
        type: types.BINARY_OPERATOR,
    },
    {
        id: 'equals',
        value: '=',
        type: types.EQUALS,
    },
    {
        id: 'decimal',
        value: '.',
        type: types.DECIMAL,
    },
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
        id: 'plusMinus',
        value: '+/-',
        type: types.FUNCTION,
    },
];

export default buttons;
