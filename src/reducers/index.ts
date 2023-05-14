import { IActions, IState } from "../modules";

const initialState: IState = {
	users: [],
	user: {},
	term: "",
	reposUser: [],
};



const reducers = (state = initialState, actions: IActions) => {
	const { payload, type } = actions;
	const { term, users } = initialState;
	switch (type) {
		case 'SET_TERM':
			return {
				...state,
				term: payload,
			}
		case 'GET_USERS':
			return {
				...state,
				users: payload,
				isUsersError: false,
			}
		case 'GET_USER':
			return {
				...state,
				user: payload,
			}
		case 'GET_USER_REPOS':
			return {
				...state,
				reposUser: payload,
			}
		default:
			return {
				...state,
			}
	}
}


export default reducers;