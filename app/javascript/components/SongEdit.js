import React from 'react';

const SongEdit = ({ artist, song }) => {

  const { id, name } = artist 
  const { title, duration, album } = song
  const defaultTitle = title ? title : ""
  const defaultAlbum = album ? album : ""
  return (
    <>
      <h1>Edit song from the artist {name}</h1>
      <form action={`/artists/${id}/songs/${song.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Title</label>
            <input 
              className="form-control"
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
      </form>
    </>
  )
}

export default SongEdit;