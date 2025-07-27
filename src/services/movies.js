import axios from 'axios';

console.log('API BASE URL:', process.env.REACT_APP_API_BASE_URL);

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

class MovieDataService {
    getAll(page = 0) {
        return axios.get(`${BASE_URL}/api/v1/movies?page=${page}`);
    }

    find(query, by = 'title', page = 0) {
        return axios.get(
            `${BASE_URL}/api/v1/movies?${by}=${query}&page=${page}`
        );
    }

    getRatings() {
        return axios.get(`${BASE_URL}/api/v1/movies/ratings`);
    }

    get(id) {
        return axios.get(`${BASE_URL}/api/v1/movies/id/${id}`);
    }

    createReview(data) {
        return axios.post(`${BASE_URL}/api/v1/movies/review`, data);
    }

    updateReview(data) {
        return axios.put(`${BASE_URL}/api/v1/movies/review`, data);
    }

    deleteReview(data) {
        return axios.delete(`${BASE_URL}/api/v1/movies/review`, { data });
    }
}

/* eslint import/no-anonymous-default-export: [2, {"allowNew": true}] */
export default new MovieDataService();
