import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LoginPage, ChatPage } from 'pages';
import { PrivateRoute } from './components';

export const Router = () => {
	return (
		<Routes>
			<Route
				index
				element={
					<PrivateRoute>
						<ChatPage />
					</PrivateRoute>
				}
			/>
			<Route path={'/auth'}>
				<Route path='login' element={<LoginPage />} />
			</Route>

			<Route path='*' element={<div />} />
		</Routes>
	);
};
