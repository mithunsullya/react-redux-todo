import React from 'react'

const Option = (props) => {
  const {index, option, id} = props
  return (
    <div className='todos flex items-center text-[1.25rem] font-extrabold justify-between mb-6' id={id}>
      <div className='todo' key={index}>{option}</div>
      <button className='bg-red-800 text-white font-extrabold px-4 py-2 text-[1.125rem] rounded-[5px]' onClick={() => props.handleDelete(id)}>Delete</button>
    </div>
  );
}

export default Option