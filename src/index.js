
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {renderEntireTree} from './rendre';

const root = ReactDOM.createRoot(document.getElementById('root'));


renderEntireTree(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
