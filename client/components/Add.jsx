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
    <>
      <span className="createSpan">Create a Fortune:</span>
      <form className="addFortune">
        <input
          name="fortune"
          value={localFortune.fortune}
          onChange={handleChange}
        />
        <button className="onClickButton" onClick={handleAdd}>
          &#10004;
        </button>
      </form>
    </>
  )
}

export default Add
