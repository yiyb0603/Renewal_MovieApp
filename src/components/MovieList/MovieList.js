import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import './MovieList.scss';

/* eslint-disable */

const MovieList = ({ movieList }) => {
    console.log(movieList);

    const movies = movieList.map(data => {
        const { id, language, url, runtime, title, year, rating, genres, medium_cover_image, summary } = data;
        return (
            <div className ="MovieList-Movie" key ={id}>
                <img className ="MovieList-Movie-Poster" src ={medium_cover_image} alt ={title} title ={title} />
                <h2>
                    {title} ({year})
                    <FaStar className ="MovieList-Movie-Star" /> {rating}
                </h2>
                <ul className ="MovieList-Movie-Genre">
                    <h4>Genres:</h4>
                    {
                        genres.map((data, index) => (
                            <li className ="MovieList-Movie-Genre-Genre" key ={index}>{data}</li>
                        ))
                    }
                </ul>
                <div className ="MovieList-Movie-Language">Language: {language}</div>
                <div>Summary: {summary}</div>
            </div>
        )
    })
    return (
        <div className ="MovieList">
            <h1 className ="MovieList-Title">Welcome To Movie App!</h1>
            <div className ="MovieList-Wrapper">
                {movies}
            </div>
        </div>
    );
}

MovieList.propTypes = {
    movieList: PropTypes.object.isRequired
};

export default MovieList;