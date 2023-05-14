export interface IActions {
	type: string,
	payload: string,
}





export interface IState {
	users: [] | IUser[],
	user: IUser,
	term: string,
	reposUser: IUserRepos[],
}

export interface IGetUsers {
	total_count: number,
	incomplete_results: boolean,
	items: IUser[],
}


export interface IUser {
	login?: string,
	id?: number,
	node_id?: string,
	avatar_url?: string,
	gravatar_id?: string,
	bio?: string | null,
	blog?: string,
	company?: string | null,
	created_at?: string,
	email?: string | null,
	events_url?: string,
	followers?: number,
	followers_url?: string,
	following?: number,
	following_url?: string,
	gists_url?: string,
	hireable?: string | null,
	html_url?: string,
	location?: string | null,
	name?: string,
	organizations_url?: string,
	public_gists?: number,
	public_repos?: number,
	received_events_url?: string,
	repos_url?: string,
	site_admin?: boolean,
	starred_url?: string,
	subscriptions_url?: string,
	twitter_username?: string | null,
	type?: string,
	updated_at?: string,
	url?: string,
}

// 

export interface IUserRepos {
	name: string,
	description: string,
	language: string,
	private: boolean,
}