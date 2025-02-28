import { useState } from 'react'
import Banner from './component/Banner'
import Header from './component/layout/Header'
import MovieList from './component/MovieList'
import { useEffect } from 'react';

function App() {
  const [movieTopRated, setMovieMovieTopRated] = useState([]);
  const [moviePopular, setMovieMoviePopular] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const url_top_rated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
      const url_popular = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const [res1, res2] = await Promise.all([
        fetch(url_top_rated, options),
        fetch(url_popular, options)
      ]);
      const data_top_rated = await res1.json();
      const data_popular = await res2.json();

      setMovieMovieTopRated(data_top_rated.results);
      setMovieMoviePopular(data_popular.results);
    }
    fetchMovie();
  }, []);

  return (
    <>
      <div className='bg-black pb-10'>
        <Header />
        <Banner />
        <MovieList title={'Phim Hot'} data={movieTopRated} />
        <MovieList title={'Phim Đề Cử'} data={moviePopular} />
      </div>
    </>
  )
}

export default App
