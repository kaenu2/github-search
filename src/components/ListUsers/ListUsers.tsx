import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


import { IState, IUser } from "../../modules";

export const ListUsers = () => {
	const users = useSelector((state: IState): IUser[] | [] => state.users);

	return (
		<ul className="form-search__users users">
			{
				users.length ?
					users.map(elem => {
						const { avatar_url, login } = elem;
						return (
							<li key={login} className="users__item">
								<Link to={`user/${login}`}>
									<img src={avatar_url} alt={login} />
									<h2>{login}</h2>
								</Link>
							</li>
						)
					})
					: ""
			}
		</ul>
	)
}