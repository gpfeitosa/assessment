import {
	ALL_WALLETS_FAIL,
	ALL_WALLETS_REQUEST,
	ALL_WALLETS_SUCCESS,
} from '../constants/walletConstants';

export const getAllWalletsReducer = (state = { wallets: [] }, action) => {
	switch (action.type) {
		case ALL_WALLETS_REQUEST:
			return { loading: true, wallets: [] };
		case ALL_WALLETS_SUCCESS:
			return { loading: false, wallets: action.payload };
		case ALL_WALLETS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
