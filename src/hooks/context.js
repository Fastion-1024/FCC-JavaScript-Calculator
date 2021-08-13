import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import actions from './actions';
import types from '../lib/types';

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
        } else {
            dispatch({ type: actions.ADD_DIGIT_TO_INPUT1, payload: value });
        }

        dispatch({ type: actions.UPDATE_LAST_TYPE, payload: types.DIGIT });
    };

    const handleOperator = (value) => {
        if (!state.input1) {
            dispatch({ type: actions.ADD_DIGIT_TO_INPUT1, payload: '0' });
            dispatch({ type: actions.UPDATE_OPERATOR, payload: value });
        } else if (state.input1 && state.input2) {
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
