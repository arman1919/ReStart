
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = (state) => {
    if (!state) {
        console.error('State is undefined');
        return;
    }
    
    root.render(
        <React.StrictMode>
            <App 
                profilePage={state.profilePage}
                dialogPage={state.dialogPage}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
