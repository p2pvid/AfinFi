import axios from 'axios';
import LOCAL_STORAGE_KEY from './consts'

const { SDK_ACCESS_TOKEN } = LOCAL_STORAGE_KEY
const accessApiKey = '531fb8af00c36cd09247f8ea9b4fcf52c5f4908d1dde15b438b2ea8f0ddee479';
const baseURL = `https://cloud-wallet-api.prod.affinity-project.org/api/v1/`

const cloudWalletApi = axios.create({
	baseURL,
	headers: {
		'Api-Key': accessApiKey,
		'Content-Type': 'application/json',
	},
});

// Set the AUTH token for subsequent requests
cloudWalletApi.interceptors.request.use(req => {
	const token = localStorage.getItem(SDK_ACCESS_TOKEN);
	req.headers.Authorization =  token ? `Bearer ${token}` : '';
	return req;
});

export default cloudWalletApi
