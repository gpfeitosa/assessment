import {
	WALLETS_FAIL,
	WALLETS_REQUEST,
	WALLETS_SUCCESS,
} from '../constants/walletConstants';

export const walletReducer = (state = { wallets: [] }, action) => {
	switch (action.type) {
		case WALLETS_REQUEST:
			return { ...state, loading: true };
		case WALLETS_SUCCESS:
			return { ...state, loading: false, wallets: action.payload };
		case WALLETS_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
