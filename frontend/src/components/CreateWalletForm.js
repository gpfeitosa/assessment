import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createWallet } from '../actions/walletActions';
import FormElement from './FormElement';

const CreateWalletForm = ({ setCreatingNew }) => {
	const [name, setName] = useState('');
	const [balance, setBalance] = useState(0);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(createWallet(name, balance));
		setCreatingNew(false);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleBalanceChange = (e) => {
		setBalance(e.target.value);
	};

	return (
		<Container>
			<Form noValidate onSubmit={submitHandler}>
				<FormElement
					controlId={'name'}
					label={'Wallet Name'}
					type={'text'}
					as={'input'}
					placeholder={'Wallet name'}
					onChange={handleNameChange}
				/>

				<FormElement
					controlId={'balance'}
					label={'Wallet Initial Balance'}
					type={'number'}
					step={'0.01'}
					as={'input'}
					min={'0'}
					placeholder={'12.34'}
					onChange={handleBalanceChange}
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
						Create
					</Button>
					<Button
						variant="outline-primary"
						onClick={() => setCreatingNew(false)}
						style={{ margin: '8px' }}
					>
						Cancel
					</Button>
				</Container>
			</Form>
		</Container>
	);
};

export default CreateWalletForm;
