import React from 'react';

const Songs = ({ artist, songs }) => {

  const { id, name } = artist
  const url = `/artists/${id}/songs/`
  return(
    <>
      <h1>All songs from {name}</h1>
      <a href={`/artists/${id}/songs/new`} className="btn btn-dark">Add new song</a>
      <br />
      <ul class="list-group">
        { songs.map( (song) => (
          <li className="list-group-item">
            <h3>{artist.name}</h3>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <a className="btn btn-primary" href={`${url}${song.id}`}>Show</a>
              <a className="btn btn-warning" href={`${url}${song.id}/edit`}>Edit</a>
              <a className="btn btn-danger" href={`${url}${song.id}`} data-method='delete'>
                Delete
              </a>
            </div>
          </li>
        )) }
      </ul>
    </>
  )
}

export default Songs;