import axios from 'axios';

class MovieRepository {
    handleMovieList = async () => {
        try {
            const { data } = await axios.get(`https://yts-proxy.now.sh/list_movies.json?sort_by=rating`);
            return data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    handleMoviePage = async (id) => {
        try {
            const { data } = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            return data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}

export default new MovieRepository();