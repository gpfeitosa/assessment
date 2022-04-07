import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, InputGroup, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import Message from '../components/Message';

const SignIn = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, data } = userLogin;

	useEffect(() => {
		if (data?.jwt) {
			navigate('/');
		}
	}, [navigate, data]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(username, password));
	};

	return (
		<FormContainer>
			<h1>Sign In</h1>
			{error && <Message variant="danger">{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="email">
					<Form.Label>Username</Form.Label>
					<InputGroup hasValidation>
						<Form.Control
							required
							type="text"
							placeholder="Username"
							onChange={(e) => setUsername(e.target.value)}
						></Form.Control>
						<Form.Control.Feedback type="invalid">
							This field is required.
						</Form.Control.Feedback>
					</InputGroup>
				</Form.Group>

				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<InputGroup hasValidation>
						<Form.Control
							required
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						></Form.Control>
						<Form.Control.Feedback type="invalid">
							This field is required.
						</Form.Control.Feedback>
					</InputGroup>
				</Form.Group>

				<Container
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Button type="submit" variant="outline-primary">
						{loading ? 'Loading...' : 'Sign In'}
					</Button>
					<Link to="/signup">
						<Button variant="outline-secondary">
							{loading ? 'Loading...' : 'Sign Up'}
						</Button>
					</Link>
				</Container>
			</Form>
		</FormContainer>
	);
};

export default SignIn;
