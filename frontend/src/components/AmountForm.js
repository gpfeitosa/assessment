import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AmountForm = ({ walletId, onSubmitHandler, placeholder }) => {
	const [amount, setAmount] = useState(0);

	return (
		<Form
			md={2}
			style={{ display: 'flex' }}
			onSubmit={() => onSubmitHandler(walletId, amount)}
		>
			<Form.Group controlId="amount">
				<Form.Control
					type="number"
					placeholder={placeholder}
					min={'0'}
					step={'0.01'}
					onChange={(e) => setAmount(e.target.value)}
				/>
			</Form.Group>
			<Button type="submit" variant="primary">
				Ok
			</Button>
		</Form>
	);
};

export default AmountForm;
