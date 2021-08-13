import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import AppProvider from './hooks/context';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
