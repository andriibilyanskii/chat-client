/* eslint-disable */

import React from 'react';

import { IUserInfo } from 'interfaces';

const options = {
	userInfo: {} as IUserInfo,
	setUserInfo: (info: IUserInfo) => {},
	showLoader: false,
	setShowLoader: (toShow: boolean) => {},
	socket: {} as any,
};

const AppContext = React.createContext(options);

export { AppContext };
