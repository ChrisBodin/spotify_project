import React from 'react';

const Billboards = ({ billboards }) => {
  return (
    <>
    <h1>Billboards</h1>
    <a href="/billboards/new">
      <button>Add Billboard</button>
    </a>
    {billboards.map( (billboard) => (
      <>
      <h3>{billboard.name}</h3>
        <div>
          <a href={`/billboards/${billboard.id}`}>Show</a>
        </div>
        
        <div>
          <a href={`/billboards/${billboard.id}/edit`}>Edit</a>
        </div>

        <div>
          <a href={`/billboards/${billboard.id}`} data-method='delete'>
            Delete
          </a>
        </div>   
          </>
      )) }
    </>
  )
}

export default Billboards;