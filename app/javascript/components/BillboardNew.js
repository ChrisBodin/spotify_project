import React from 'react';

const BillboardNew = ({ billboard }) => {

  const { name, description } = billboard

  const defaultName = name ? name : ""
  const defaultDescription = description ? description : ""
  return (
    <>
    <h1>Create a new Billboard</h1>
    <form action="/billboards" method="post">
      <input
      type="text"
      placeholder="Name of the Billboard"
      required
      defaultValue={defaultName}
      name="billboard[name]"
      />
      <input
      type="text"
      placeholder="Description of the Billboard"
      required
      defaultValue={defaultDescription}
      name="billboard[description]"
      />
      <button type='submit'>Add Billboard</button>
    </form>
    <a href="/billboards">Back to Billboard</a>
    </>
  )
}

export default BillboardNew;