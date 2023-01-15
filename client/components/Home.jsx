import React from 'react'
import Cookie from './Cookie'

function Home() {
  return (
    <>
      <div>
        <h1>Fresh Fortune</h1>
        <h3>Click the Cookie to See Your Fortune</h3>
        <h3>Edit</h3>
      </div>
      <div>
        <Cookie />
      </div>
    </>
  )
}

export default Home
