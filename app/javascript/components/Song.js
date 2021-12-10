import React from 'react';

const Song = ({ song, artist }) => {

  const { id, title, duration, album } = song
  return (
    <>
      <h3>Song title: {title}</h3>
      <p>
        {duration}
        <br />
        {album}
        </p>
        <br />
        <a href={`/artists/${artist.id}/songs`}>Go to songs</a>
        <a href={`./`}>Back</a>
    </>
  )
}

export default Song;