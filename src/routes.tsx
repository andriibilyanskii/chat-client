import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LoginPage, ChatPage } from 'pages';
import { PageLayout, PrivateRoute } from './components';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<PageLayout />}>
				<Route
					path={'/'}
					element={
						<PrivateRoute>
							<ChatPage />
						</PrivateRoute>
					}
				/>
			</Route>

			<Route path={'/auth'}>
				<Route path='login' element={<LoginPage />} />
			</Route>

			<Route path='*' element={<div />} />
		</Routes>
	);
};
