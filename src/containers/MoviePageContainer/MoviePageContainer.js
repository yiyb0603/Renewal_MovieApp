import React, { useCallback, useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import MoviePage from 'components/MoviePage';
import Loading from 'components/Loading';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router';

const MoviePageContainer = ({ store }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState({});

    const { id } = useParams();
    const { handleMoviePage } = store.movieStore;

    const requestMoviePage = useCallback(() => {
        handleMoviePage(id)
            .then(response => {
                if (response.status === "ok") {
                    setMovieInfo(response.data.movie);
                }
                setIsLoading(false);
            })

            .catch (error => {
                throw new Error(`${error}`);
            })
    }, [handleMoviePage, id]);

    useEffect(() => {
        requestMoviePage();
    }, [requestMoviePage]);

    return (
        <>
            {
                isLoading ? <Loading /> : <MoviePage movieInfo ={movieInfo} />
            }
        </>
    );
}

export default inject("store")(observer(withRouter(MoviePageContainer)));