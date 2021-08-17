import math from 'mathjs/lib/browser/math';
import actions from './actions';

const reducer = (state, action) => {
    console.log(action.type, '-', action.payload);

    switch (action.type) {
        case actions.ADD_DIGIT_TO_INPUT1:
            // TODO: 0. is not possible overriden
            return {
                ...state,
                input1:
                    state.input1.charAt(0) === '0' ? action.payload : state.input1 + action.payload,
            };

        case actions.ADD_DIGIT_TO_INPUT2:
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

        case actions.UPDATE_LAST_TYPE:
            return { ...state, lastType: action.payload };

        case actions.UPDATE_INPUT1_NEGATIVE_FLAG:
            return { ...state, isInput1Negative: action.payload };

        case actions.UPDATE_INPUT2_NEGATIVE_FLAG:
            return { ...state, isInput2Negative: action.payload };

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
                lastType: '',
                answer: '',
                isInput1Negative: false,
                isInput2Negative: false,
            };

        case actions.REMOVE_CHAR_FROM_INPUT1:
            const newInput1 = state.input1.slice(0, state.input1.length - 1);
            return { ...state, input1: newInput1 ? newInput1 : '0' };

        case actions.REMOVE_CHAR_FROM_INPUT2:
            const newInput2 = state.input2.slice(0, state.input2.length - 1);
            return { ...state, input2: newInput2 ? newInput2 : '0' };

        default:
            throw new Error('No matching action found!');
    }
};

export default reducer;
