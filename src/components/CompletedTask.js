import React from 'react'
import Option from './Option'

const CompletedTask = (props) => {
  const optionsArr = props.complete.map((option, index) =>
    <Option option={option} key={index} id={index} handleDelete={props.handleDelete} />)

  return (
    <>
      <div className='font-extrabold border-b mb-8 pb-2 text-[1.5rem] mt-16 bg-black text-center text-white'> Completed Task</div>
      {optionsArr}
    </>
  )
}

export default CompletedTask