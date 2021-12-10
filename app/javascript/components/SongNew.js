import React from 'react';

const SongNew = ({ artist, song }) => {

  const { id, name } = artist 
  const { title, album } = song
  const defaultTitle = title ? title : ""
  const defaultAlbum = album ? album : ""
  return (
    <>
      <h1>New song from the artist {name}</h1>
      <form action={`/artists/${id}/songs`} method="post">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Title</label>
            <input 
              type="text"
              required 
              defaultValue={defaultTitle}
              name="song[title]"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Album</label>
            <textarea
              className="form-control"
              required 
              defaultValue={defaultAlbum}
              name="song[album]"
            ></textarea>
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-success">Submit</button>
        <br />
        <a href={`./`}>Back</a>
      </form>
    </>
  )
}

export default SongNew;