const _KEY_ = "token";

const addToken = (token) => {
	localStorage.setItem(_KEY_, token);
};

const getToken = () => {
	return localStorage.getItem(_KEY_);
};

const tokenHelper = {
	addToken,
	getToken,
};

export default tokenHelper;
