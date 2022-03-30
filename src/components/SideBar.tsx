import { useState } from 'react';

import { Button } from '../components/Button';

import { Genre } from '../App'

interface GenreResponseProps {
  genresList: Genre[],
  onSelectGenre: any
}

export function SideBar(props: GenreResponseProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleSelectChange = (id: number) => {
    props.onSelectGenre(id);
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genresList.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleSelectChange(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}