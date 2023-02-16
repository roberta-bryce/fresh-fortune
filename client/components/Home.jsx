import React from 'react'
import { Link } from 'react-router-dom'
import Cookie from './Cookie'

function Home() {
  return (
    <>
      <div>
        <h1>Fresh Fortune</h1>
        <div className="cookieContainer">
          <Cookie />
        </div>
        <div className="buttonContainer">
          <button className="mainButton">
            <Link to="/edit">Edit</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
