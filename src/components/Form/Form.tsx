import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState, IUser } from "../../modules";
import GetService from "../../service";

export const Form = () => {
	const term = useSelector((state: IState): string => state.term);
	const users = useSelector((state: IState): IUser[] => state.users);
	const dispatch = useDispatch();
	const getService = new GetService();


	const onSubmitForm = (e: any) => {
		e.preventDefault();
		getService.getUsers(term).then(data => {
			dispatch({ type: 'GET_USERS', payload: data.items });
			if (!users.length) {
				dispatch({ type: 'USERS_ERROR' });
			}
		});
	}


	const onChengeInput = (e: any) => {
		const value: string = e.target.value;
		dispatch({ type: 'SET_TERM', payload: value });
	}

	return (
		<form onSubmit={(e) => onSubmitForm(e)} className="form-search__form">
			<input type="text" value={term} onChange={(e) => onChengeInput(e)} />
			<button>Поиск</button>
		</form>
	)
} 