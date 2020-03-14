import React, { useCallback, useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import MovieList from 'components/MovieList';
import Loading from 'components/Loading';

/* eslint-disable */

const MovieListContainer = ({ store }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const { handleMovieList } = store.movieStore;

    const requestMovieList = useCallback(() => {
      handleMovieList()
        .then(response => {
            if (response.status === "ok") {
                setMovieList(movieList.concat(response.data.movies));
            }
            setIsLoading(false);
        })

        .catch (error => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        requestMovieList();
    }, []);

    return (
        <>
            {
                isLoading ? <Loading /> : <MovieList movieList ={movieList} />
            }
        </>
    );
}

export default inject("store")(observer(MovieListContainer));