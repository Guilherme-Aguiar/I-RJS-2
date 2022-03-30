import { useState } from 'react';

import { MovieCard } from '../components/MovieCard';

import { Genre, Movie } from '../App'

interface MovieProps {
  movieList: Movie[],
  selectedGenre: Genre
}

export function Content(props: MovieProps) {
  // Complete aqui

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.movieList.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  );
}