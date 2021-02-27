import React from 'react'

const CustomRadio = ({ name, options, onChange }) => {

  return (
    options.map((item, index) => {
      return [
        <input key={`${index}_input`} type="radio" id={index} name={name} value={item.value} onChange={onChange} />,
        <label key={`${index}_label`} htmlFor="mc"> {item.label}</label>
      ]
    })
  )
}

export default CustomRadio
