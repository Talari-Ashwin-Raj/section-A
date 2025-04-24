import React, { Components } from 'react'
import { useState } from 'react'
import C1 from "/Users/ashwin/Desktop/website/reactProject/src/Components/C1.jsx"
const App = () => {
    let name=useState('ashwin')
    let age=useState(100)
    function getValue(arr){
        console.log(arr)
    }
  return (
    <>
    <div>App</div>
    <C1 name={name} age={age} getValue={getValue}/>
    </>
  )
}

export default App