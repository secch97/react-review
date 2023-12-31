import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

const CounterHook = () => {

    const [value, increment] = useCounter();

  return (
    <>
       <h3>Counter hook <small>{value}</small></h3> 
       <button
        className='btn btn-primary'
        onClick={()=>increment(1)}
       >
        +1
       </button>
       &nbsp;
       <button
        className='btn btn-primary'
        onClick={()=>increment(-1)}
       >
        -1
       </button>
    </>
  )
}

export default CounterHook