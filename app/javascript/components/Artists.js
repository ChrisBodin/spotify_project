import React from 'react';

const Artists = ({ billboard, artists }) => {

  const { id, name } = billboard
  const url = `/billboards/${id}/artists/`
  return(
    <>
      <h1>All artists from {name}</h1>
      <a href={`/billboards/${id}/artists/new`} className="btn btn-dark">Add new artist</a>
      <br />
      {}
      <ul class="list-group">
        { artists.map( (artist) => (
          <li classNAme="list-group-item">
            <h3>{billboard.name}</h3>
            <div className="btn-group btn-group-toggle" data_toggle="buttons">
              <a className="btn btn-primary" href={`${url}${artist.id}`}>Show   </a>
              <a className="btn btn-warning" href={`${url}${artist.id}/edit`}>Edit   </a>
              <a className="btn btn-danger" href={`${url}${artist.id}`} data-method='delete'>Delete</a>
              <br />
              <a href={`./`}>Back</a>
            </div>
          </li>
        )) }
      </ul>
    </>
  )
}

export default Artists;