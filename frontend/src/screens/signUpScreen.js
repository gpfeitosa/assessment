import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import Message from '../components/Message';

const SignUp = () => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error, data } = userRegister;

	useEffect(() => {
		if (data?.jwt) {
			navigate('/');
		}
	}, [navigate, data]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(register(name, username, password));
	};

	return (
		<FormContainer>
			<h1>Sign Up</h1>
			{error && <Message variant="danger">{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Name"
						onChange={(e) => setName(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="username">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>

					<Container
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Button type="submit" variant="outline-primary">
							{loading ? 'Loading...' : 'Sign Up'}
						</Button>
					</Container>
					<hr />
					<Link to="/">Sign In</Link>
				</Form.Group>
			</Form>
		</FormContainer>
	);
};

export default SignUp;
