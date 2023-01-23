import React from 'react'
import { Link } from 'react-router-dom'
import Cookie from './Cookie'

function Home() {
  return (
    <>
      <div>
        <h1>Fresh Fortune</h1>
        <h3>Click the Cookie to See Your Fortune</h3>
        <button>
          <Link to="/edit">Edit</Link>
        </button>
      </div>
      <div>
        <Cookie />
      </div>
    </>
  )
}

export default Home
