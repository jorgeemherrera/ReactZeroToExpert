// import React, { Fragment } from 'react'
import React from 'react'


// Component

// Functional Component
const FirstApp = () => {
  const saludo = 'Hello world from Constant'
  return (
    <>
    <h1>{ saludo }</h1>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>My first application</p>
    </>
  );
}

export default FirstApp;