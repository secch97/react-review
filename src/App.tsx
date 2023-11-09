import React from 'react'
import Login from './components/Login'
// import CounterHook from './components/CounterHook'
// import Counter from './components/Counter'
// import LiteralObjects from './typescript/LiteralObjects'
// import Functions from './typescript/Functions'
// //import BasicTypes from './typescript/BasicTypes'

const App = () => {
  return (
    <div className='mt-2'>
      <h1>
        Introduccion a Typescript
      </h1>
      <hr></hr>
      {/*<BasicTypes/>*/}
      {/*<LiteralObjects/>*/}
      {/* <Functions/> */}
      {/* <Counter></Counter> */}
      {/* <CounterHook/> */}
      <Login></Login>
    </div>
  )
}

export default App