import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';

createGlobalStyle`	
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
body {
	margin: 0;
}
`

ReactDOM.render(<React.StrictMode> <App />  </React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
