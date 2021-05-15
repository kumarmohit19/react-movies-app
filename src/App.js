import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import './App.css';

const APi_KEY = '5b9046c69bcbbe345f7b06980ab66bd5';
const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5b9046c69bcbbe345f7b06980ab66bd5&page=1';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=5b9046c69bcbbe345f7b06980ab66bd5&page=1&query=';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      const res = await (await fetch(SEARCH_API + searchTerm)).json();

      setMovies(res.results);
      setSearchTerm('');
    }
  };

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          id='search'
          placeholder='Search..'
          className='search'
          value={searchTerm}
          onChange={onChange}
        />
      </form>
      <div className='movie-container'>
        {movies.length > 0 &&
          movies.map((movie) => <Movie {...movie} key={movie.id} />)}
      </div>
    </Fragment>
  );
}

export default App;
