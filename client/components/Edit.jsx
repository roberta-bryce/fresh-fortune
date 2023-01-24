import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Update from './Update.jsx'
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
      <h2>Edit</h2>
      <div>
        <ul>
          {fortunes.map((fortunes) => (
            <li key={fortunes.id}>
              {fortunes?.fortune}
              <button onClick={() => handleDelete(fortunes.id)}>del</button>
              <Update id={fortunes.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Edit
