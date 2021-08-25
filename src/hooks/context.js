import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import actions from './actions';
import types from '../lib/types';
import buttons from '../lib/buttons';

/* 
    TODO: BUGS
    - Backspace currently removes second input when answer is shown.
    - Decimal currently adds to second input when answer is shown.
    - When clicking equals with neg flag true, reset flag
*/

/* 
    TODO: MEMORY
    - Memory Clear - Clears entire memory store.
    - Memory Recall - Recall the last memory item stored.
        - If answer start new equation with reacalled number as input1
        - If no equation start new equation with recalled number as input1
        - If operator is true then recall number as input2
    - Memory Plus - Adds to current memory item.
        - Can add 0
        - If no current memory item then creates new memory item with 0 + value.
        - If input1, add input1 to current memory item.
        - If input2, add input2 to current memory item.
        - if Answer, add answer to current memory item. 
    - Memory subtract - Subtracts from current memory item.
        - Can subtract 0
        - If no current memory item then create new item in memory with 0 - value.
        - If input1, subtract input1 from current memory item.
        - If input2, subtract input2 from current memory item.
        - if Answer, subtract answer from current memory item. 
    - Memory store - stores the current value to memory.
        - if no calculation, store 0.
        - if input1 is true and operator is false, store input1.
        - if operator is true, store input2.
        - if answer is true store answer.

    Each MEMORY ITEM
    - Memory Clear - Clears the current memory item.
    - Memory plus - adds the current value to the selected memory item
    - Memory subtract - subtracts the current value from the selected memory item
*/

const AppContext = React.createContext();
const initialState = {
    input1: '',
    operator: '',
    input2: '',
    answer: '',
    isNegative: false,
    history: [],
    memory: [],
    isSideContainerHidden: true,
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

            case types.MEMORY:
                handleMemory(btn.id);
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

    const handleMemory = (id) => {
        const value = state.answer
            ? state.answer
            : state.operator && state.input2
            ? state.input2
            : !state.operator && state.input1
            ? state.input1
            : '0';

        switch (id) {
            case 'memoryClear':
                clearMemory();
                break;

            case 'memoryStore':
                dispatch({ type: actions.STORE_VALUE_TO_MEMORY, payload: value });
                break;

            case 'memoryRecall':
                recallMemoryItem(0);
                break;

            case 'memoryPlus':
                dispatch({ type: actions.ADD_TO_MEMORY_ITEM, payload: { index: 0, value } });
                break;

            case 'memorySubtract':
                dispatch({ type: actions.SUBTRACT_FROM_MEMORY_ITEM, payload: { index: 0, value } });
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

    const memoryPlusCurrentItem = (e, id) => {
        e.stopPropagation();
        const value = state.answer
            ? state.answer
            : state.operator && state.input2
            ? state.input2
            : !state.operator && state.input1
            ? state.input1
            : '0';

        dispatch({ type: actions.ADD_TO_MEMORY_ITEM, payload: { index: id, value } });
    };

    const memorySubtractCurrentItem = (e, id) => {
        e.stopPropagation();
        const value = state.answer
            ? state.answer
            : state.operator && state.input2
            ? state.input2
            : !state.operator && state.input1
            ? state.input1
            : '0';

        dispatch({ type: actions.SUBTRACT_FROM_MEMORY_ITEM, payload: { index: id, value } });
    };

    const recallMemoryItem = (id) => {
        if (state.answer || !state.operator) {
            dispatch({ type: actions.CLEAR_CALCULATOR });
            dispatch({ type: actions.ADD_DIGIT_TO_INPUT1, payload: state.memory[id] });
        } else if (state.operator) {
            dispatch({ type: actions.CLEAR_INPUT2 });
            dispatch({ type: actions.ADD_DIGIT_TO_INPUT2, payload: state.memory[id] });
        }
    };

    const removeItemFromMemory = (e, id) => {
        e.stopPropagation();
        dispatch({ type: actions.REMOVE_ITEM_FROM_MEMORY, payload: id });
    };

    const clearMemory = () => {
        if (state.memory.length > 0) {
            dispatch({ type: actions.CLEAR_MEMORY });
        }
    };

    const toggleSideContainerVisibility = () => {
        dispatch({
            type: actions.UPDATE_SIDE_CONTAINER_VISIBILITY,
            payload: !state.isSideContainerHidden,
        });
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [state]);

    const handleKeyDown = (e) => {
        const btn = buttons.find((btn) => btn.eventKey === e.key);
        if (btn) {
            e.preventDefault();
            handleClick(btn);
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
                clearMemory,
                removeItemFromMemory,
                memoryPlusCurrentItem,
                memorySubtractCurrentItem,
                recallMemoryItem,
                toggleSideContainerVisibility,
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
