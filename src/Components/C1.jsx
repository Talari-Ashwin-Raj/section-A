import React from 'react'

const C1 = ({name,age,getValue}) => {
    let arr=[1,2,3]
  return (
    <>
    <div>C1</div>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <button onClick={getValue(arr)}>click</button>
    </>
  )
}

export default C1