import React from "react";
import { useSelector } from "react-redux";
import { IState, IUserRepos } from "../../../modules";


export const UserRepos = () => {
	const repos = useSelector((state: IState): IUserRepos[] => state.reposUser);
	console.log(repos);

	const spanColor = (str: string) => {
		switch (str) {
			case 'SCSS':
				return '_scss';
			case 'HTML':
				return '_html';
			case 'JavaScript':
				return '_javascript';
			case 'CSS':
				return '_css';
			case 'TypeScript':
				return '_typescript';
		}
	}

	return (
		<ul className="user__repos user-repos">
			{
				repos.map(elem => {
					const { name, description, language, private: privateState } = elem;
					return (
						<li className="user-repos__item" key={name}>
							<div className="user-repos__left left-repos">
								<div className="left-repos__info">
									<p className="left-repos__name">{name}</p>
									<p className="left-repos__des">{description}</p>
								</div>
								<p><span className={`left-repos__icon ${spanColor(language)}`}></span>{language}</p>
							</div>
							<div className="user-repos__end">
								<p>{privateState ? "Private" : "Public"}</p>
							</div>
						</li>
					)
				})
			}
		</ul>
	)
}