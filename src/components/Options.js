import React from 'react'
import Option from './Option'

const Options = (props) => {
  return props.options.map((option, index) => 
    <Option option={option} key={index} id={index} handleDelete={props.handleDelete}/>
  )
}

export default Options