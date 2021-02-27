import React from 'react'

const CustomInput = ({ label, value = '', name, onChange }) =>
  <div className='customInputComponent'>
    <div>
      {label}:
    </div>
    <div>
      <input type='text' name={name} value={value} onChange={onChange}/>
    </div>
  </div>

export default CustomInput
