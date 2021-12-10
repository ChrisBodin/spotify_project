import React from 'react';

const ArtistEdit = ({ billboard, artist }) => {

  const { id } = billboard 
  const { name, rank } = artist
  const defaultName = name ? name : ""
  const defaultRank = rank ? rank : ""
  return (
    <>
      <h1>New artist from the Billboard {id}</h1>
      <form action={`/billboards/${id}/artists/${artist.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Name</label>
            <input 
              className="form-control"
              type="text"
              required 
              defaultValue={defaultName}
              name="artist[name]"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Rank</label>
            <textarea
              className="form-control"
              required 
              defaultValue={defaultRank}
              name="artist[rank]"
            ></textarea>
          </div>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ArtistEdit;