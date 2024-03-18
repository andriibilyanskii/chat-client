import React, { useState } from 'react';

import { Router } from 'routes';
import { AppContext } from 'context';
import { IUserInfo } from 'interfaces';

import './App.scss';

function App(): React.ReactElement {
	const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);

	return (
		<AppContext.Provider
			value={{
				userInfo,
				setUserInfo,
			}}
		>
			<Router />
		</AppContext.Provider>
	);
}

export default App;
