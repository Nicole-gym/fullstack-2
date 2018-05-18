import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import SignUpPage from './SignUp/SignUpPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignUpPage />, document.getElementById('root'));
registerServiceWorker();
