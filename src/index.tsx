import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';


import { Provider } from 'react-redux'
import store from './store'

import { NotificationToast } from './components';
import App from './App';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
			<App />
			</Provider>
			<NotificationToast />
		</HashRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
