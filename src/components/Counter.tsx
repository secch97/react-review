import React, { useState } from 'react'

const Counter = () => {

    const [value, setValue] = useState<number>(10);

    const increment = (number: number) => {
        setValue(value+number);
    }

  return (
    <>
       <h3>Counter <small>{value}</small></h3> 
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

export default Counter