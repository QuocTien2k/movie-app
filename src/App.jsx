import { useState } from 'react'
import Banner from './component/Banner'
import Header from './component/layout/Header'
import MovieList from './component/MovieList'
import { useEffect } from 'react';
import MovieSearch from './component/MovieSearch';
import { MovieProvider } from './component/context/MovieProvider';

function App() {
  const [movieTopRated, setMovieMovieTopRated] = useState([]);
  const [moviePopular, setMovieMoviePopular] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (query_string) => {
    setMovieSearch([]);
    try {
      const url_search = `https://api.themoviedb.org/3/search/movie?query=${query_string}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const res_search = await fetch(url_search, options);
      const data_search = await res_search.json();
      setMovieSearch(data_search.results);
    } catch (error) {
      console.log(error);
    }
  }

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
      <MovieProvider>
        <div className='bg-black pb-10'>
          <Header onSearch={handleSearch} />
          <Banner />
          {movieSearch.length > 0 ? <MovieSearch title={'Kết quả tìm kiếm: '} dataSearch={movieSearch} /> : (
            <>
              <MovieList title={'Phim Hot'} data={movieTopRated} />
              <MovieList title={'Phim Đề Cử'} data={moviePopular} />
            </>
          )}
        </div>

      </MovieProvider>
    </>
  )
}

export default App
