/* eslint-disable */

import React from 'react';

import { IUserInfo } from 'interfaces';

const options = {
	userInfo: {} as IUserInfo,
	setUserInfo: (info: IUserInfo) => {},
};

const AppContext = React.createContext(options);

export { AppContext };
