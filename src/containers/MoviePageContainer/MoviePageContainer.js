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
        id = sessionStorage.getItem('id');
        handleMoviePage(id)
            .then(response => {
                console.log(response);
            })

            .catch (error => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        requestMoviePage();
    }, []);

    return (
        <>
            
        </>
    );
}

export default inject("store")(observer(MoviePageContainer));