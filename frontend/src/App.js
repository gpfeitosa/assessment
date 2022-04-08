import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './screens/singInScreen';
import SignUp from './screens/signUpScreen';
import Wallets from './screens/walletsScreen';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
	return (
		<Router>
			<Container>
				<Routes>
					<Route
						path="/signin"
						element={
							<ProtectedRoute type="guest">
								<SignIn />
							</ProtectedRoute>
						}
					/>
					<Route path="/signup" element={<SignUp />} />
					<Route
						path="/"
						element={
							<ProtectedRoute type="private">
								<Wallets />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Container>
		</Router>
	);
};

export default App;
