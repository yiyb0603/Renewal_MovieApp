import React, { useCallback, useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import MoviePage from 'components/MoviePage';
import Loading from 'components/Loading';

/* eslint-disable */

const MoviePageContainer = ({ store }) => {
    const [movieInfo, setMovieInfo] = useState({});
    const { handleMoviePage } = store.movieStore;

    const requestMoviePage = useCallback((id) => {
        
    }, []);

    return (
        <>
            
        </>
    );
}

export default inject("store")(observer(MoviePageContainer));