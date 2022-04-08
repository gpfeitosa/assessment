import { useEffect, useState } from 'react';
import {
	Button,
	Container,
	ListGroup,
	OverlayTrigger,
	Row,
	Tooltip,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteWallet,
	getAllWallets,
	makeDeposit,
	makeWithdrawal,
} from '../actions/walletActions';
import CreateWalletForm from '../components/CreateWalletForm';
import WalletItem from '../components/WalletItem';
import {
	IoArrowDownCircleOutline,
	IoArrowUpCircleOutline,
	IoTrashOutline,
} from 'react-icons/io5';
import AmountForm from '../components/AmountForm';
import { logout } from '../utils/auth.utils';
import Message from '../components/Message';
import { useNavigate } from 'react-router-dom';

const Wallets = () => {
	const [creatingNew, setCreatingNew] = useState(false);
	const [makingDeposit, setMakingDeposit] = useState(false);
	const [makingWithdraw, setMakingWithdraw] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const allWallets = useSelector((state) => state.walletReducer);
	const { error, wallets } = allWallets;

	useEffect(() => {
		dispatch(getAllWallets());
	}, [dispatch]);

	const deleteWalletHandler = (id) => {
		dispatch(deleteWallet(id));
	};

	const toggleMakingDeposit = () => {
		setMakingDeposit(!makingDeposit);
		setMakingWithdraw(false);
	};

	const toggleMakingWithdraw = () => {
		setMakingWithdraw(!makingWithdraw);
		setMakingDeposit(false);
	};

	const makeDepositHandler = (walletId, amount) => {
		dispatch(makeDeposit(walletId, amount));
		setMakingDeposit(false);
	};

	const makeWithdrawalHandler = (walletId, amount) => {
		dispatch(makeWithdrawal(walletId, amount));
		setMakingWithdraw(false);
	};

	const handleSignOut = () => {
		logout();
		navigate('/signin');
	};

	return (
		<Container>
			<Button
				variant="outline-warning"
				onClick={() => handleSignOut()}
				style={{ margin: '8px' }}
			>
				Sign Out
			</Button>
			{!creatingNew && (
				<Button
					variant="outline-primary"
					onClick={() => setCreatingNew(true)}
					style={{ margin: '8px' }}
				>
					New Wallet
				</Button>
			)}
			{error && <Message variant="danger">{error}</Message>}
			{creatingNew && <CreateWalletForm setCreatingNew={setCreatingNew} />}
			<ListGroup variant="flush" style={{ margin: '8px' }}>
				<Row>
					<WalletItem md={2}>Wallet Name</WalletItem>
					<WalletItem md={2}>Owner</WalletItem>
					<WalletItem md={2}>Balance</WalletItem>
				</Row>
				{wallets.map((wallet) => (
					<ListGroup.Item key={wallet.id}>
						<Row>
							<WalletItem md={2}>{wallet.name}</WalletItem>
							<WalletItem md={2}>{wallet.owner.name}</WalletItem>
							<WalletItem md={2}>
								$ {(Math.round(wallet.balance * 100) / 100).toFixed(2)}
							</WalletItem>

							{makingDeposit && !makingWithdraw && (
								<WalletItem sm={2}>
									<AmountForm
										placeholder={'Deposit'}
										walletId={wallet.id}
										onSubmitHandler={makeDepositHandler}
									/>
								</WalletItem>
							)}
							<WalletItem sm={1}>
								<OverlayTrigger
									placement={'top'}
									delay={{ show: 250, hide: 400 }}
									overlay={<Tooltip id={'deposit-tooltip'}>Deposit</Tooltip>}
								>
									<Button
										type="button"
										variant="light"
										onClick={() => toggleMakingDeposit()}
									>
										<IoArrowDownCircleOutline style={{ color: 'green' }} />
									</Button>
								</OverlayTrigger>
							</WalletItem>

							{!makingDeposit && makingWithdraw && (
								<WalletItem sm={2}>
									<AmountForm
										placeholder={'Withdraw'}
										walletId={wallet.id}
										onSubmitHandler={makeWithdrawalHandler}
									/>
								</WalletItem>
							)}
							<WalletItem sm={1}>
								<OverlayTrigger
									placement={'top'}
									delay={{ show: 250, hide: 400 }}
									overlay={<Tooltip id={'withdraw-tooltip'}>Withdraw</Tooltip>}
								>
									<Button
										type="button"
										variant="light"
										onClick={() => toggleMakingWithdraw()}
									>
										<IoArrowUpCircleOutline style={{ color: 'red' }} />
									</Button>
								</OverlayTrigger>
							</WalletItem>

							<WalletItem sm={1}>
								<OverlayTrigger
									placement={'top'}
									delay={{ show: 250, hide: 400 }}
									overlay={<Tooltip id={'delete-tooltip'}>Delete</Tooltip>}
								>
									<Button
										type="button"
										variant="light"
										onClick={() => deleteWalletHandler(wallet.id)}
									>
										<IoTrashOutline style={{ color: 'red' }} />
									</Button>
								</OverlayTrigger>
							</WalletItem>
						</Row>
					</ListGroup.Item>
				))}
			</ListGroup>
		</Container>
	);
};

export default Wallets;
