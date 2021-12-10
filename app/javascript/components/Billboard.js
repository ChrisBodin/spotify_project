import React from "react";

const Billboard = ({ billboard }) => {
  
  const { id, name, created_at } = billboard
  return (
    <>
      <h3>{billboard.name}</h3>
      <h4>{billboard.description}</h4>
      <p>
        Created: {billboard.created_at}, id: {billboard.id}
      </p>
      <a href='/'>Back</a>
      <br />
      <a href={`/billboards/${billboard.id}/artists`}>Go to artists</a>
    </>
  )
}

export default Billboard;