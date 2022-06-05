import useAsync from "./useAsync";

const DEFAULT_OPTIONS = {
	headers: { "Content-Type": "application/json" },
};

/**
 *
 * @param {string} endpoint - URL endpoint to be fetched
 * @param {RequestInit} options - Fetch options
 * @param {Array<any>} dependencies - Dependencies for fetching again
 * @returns
 */
export default function useFetch(endpoint, options = {}, dependencies = []) {
	return useAsync(() => {
		return fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, { ...DEFAULT_OPTIONS, ...options }).then(
			(res) => {
				if (res.ok) return res.json();
				return res.json().then((json) => Promise.reject(json));
			}
		);
	}, dependencies);
}
