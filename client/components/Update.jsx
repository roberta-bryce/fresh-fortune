import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateFortune } from '../actions/thunkFortune.js'

function Update(props) {
  const dispatch = useDispatch()
  const [localFortune, setLocalFortune] = useState({ fortune: '' })
  const id = props.id

  const handleChange = (e) => {
    const { name, value } = e.target
    setLocalFortune({
      ...localFortune,
      [name]: value,
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateFortune({ id: id, fortune: localFortune.fortune }))
    setLocalFortune({ fortune: '' })
  }

  return (
    <div>
      <form>
        <label htmlFor="fortune">Change Fortune:</label>
        <input
          name="fortune"
          value={localFortune.fortune}
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  )
}

export default Update
