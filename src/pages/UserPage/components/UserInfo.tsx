import React from "react";
import { useSelector } from "react-redux";

import { IState, IUser } from "../../../modules";

export const UserInfo = () => {
	const user = useSelector((state: IState): IUser => state.user);
	const { avatar_url, login, followers, following, name } = user;

	return (
		<div className="user__content">
			<img src={avatar_url} alt={login} />
			<div className="user__info">
				<h1>{name}</h1>
				<h2>{login}</h2>
				<ul className="user__list">
					<li className="user__item">
						<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.6311 7.15517C15.9018 7.05482 16.1945 7 16.5001 7C17.8808 7 19.0001 8.11929 19.0001 9.5C19.0001 10.8807 17.8808 12 16.5001 12C16.1945 12 15.9018 11.9452 15.6311 11.8448" stroke="#7d8590" strokeWidth="2" strokeLinecap="round" />
							<path d="M3 19C3.69137 16.6928 5.46998 16 9.5 16C13.53 16 15.3086 16.6928 16 19" stroke="#7d8590" strokeWidth="2" strokeLinecap="round" />
							<path d="M17 15C19.403 15.095 20.5292 15.6383 21 17" stroke="#7d8590" strokeWidth="2" strokeLinecap="round" />
							<path d="M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z" stroke="#7d8590" strokeWidth="2" />
						</svg> Followers: <strong>{followers}</strong>
					</li>
					<li>·</li>
					<li className="user__item">
						Following: <strong>{following}</strong>
					</li>
				</ul>
			</div>
		</div>

	)
}