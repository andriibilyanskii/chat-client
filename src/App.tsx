import React, { useState } from 'react';
import { connect } from 'socket.io-client';

import { Router } from 'routes';
import { AppContext } from 'context';
import { IUserInfo } from 'interfaces';
import { CONSTANTS } from './constants';

import './App.scss';

const socket = connect(CONSTANTS.BACKEND_URL);

function App(): React.ReactElement {
	const [userInfo, setUserInfo] = useState<IUserInfo>(() =>
		JSON.parse(localStorage.getItem('user') as any)
	);

	const [showLoader, setShowLoader] = useState(false);

	return (
		<AppContext.Provider
			value={{
				userInfo,
				setUserInfo,
				showLoader,
				setShowLoader,
				socket,
			}}
		>
			<Router />
		</AppContext.Provider>
	);
}

export default App;
