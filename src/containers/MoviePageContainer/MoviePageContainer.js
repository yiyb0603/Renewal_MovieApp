import React, { useCallback, useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import MoviePage from 'components/MoviePage';
import Loading from 'components/Loading';

/* eslint-disable */

const MoviePageContainer = ({ store }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState({});
    const { handleMoviePage } = store.movieStore;

    const requestMoviePage = useCallback((id) => {
        id = sessionStorage.getItem('selectIndex');
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
    }, []);

    useEffect(() => {
        requestMoviePage();
    }, []);

    return (
        <>
            {
                isLoading ? <Loading /> : <MoviePage movieInfo ={movieInfo} />
            }
        </>
    );
}

export default inject("store")(observer(MoviePageContainer));