import MovieRepository from './MovieRepository';

class MovieStore {
    handleMovieList = async () => {
        try {
            const response = await MovieRepository.handleMovieList();
            return new Promise((success, failed) => {
                success(response);
            })
        } catch (error) {
            return new Promise((success, failed) => {
                failed(error);
            })
        }
    }

    handleMoviePage = async (id) => {
        try {
            const response = await MovieRepository.handleMoviePage(id);
            return new Promise((success, failed) => {
                success(response);
            })
        } catch (error) {
            return new Promise((success, failed) => {
                failed(error);
            })
        }
    }
}

export default MovieStore;