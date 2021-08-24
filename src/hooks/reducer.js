import math from 'mathjs/lib/browser/math';
import actions from './actions';

const reducer = (state, action) => {
    console.log(action.type, '-', action.payload);

    switch (action.type) {
        case actions.ADD_DIGIT_TO_INPUT1:
            if (state.input1.split('').includes('.')) {
                return { ...state, input1: state.input1 + action.payload };
            }
            return {
                ...state,
                input1:
                    state.input1.charAt(0) === '0' ? action.payload : state.input1 + action.payload,
            };

        case actions.ADD_DIGIT_TO_INPUT2:
            if (state.input2.split('').includes('.')) {
                return { ...state, input2: state.input2 + action.payload };
            }
            return {
                ...state,
                input2:
                    state.input2.charAt(0) === '0' ? action.payload : state.input2 + action.payload,
            };

        case actions.UPDATE_OPERATOR:
            return { ...state, operator: action.payload };

        case actions.ADD_DECIMAL_TO_INPUT1:
            if (state.input1.split('').includes('.')) return { ...state };
            return { ...state, input1: !state.input1 ? '0.' : state.input1 + '.' };

        case actions.ADD_DECIMAL_TO_INPUT2:
            if (state.input2.split('').includes('.')) return { ...state };
            return { ...state, input2: !state.input2 ? '0.' : state.input2 + '.' };

        case actions.UPDATE_NEGATIVE_FLAG:
            return { ...state, isNegative: action.payload };

        case actions.UPDATE_INPUT1_TO_NEGATIVE:
            if (!math.isNegative(state.input1)) {
                return { ...state, input1: math.string(math.unaryMinus(state.input1)) };
            }
            return { state };

        case actions.UPDATE_INPUT1_TO_POSITIVE:
            if (math.isNegative(state.input1)) {
                return { ...state, input1: math.string(math.unaryMinus(state.input1)) };
            }
            return { state };

        case actions.TOGGLE_INPUT1_SIGN:
            return { ...state, input1: math.string(math.unaryMinus(state.input1)) };

        case actions.UPDATE_INPUT2_TO_NEGATIVE:
            if (!math.isNegative(state.input2)) {
                return { ...state, input2: math.string(math.unaryMinus(state.input2)) };
            }
            return { state };

        case actions.UPDATE_INPUT2_TO_POSITIVE:
            if (math.isNegative(state.input2)) {
                return { ...state, input2: math.string(math.unaryMinus(state.input2)) };
            }
            return { state };

        case actions.TOGGLE_INPUT2_SIGN:
            return { ...state, input2: math.string(math.unaryMinus(state.input2)) };

        case actions.CALCULATE_ANSWER:
            if (state.input1 && !state.operator && !state.input2) {
                return { ...state, answer: state.input1 };
            }

            if (state.input1 && state.operator && !state.input2) {
                const result = math.string(
                    math.evaluate(state.input1 + state.operator + state.input1)
                );
                return { ...state, input2: state.input1, answer: result };
            }

            if (state.input1 && state.operator && state.input2) {
                const result = math.string(
                    math.evaluate(state.input1 + state.operator + state.input2)
                );
                return { ...state, answer: result };
            }

            return { ...state };

        case actions.APPLY_OPERATION_TO_ANSWER:
            return {
                ...state,
                input1: state.answer,
                operator: action.payload,
                input2: '',
                answer: '',
                isNegative: false,
            };

        case actions.CALCULATE_LAST_OPERATION_ON_ANSWER:
            const result = math.string(math.evaluate(state.answer + state.operator + state.input2));
            return { ...state, input1: state.answer, answer: result };

        case actions.CLEAR_INPUT1:
            return { ...state, input1: '0' };

        case actions.CLEAR_INPUT2:
            return { ...state, input2: '0' };

        case actions.CLEAR_CALCULATOR:
            return {
                ...state,
                input1: '',
                operator: '',
                input2: '',
                answer: '',
                isNegative: false,
            };

        case actions.REMOVE_CHAR_FROM_INPUT1:
            // TODO: When using backspace, do not allow only - to remain in string
            const newInput1 = state.input1.slice(0, state.input1.length - 1);
            return { ...state, input1: newInput1 ? newInput1 : '0' };

        case actions.REMOVE_CHAR_FROM_INPUT2:
            const newInput2 = state.input2.slice(0, state.input2.length - 1);
            return { ...state, input2: newInput2 ? newInput2 : '0' };

        case actions.ADD_ITEM_TO_HISTORY:
            const historyItem = {
                input1: state.input1,
                operator: state.operator,
                input2: state.input2,
                answer: state.answer,
            };
            return {
                ...state,
                history:
                    state.history.length < 5
                        ? [historyItem, ...state.history]
                        : [historyItem, ...state.history.slice(0, state.history.length - 1)],
            };

        case actions.REMOVE_ITEM_FROM_HISTORY:
            return {
                ...state,
                history: state.history.filter((item, index) => index !== action.payload),
            };

        case actions.RESTORE_ITEM_FROM_HISTORY:
            return {
                ...state,
                input1: action.payload.input1,
                operator: action.payload.operator,
                input2: action.payload.input2,
                answer: action.payload.answer,
            };

        case actions.CLEAR_HISTORY:
            return { ...state, history: [] };

        case actions.STORE_VALUE_TO_MEMORY:
            return {
                ...state,
                memory:
                    state.memory.length < 5
                        ? [action.payload, ...state.memory]
                        : [action.payload, ...state.memory.slice(0, state.memory.length - 1)],
            };

        case actions.ADD_TO_MEMORY_ITEM:
            const newPlusArr = state.memory.slice();
            newPlusArr[action.payload.index] = math.string(
                math.evaluate(
                    `${state.memory.length ? state.memory[action.payload.index] : '0'} + ${
                        action.payload.value
                    }`
                )
            );
            return {
                ...state,
                memory: newPlusArr,
            };

        case actions.SUBTRACT_FROM_MEMORY_ITEM:
            const newSubArr = state.memory.slice();
            newSubArr[action.payload.index] = math.string(
                math.evaluate(
                    `${state.memory.length ? state.memory[action.payload.index] : '0'} - ${
                        action.payload.value
                    }`
                )
            );
            return {
                ...state,
                memory: newSubArr,
            };

        case actions.REMOVE_ITEM_FROM_MEMORY:
            return {
                ...state,
                memory: state.memory.filter((item, index) => index !== action.payload),
            };

        case actions.CLEAR_MEMORY:
            return { ...state, memory: [] };

        default:
            throw new Error('No matching action found!');
    }
};

export default reducer;
