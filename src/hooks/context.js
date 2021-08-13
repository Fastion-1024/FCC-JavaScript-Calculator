import React, { useContext, useReducer, useEffect } from 'react';
const AppContext = React.createContext();
const initialState = {};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export default AppProvider;
