import React from 'react'

export const DashedCard = (props) => {
  return (
    <div className=' p-12 rounded-md shadow-2xl h-[40vh] flex flex-col border-2 border-dashed border-gray-400 justify-around items-center'>
      {props.children}
    </div>
  )
}
