import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import actions from './actions';
import types from '../lib/types';
import math from 'mathjs/lib/browser/math';

const AppContext = React.createContext();
const initialState = {
    input1: '',
    operator: '',
    input2: '',
    lastType: '',
    answer: '',
    isNegative: false,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClick = (btn) => {
        switch (btn.type) {
            case types.DIGIT:
                handleDigit(btn.value);
                break;

            case types.BINARY_OPERATOR:
                handleOperator(btn.value);
                break;

            case types.DECIMAL:
                handleDecimal();
                break;

            case types.EQUALS:
                handleEquals();
                break;

            case types.FUNCTION:
                handleFunction(btn.id);
                break;
        }
    };

    const handleDigit = (value) => {
        if (state.operator) {
            dispatch({ type: actions.ADD_DIGIT_TO_INPUT2, payload: value });
            if (state.isNegative) {
                dispatch({ type: actions.UPDATE_NEGATIVE_FLAG, payload: false });
                dispatch({ type: actions.UPDATE_INPUT2_TO_NEGATIVE, payload: false });
            }
        } else {
            dispatch({ type: actions.ADD_DIGIT_TO_INPUT1, payload: value });
        }

        dispatch({ type: actions.UPDATE_LAST_TYPE, payload: types.DIGIT });
    };

    const handleOperator = (value) => {
        if (!state.input1) {
            dispatch({ type: actions.ADD_DIGIT_TO_INPUT1, payload: '0' });
            dispatch({ type: actions.UPDATE_OPERATOR, payload: value });
        } else if (state.operator && !state.input2) {
            if (value === '-') {
                dispatch({ type: actions.UPDATE_NEGATIVE_FLAG, payload: true });
            } else {
                dispatch({ type: actions.UPDATE_OPERATOR, payload: value });
                if (state.isNegative) {
                    dispatch({ type: actions.UPDATE_NEGATIVE_FLAG, payload: false });
                }
            }
        } else if (state.input1 && state.operator && state.input2) {
            dispatch({ type: actions.CALCULATE_ANSWER });
            dispatch({ type: actions.APPLY_OPERATION_TO_ANSWER, payload: value });
        } else {
            dispatch({ type: actions.UPDATE_OPERATOR, payload: value });
        }

        dispatch({ type: actions.UPDATE_LAST_TYPE, payload: types.BINARY_OPERATOR });
    };

    const handleDecimal = () => {
        if (state.operator) {
            dispatch({ type: actions.ADD_DECIMAL_TO_INPUT2 });
        } else {
            dispatch({ type: actions.ADD_DECIMAL_TO_INPUT1 });
        }

        dispatch({ type: actions.UPDATE_LAST_TYPE, payload: types.DECIMAL });
    };

    const handleEquals = () => {
        if (state.answer) {
            dispatch({ type: actions.CALCULATE_LAST_OPERATION_ON_ANSWER });
        } else {
            dispatch({ type: actions.CALCULATE_ANSWER });
        }
        dispatch({ type: actions.UPDATE_LAST_TYPE, payload: types.EQUALS });
    };

    const handleFunction = (id) => {
        switch (id) {
            case 'clear':
                dispatch({ type: actions.CLEAR_CALCULATOR });
                break;

            case 'clearEntry':
                if (state.answer) {
                    dispatch({ type: actions.CLEAR_CALCULATOR });
                }
                if (state.operator) {
                    dispatch({ type: actions.CLEAR_INPUT2 });
                } else {
                    dispatch({ type: actions.CLEAR_INPUT1 });
                }
                break;

            case 'backspace':
                if (state.operator) {
                    dispatch({ type: actions.REMOVE_CHAR_FROM_INPUT2 });
                } else {
                    dispatch({ type: actions.REMOVE_CHAR_FROM_INPUT1 });
                }
                break;

            case 'plusMinus':
                if (state.answer) return;
                if (!state.operator && state.input1) {
                    dispatch({ type: actions.TOGGLE_INPUT1_SIGN });
                } else if (state.operator && state.input2) {
                    dispatch({ type: actions.TOGGLE_INPUT2_SIGN });
                }

            default:
                break;
        }
    };

    return <AppContext.Provider value={{ ...state, handleClick }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export default AppProvider;
