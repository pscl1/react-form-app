import React, { useState, useEffect } from 'react'
import CustomInput from '../../components/Input'
import { getTranslation } from '../../main/translate'
import { IDENTIFIER } from '../../main/constants'
import CustomButton from '../../components/Button'

export const GenericForm = ({ handleSubmit, onCancel, language, options = [] }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    setData({})
  }, [options])

  const onSetData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const isValid = Object.keys(data).length === options.length

  const onCancelation = () => {
    setData({})
    onCancel()
  }

  return (
    <div>
      {
        options.map((item, index) => (
          <div key={index}>
            <CustomInput
              value={data[item]}
              name={item}
              label={getTranslation({value: item, language })}
              onChange={onSetData}
            />
          </div>
        ))
      }

      <div className='buttonGroup'>
        <CustomButton
          label={getTranslation({value: IDENTIFIER.CANCEL, language })}
          onClick={onCancelation}
        />
        <CustomButton
          disabled={!isValid}
          label={getTranslation({value: IDENTIFIER.CONFIRM, language })}
          onClick={() => handleSubmit(data)}
        />
      </div>
    </div>
  )
}
