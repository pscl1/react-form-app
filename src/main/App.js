import React from 'react'
import { ContactForm } from '../contact-form/ContactForm'
import './App.css'

const App = ({ title }) => {

  return (
    <div className='app'>
      <ContactForm title={title} lang='eng' />
    </div>
  )
}

export default App
