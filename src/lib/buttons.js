import types from './types';

const buttons = [
    {
        id: 'clear',
        value: 'C',
        type: types.FUNCTION,
        eventKey: 'Escape',
    },
    {
        id: 'clearEntry',
        value: 'CE',
        type: types.FUNCTION,
        eventKey: 'Delete',
    },
    {
        id: 'backspace',
        value: '<=',
        type: types.FUNCTION,
        eventKey: 'Backspace',
    },
    {
        id: 'divide',
        value: '/',
        type: types.BINARY_OPERATOR,
        eventKey: '/',
    },
    {
        id: 'seven',
        value: '7',
        type: types.DIGIT,
        eventKey: '7',
    },
    {
        id: 'eight',
        value: '8',
        type: types.DIGIT,
        eventKey: '8',
    },
    {
        id: 'nine',
        value: '9',
        type: types.DIGIT,
        eventKey: '9',
    },
    {
        id: 'multiply',
        value: '*',
        type: types.BINARY_OPERATOR,
        eventKey: '*',
    },
    {
        id: 'four',
        value: '4',
        type: types.DIGIT,
        eventKey: '4',
    },
    {
        id: 'five',
        value: '5',
        type: types.DIGIT,
        eventKey: '5',
    },
    {
        id: 'six',
        value: '6',
        type: types.DIGIT,
        eventKey: '6',
    },
    {
        id: 'subtract',
        value: '-',
        type: types.BINARY_OPERATOR,
        eventKey: '-',
    },
    {
        id: 'one',
        value: '1',
        type: types.DIGIT,
        eventKey: '1',
    },
    {
        id: 'two',
        value: '2',
        type: types.DIGIT,
        eventKey: '2',
    },
    {
        id: 'three',
        value: '3',
        type: types.DIGIT,
        eventKey: '3',
    },
    {
        id: 'add',
        value: '+',
        type: types.BINARY_OPERATOR,
        eventKey: '+',
    },
    {
        id: 'plusMinus',
        value: '+/-',
        type: types.FUNCTION,
        eventKey: 'F10',
    },
    {
        id: 'zero',
        value: '0',
        type: types.DIGIT,
        eventKey: '0',
    },
    {
        id: 'decimal',
        value: '.',
        type: types.DECIMAL,
        eventKey: '.',
    },
    {
        id: 'equals',
        value: '=',
        type: types.EQUALS,
        eventKey: 'Enter',
    },
];

const memoryButtons = [
    {
        id: 'memoryClear',
        value: 'MC',
        type: types.MEMORY,
        eventKey: 'F1',
    },
    {
        id: 'memoryRecall',
        value: 'MR',
        type: types.MEMORY,
        eventKey: 'F2',
    },
    {
        id: 'memoryPlus',
        value: 'M+',
        type: types.MEMORY,
        eventKey: 'F3',
    },
    {
        id: 'memorySubtract',
        value: 'M-',
        type: types.MEMORY,
        eventKey: 'F4',
    },
    {
        id: 'memoryStore',
        value: 'MS',
        type: types.MEMORY,
        eventKey: 'F5',
    },
];

export default buttons;
export { memoryButtons };
