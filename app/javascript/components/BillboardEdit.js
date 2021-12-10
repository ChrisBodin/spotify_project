import React from 'react';

const BillboardEdit = ({ billboard }) => {

  const { id, name, description} = billboard
  const defaultName = name ? name : ""
  const defaultDescription = description ? description : ""
  return (
    <>
      <h1>Update Billboard</h1>
      <form action={`/billboards/${id}`} method="post">
        <input type='hidden' name='_method' value="patch"/>
       <input
          type="text"
          placeholder="Billboard Name"
          required
          defaultValue={defaultName}
          name="billboard[name]"
        />
        <input
          type="text"
          placeholder="Billboard Description"
          required
          defaultValue={defaultDescription}
          name="billboard[description]"
        />
        <button type="submit">Update Billboard</button>
      </form>
      <a href="/billboards">Back to Billboards</a>
    </>
  )
}

export default BillboardEdit;