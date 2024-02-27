"use client"
import React from 'react'
import { useState } from 'react'
const Counter = () => {
  const [click, setclick] = useState(0)
  return (
    <>
    <h1>Counter {click}</h1>
    <button onClick={() => setclick(click + 1)}>Click</button>
    </>
  )
}

export default Counter