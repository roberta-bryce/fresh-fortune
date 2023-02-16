import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFortune } from '../actions/thunkFortune'

function Add() {
  const dispatch = useDispatch()
  const [localFortune, setLocalFortune] = useState({ fortune: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLocalFortune({
      ...localFortune,
      [name]: value,
    })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const fortune = { ...localFortune }
    dispatch(addFortune(fortune))
    setLocalFortune({ fortune: '' })
  }

  return (
    <form className="addFortune">
      <label htmlFor="fortune">Create a new Fortune:</label>
      <input
        name="fortune"
        value={localFortune.fortune}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Submit</button>
    </form>
  )
}

export default Add
