export const localStorage = {
	getItem: <T = unknown>(key: string) => {
		const data = window.localStorage.getItem(key);
		if (data) return JSON.parse(data) as T;
		return null;
	},
	setItem: (key: string, data: unknown) => window.localStorage.setItem(key, JSON.stringify(data)),
	removeItem: (key: string) => window.localStorage.removeItem(key)
};

export const sessionStorage = {
	getItem: <T = unknown>(key: string) => {
		const data = window.sessionStorage.getItem(key);
		if (data) return JSON.parse(data) as T;
		return null;
	},
	setItem: (key: string, data: unknown) => window.sessionStorage.setItem(key, JSON.stringify(data)),
	removeItem: (key: string) => window.sessionStorage.removeItem(key)
};
