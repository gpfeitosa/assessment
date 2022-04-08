import {
	WALLETS_FAIL,
	WALLETS_REQUEST,
	WALLETS_SUCCESS,
} from '../constants/walletConstants';
import axios from 'axios';
import { getToken } from '../utils/auth.utils';

const getAll = async () => {
	const jwt = getToken();

	const config = {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	};

	const { data } = await axios.get('/wallet/all', config);

	return data;
};

export const getAllWallets = () => async (dispatch) => {
	try {
		dispatch({ type: WALLETS_REQUEST });

		const data = await getAll();

		dispatch({
			type: WALLETS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: WALLETS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const createWallet = (name, balance) => async (dispatch) => {
	try {
		dispatch({ type: WALLETS_REQUEST });

		const jwt = getToken();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`,
			},
		};

		await axios.post('/wallet/', { name, balance }, config);

		const data = await getAll();

		dispatch({
			type: WALLETS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: WALLETS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const deleteWallet = (walletId) => async (dispatch) => {
	try {
		dispatch({ type: WALLETS_REQUEST });

		const jwt = getToken();

		const config = {
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		};

		await axios.delete(`/wallet/${walletId}`, config);

		const data = await getAll();

		dispatch({
			type: WALLETS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: WALLETS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const makeDeposit = (walletId, amount) => async (dispatch) => {
	try {
		dispatch({ type: WALLETS_REQUEST });

		const jwt = getToken();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`,
			},
		};

		await axios.put('/wallet/deposit', { walletId, amount }, config);

		const data = await getAll();

		dispatch({
			type: WALLETS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: WALLETS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const makeWithdrawal = (walletId, amount) => async (dispatch) => {
	try {
		dispatch({ type: WALLETS_REQUEST });

		const jwt = getToken();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`,
			},
		};

		await axios.put('/wallet/withdraw', { walletId, amount }, config);

		const data = await getAll();

		dispatch({
			type: WALLETS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: WALLETS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
