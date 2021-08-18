import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import actions from './actions';
import types from '../lib/types';

/* 
    TODO: BUGS
    - Backspace currently removes second input when answer is shown.
    - Decimal currently adds to second input when answer is shown.
*/

const AppContext = React.createContext();
const initialState = {
    input1: '',
    operator: '',
    input2: '',
    answer: '',
    isNegative: false,
    history: [],
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
            dispatch({ type: actions.ADD_ITEM_TO_HISTORY });
            dispatch({ type: actions.APPLY_OPERATION_TO_ANSWER, payload: value });
        } else {
            dispatch({ type: actions.UPDATE_OPERATOR, payload: value });
        }
    };

    const handleDecimal = () => {
        if (state.operator) {
            dispatch({ type: actions.ADD_DECIMAL_TO_INPUT2 });
        } else {
            dispatch({ type: actions.ADD_DECIMAL_TO_INPUT1 });
        }
    };

    const handleEquals = () => {
        if (state.answer) {
            dispatch({ type: actions.CALCULATE_LAST_OPERATION_ON_ANSWER });
            dispatch({ type: actions.ADD_ITEM_TO_HISTORY });
        } else {
            dispatch({ type: actions.CALCULATE_ANSWER });
            dispatch({ type: actions.ADD_ITEM_TO_HISTORY });
        }
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
                break;

            default:
                break;
        }
    };

    const removeItemFromHistory = (id) => {
        dispatch({ type: actions.REMOVE_ITEM_FROM_HISTORY, payload: id });
    };

    const restoreItemFromHistory = (item) => {
        dispatch({ type: actions.RESTORE_ITEM_FROM_HISTORY, payload: item });
    };

    const clearHistory = () => {
        if (state.history.length > 0) {
            dispatch({ type: actions.CLEAR_HISTORY });
        }
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                handleClick,
                clearHistory,
                removeItemFromHistory,
                restoreItemFromHistory,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export default AppProvider;
