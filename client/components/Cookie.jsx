import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFortunes } from '../actions/thunkFortune'

function Cookie() {
  const dispatch = useDispatch()
  const { fortunes } = useSelector((state) => state.fortuneReducer)
  const [fortuneIndex, setFortuneIndex] = useState(
    getRandomInt(fortunes.length)
  )

  function getRandomInt() {
    return Math.floor(Math.random() * 3)
  }

  useEffect(() => {
    dispatch(getFortunes())
  }, [])

  function randomOnClick() {
    setFortuneIndex(getRandomInt(fortunes.length))
  }

  useEffect(() => {
    setFortuneIndex(getRandomInt(fortunes.length))
  }, [fortunes])

  return (
    <button className="cookie" onClick={randomOnClick}>
      <span className="fortuneText">{fortunes[fortuneIndex]?.fortune}</span>
      <div className="cookieHalf L"></div>
      <div className="cookieHalf R"></div>
    </button>
  )
}

export default Cookie
