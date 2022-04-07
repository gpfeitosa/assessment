import { useEffect, useState } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWallets } from '../actions/walletActions';

const Wallets = () => {
	const dispatch = useDispatch();

	const allWallets = useSelector((state) => state.allWallets);
	console.log({ allWallets });
	const { loading, error, wallets } = allWallets;

	useEffect(() => {
		dispatch(getAllWallets());
	}, [dispatch]);

	return (
		<ListGroup variant="flush">
			{wallets.map((wallet) => (
				<ListGroup.Item key={wallet.id}>
					<Row>
						<Col md={2}>${wallet.id}</Col>
						<Col md={2}>${wallet.owner.name}</Col>
						<Col md={2}>${wallet.balance}</Col>
					</Row>
				</ListGroup.Item>
			))}
		</ListGroup>
	);
};

export default Wallets;
