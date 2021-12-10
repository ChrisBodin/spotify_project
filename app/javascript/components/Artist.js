import React from 'react';

const Artist = ({ billboard, artist }) => {

  const { id, description, image } = billboard
  const { name, rank } = artist
  return (
    <>
      <h1>Artist: { name }
      <br />
        Ranked #{rank}
      </h1>
      <h1>Billboard: { id, description, image }</h1>
      <a href={`/billboards/${id}`}>Show Billboards</a>
      <br />
      <a href={`/artists/${artist.id}/songs`}>Go to Songs</a>
      <br />
      <a href={`./`}>Back</a>
    </>
  )
}

export default Artist;