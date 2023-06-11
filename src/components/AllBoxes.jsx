import React from 'react'
import Graph from './Graph'
import Fourbox from './Fourbox'
import Traffic from './Traffic'

const AllBoxes = () => {
  return (
    <div className=''>
      <div className='flex flex-row place-items-center justify-between'>
        <Graph />
        <Fourbox />
      </div>
        <Traffic />
    </div>
  )
}

export default AllBoxes