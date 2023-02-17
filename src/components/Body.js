import React, { useEffect, useState } from 'react'
import Options from './Options';

const Body = () => {
  const defaultState = JSON.parse(localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')) : [];
  const [options, setOptions] = useState(defaultState);
  let [isValuePresent, setValuePresent] = useState(false);

  const validateInput = (option) => {
    options.includes(option) ?
      setValuePresent(isValuePresent = true) : setValuePresent(isValuePresent = false)
  }

  const handleAddOption = () => {
    const input = document.querySelector('input');
    let inputVal = input.value;
    validateInput(inputVal);

    if(inputVal && !isValuePresent) {
      setOptions([...options, inputVal]);
      input.value = '';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddOption();
  }

  const handleDelete = (id) => {
    setOptions(options.filter((option) => {
      return id !== options.indexOf(option);
    }));
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(options));
  }, [options]);

  return (
    <div className='h-auto min-h-full bg-gradient-to-r absolute w-full top-0 from-slate-500 to-stone-900'>
      <div className='px-4 md:px-12 py-12 md:py-20 bg-white rounded-[1rem] max-w-[500px] mx-2 md:mx-auto my-[10rem]'>
        <div className='todo-inputs flex relative mb-8'>

          <form action='#' className='flex-[0_0_80%] realtive' onSubmit={handleSubmit}>
            <div className='mb-2 text-[2rem] font-bold w-full font-black'> Add a New Todo list </div>
            <input type="text" className='border w-full p-2 text-[1.25rem]' />
            {isValuePresent ? <div className='text-red-600 italic absolute bottom-[-1.5rem]'>Value is already present</div> : ''}
          </form>

          <button className='absolute bottom-0 text-[1.25rem] font-extrabold p-2 rounded-[5px] bg-black text-white right-0' onClick={handleAddOption}> Add </button>
  
        </div>

        <Options options={options} handleDelete={handleDelete}/>

      </div>
    </div>
  )
}

export default Body