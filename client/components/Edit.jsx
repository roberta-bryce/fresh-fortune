import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Update from './Update.jsx'
import Add from './Add.jsx'
import { getFortunes, delFortune } from '../actions/thunkFortune'

function Edit() {
  const dispatch = useDispatch()
  const { fortunes } = useSelector((state) => state.fortuneReducer)

  useEffect(() => {
    dispatch(getFortunes())
  }, [])

  function handleDelete(id) {
    dispatch(delFortune(id))
  }

  return (
    <>
      <div className="editContainer">
        <div className="fortuneList">
          <ul>
            {fortunes.map((fortunes) => (
              <li key={fortunes.id}>
                {fortunes?.fortune}
                <button
                  className="onClickButton"
                  onClick={() => handleDelete(fortunes.id)}
                >
                  &#10006;
                </button>
                <Update id={fortunes.id} />
              </li>
            ))}
          </ul>
        </div>
        <Add />
      </div>
      <div className="buttonContainer">
        <button className="mainButton">
          <Link to="/">Home</Link>
        </button>
      </div>
    </>
  )
}

export default Edit
