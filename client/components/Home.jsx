import React from 'react'
import { Link } from 'react-router-dom'
import Cookie from './Cookie'

function Home() {
  return (
    <>
      <div>
        <h1 className="freshHeading">Fresh Fortune</h1>
        <div>
          <Cookie />
        </div>
        <button>
          <Link to="/edit">Edit</Link>
        </button>
      </div>
    </>
  )
}

export default Home
