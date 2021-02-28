import React, { useState } from 'react'
import { IDENTIFIER, SERVER_URL } from '../main/constants'
import { getTranslation } from '../main/translate'
import CustomRadio from '../components/Radio'
import { GenericForm } from './components/GenericForm'
import { Summary } from './components/Summary'
import './ContactForm.css'
import { request } from '../tools/tools'

const COMPANY_DATA = [IDENTIFIER.COMPANY, IDENTIFIER.USTID, IDENTIFIER.COUNTRY]
const PRIVATE_DATA = [IDENTIFIER.FIRST_NAME, IDENTIFIER.LAST_NAME, IDENTIFIER.COUNTRY, IDENTIFIER.EMAIL]

export const ContactForm = ({ title, lang = 'eng' }) => {
  const [customerType, setCustomerType] = useState('')
  const [userData, setUserData] = useState(null)

  const translate = (value) =>
    getTranslation({ value, language: lang })

  const options = [
    { value: IDENTIFIER.PRIVATE, label: translate(IDENTIFIER.PRIVATE) },
    { value: IDENTIFIER.COMPANY, label: translate(IDENTIFIER.COMPANY) }
  ]

  const onHandleSubmitForm = (data) => {
    setUserData(data)
  }

  const onCancel = () => {
    setUserData(null)
    setCustomerType('')
  }

  const onFinish = async () => {
    try {
      const result = await request({
        method: 'POST',
        url: `${SERVER_URL}/customer`,
        body: { customerType, ...userData }
      })
      alert(`Successfully created new customer with id: ${result._id}`)
      onCancel()
    } catch (err) {
      alert(`Oops, something went wrong: ${err.message} \n please try again`)
    }
  }

  let data

  if (customerType=== IDENTIFIER.PRIVATE) {
    data = PRIVATE_DATA
  } else if (customerType === IDENTIFIER.COMPANY) {
    data = COMPANY_DATA
  }

  const showForm = !userData && data
  const showSummary = !!userData
  const showQuestion = !showSummary

  return (
    <div className='contactForm'>
      {
        showQuestion &&
        (
          <div>
            {translate(IDENTIFIER.COMPANY_OR_PRIVATE)}
            <div>
              <CustomRadio options={options} onChange={(e) => setCustomerType(e.target.value)} name='company_or_private'/>
            </div>
          </div>
        )
      }

      {
        showForm && <GenericForm language={lang} handleSubmit={onHandleSubmitForm} onCancel={onCancel} options={data} />
      }

      {
        showSummary && <Summary data={userData} language={lang} onCancel={onCancel} onFinish={onFinish} />
      }

    </div>
  )
}
