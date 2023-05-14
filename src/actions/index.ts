import { IUser } from "../modules";

const setTerm = (term: string) => {
	return { type: 'SET_TERM', payload: term };
}
const getUsers = (data: IUser[]) => {
	return { type: 'GET_USERS', payload: data };
}
const getUser = (data: IUser) => {
	return { type: 'GET_USER', payload: data };
}
const getRepositUser = (data: any) => {
	return { type: 'GET_USER_REPOS', payload: data };
}



export {
	setTerm,
	getUsers,
	getUser,
	getRepositUser,
}