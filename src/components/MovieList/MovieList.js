import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import './MovieList.scss';

/* eslint-disable */

const MovieList = ({ movieList, history }) => {
    const [searchValue, setSearchValue] = useState('');

    const onChange = (e) => {
        setSearchValue(e.target.value);
    }

    const searchToComponent = (param) => {
        param.sort();
        param = param.filter((contact) => {
                return contact.title.toLowerCase().indexOf(searchValue) > -1 || contact.title.toUpperCase().indexOf(searchValue) > -1;
            }
        );

        return param.map((data) => {
            const { id, language, url, runtime, title, year, rating, genres, medium_cover_image, summary } = data;
            return (
                <div className ="MovieList-Movie" key ={id} onClick ={() => {
                    sessionStorage.setItem('selectIndex', id);
                    history.push("/page");
                }}>
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
                    <div>{summary}</div>
                </div>
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
    movieList: PropTypes.object.isRequired
};

export default withRouter(MovieList);