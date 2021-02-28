import React from 'react'
import { ContactForm } from '../contact-form/ContactForm'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { CustomerList } from '../customerList/CustomerList'

const App = (props) => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/company">List Company Customers</Link>
            </li>
            <li>
              <Link to="/private">List Private Customers</Link>
            </li>
            <li>
              <Link to="/newCustomer">Create Customer</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/newCustomer">
            <CreateCustomer {...props} />
          </Route>
          <Route path="/company">
            <CustomerList customerType='company' {...props} />
          </Route>
          <Route path="/private">
            <CustomerList customerType='private' {...props} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function CreateCustomer ({ title }) {
  return (
    <div className='app'>
      <ContactForm title={title} lang='eng'/>
    </div>
  )
}

export default App
