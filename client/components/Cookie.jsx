import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFortunes } from '../actions/thunkFortune'

function Cookie() {
  const dispatch = useDispatch()
  const { fortunes } = useSelector((state) => state.fortuneReducer)
  console.log('COMPONENT CONLOG', fortunes)

  function getRandomInt() {
    return Math.floor(Math.random() * 3)
  }

  const n = getRandomInt()

  useEffect(() => {
    dispatch(getFortunes())
  }, [])

  return (
    <div>
      <span>{fortunes[n]?.fortune}</span>
    </div>
  )
}

export default Cookie
