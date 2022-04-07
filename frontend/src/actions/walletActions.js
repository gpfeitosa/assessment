import {
	ALL_WALLETS_REQUEST,
	ALL_WALLETS_SUCCESS,
	ALL_WALLETS_FAIL,
	CREATE_WALLET_REQUEST,
	CREATE_WALLET_SUCCESS,
	CREATE_WALLET_FAIL,
} from '../constants/walletConstants';
import axios from 'axios';
import { getToken } from '../utils/auth.utils';

export const getAllWallets = () => async (dispatch) => {
	try {
		dispatch({ type: ALL_WALLETS_REQUEST });

		const jwt = getToken();

		const config = {
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		};

		const { data } = await axios.get('/wallet/all', config);

		dispatch({
			type: ALL_WALLETS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ALL_WALLETS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const createWallet = (name, description) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_WALLET_REQUEST });

		const jwt = getToken();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`,
			},
		};

		const { data } = await axios.post(
			'/wallet/all',
			{ name, description },
			config
		);

		dispatch({
			type: CREATE_WALLET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CREATE_WALLET_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
