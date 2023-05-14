export default class GetService {
	_apiBase: string
	constructor() {
		this._apiBase = 'https://api.github.com';
	}

	async getService(url: string) {
		const res = await fetch(this._apiBase + url);

		if (!res.ok) {
			throw new Error();
		}

		return res.json();
	}

	getUsers = async (term: string) => {
		return await this.getService(`/search/users?q=${term}`);
	}

	getUser = async (name: string) => {
		return await this.getService(`/users/${name}`);
	}

	getReposs = async (term: string) => {
		return await this.getService(`/search/repositories?q=${term}`);
	}

	getRepos = async (name: string) => {
		return await this.getService(`/users/${name}/repos`);
	}

}