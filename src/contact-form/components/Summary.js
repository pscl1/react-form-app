import React from 'react'
import { getTranslation } from '../../main/translate'
import CustomButton from '../../components/Button'
import { IDENTIFIER } from '../../main/constants'

export const Summary = ({ data = [], language, onCancel, onFinish }) => {

  const translate = (value) => getTranslation({value, language})

  return (
    <div>
      <div>
        <h3>{translate(IDENTIFIER.SUMMARY)}</h3>
      </div>
      {
        Object.keys(data).map((key, index) => {
          const item = data[key]
          return (
            <div className='summaryItem' key={index}>
              <div>{translate(key)}:</div>
              <div>{item}</div>
            </div>
          )
        }
        )
      }
      <div className='buttonGroup'>
        <CustomButton onClick={onCancel} label={translate(IDENTIFIER.CANCEL)} />
        <CustomButton onClick={onFinish} label={translate(IDENTIFIER.CONFIRM)} />
      </div>
    </div>
  )
}