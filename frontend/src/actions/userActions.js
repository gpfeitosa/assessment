import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from '../constants/userConstants';
import axios from 'axios';

export const login = (username, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'/authenticate',
			{ username, password },
			config
		);

		localStorage.setItem('jwt', data.jwt);

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const register = (name, username, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		await axios.post('/user/', { name, username, password }, config);

		const { data } = await axios.post(
			'/authenticate',
			{ username, password },
			config
		);

		localStorage.setItem('jwt', data.jwt);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem('jwt');
	dispatch({ type: USER_LOGOUT });
};
