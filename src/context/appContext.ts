/* eslint-disable */

import React from 'react';

import { IUserInfo } from 'interfaces';

const options = {
	userInfo: {},
	setUserInfo: (info: IUserInfo) => {},
};

const AppContext = React.createContext(options);

export { AppContext };
