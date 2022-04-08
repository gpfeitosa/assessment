import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Container, Row } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormElement from '../components/FormElement';

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

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(register(name, username, password));
	};

	return (
		<Container>
			<Row className="justify-content-md-center" style={{ fontSize: '32px' }}>
				Sign Up
			</Row>
			{error && <Message variant="danger">{error}</Message>}
			{loading && <Loader />}
			<Form noValidate onSubmit={submitHandler}>
				<FormElement
					controlId={'name'}
					label={'name'}
					type={'text'}
					as={'input'}
					placeholder={'Name'}
					onChange={handleNameChange}
				/>

				<FormElement
					controlId={'username'}
					label={'Username'}
					type={'text'}
					as={'input'}
					placeholder={'Username'}
					onChange={handleUsernameChange}
				/>

				<FormElement
					controlId={'password'}
					label={'Password'}
					type={'password'}
					as={'input'}
					placeholder={'Password'}
					onChange={handlePasswordChange}
				/>

				<Container
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Button
						type="submit"
						variant="outline-primary"
						style={{ margin: '8px' }}
					>
						{loading ? 'Loading...' : 'Sign Up'}
					</Button>
					<Link to="/signin">
						<Button variant="outline-secondary" style={{ margin: '8px' }}>
							{loading ? 'Loading...' : 'Cancel'}
						</Button>
					</Link>
				</Container>
			</Form>
		</Container>
	);
};

export default SignUp;
