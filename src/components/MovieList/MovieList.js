import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { withRouter, Link } from 'react-router-dom';
import './MovieList.scss';

const MovieList = ({ movieList }) => {
    const [searchValue, setSearchValue] = useState('');

    const onChange = (e) => {
        setSearchValue(e.target.value);
    }

    const searchToComponent = (param) => {
        param.sort();
        param = param.filter((contact) => {
                return (
                    contact.title.toLowerCase().indexOf(searchValue) > -1 || contact.title.toUpperCase().indexOf(searchValue) > -1
                );
            }
        );

        return param.map((data) => {
            const { id, language, title, year, rating, genres, medium_cover_image, summary } = data;
            return (
                <Link to ={`/page/${id}`} key ={id}>
                    <div className ="MovieList-Movie">
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
                        <div className ="MovieList-Movie-Language">
                            Language: {language}
                        </div>
                        <div>{summary}</div>
                    </div>
                </Link>
            );
        })
    };

    return (
        <div className ="MovieList">
            <h1 className ="MovieList-Title">Welcome To Movie App!</h1>
            <input className ="MovieList-Search" type ="text" value ={searchValue} onChange ={onChange} placeholder ="Search Movies" />
            {searchToComponent(movieList)}
        </div>
    );
}

MovieList.propTypes = {
    movieList: PropTypes.array.isRequired
};

export default withRouter(MovieList);