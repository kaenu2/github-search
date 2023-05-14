import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./UserPage.scss";

import GetService from "../../service";

import { IState, IUser } from "../../modules";
import { UserInfo } from "./components/UserInfo";
import { UserRepos } from "./components/UserRepos";

export const UserPage = () => {
	const params: any = useParams().login;
	const dispatch = useDispatch();

	const getService = new GetService();

	useEffect(() => {
		getService.getUser(params).then(data => {
			dispatch({ type: 'GET_USER', payload: data });
		});
		getService.getRepos(params).then(data => dispatch({ type: 'GET_USER_REPOS', payload: data }));
	}, []);

	return (
		<section className="page__user user">
			<UserInfo />
			<UserRepos />
		</section>
	)
}



