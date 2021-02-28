import React, { useState, useEffect } from 'react'
import { request } from '../tools/tools'
import { IDENTIFIER, SERVER_URL } from '../main/constants'

export const CustomerList = ({customerType}) => {
  const [customers, setCustomers] = useState([])

  const getCustomers = async () => {
    const result = await request({
      method: 'GET',
      url: `${SERVER_URL}/customer?search[customerType]=${customerType}`
    })
    setCustomers(result)
  }

  useEffect(() => {
    getCustomers()
  }, [customerType])

  return (
    <div>
      {
        customers.length === 0 &&
          <span>No entries yet, please create some</span>
      }
      <ul>
      {
        customers.map((item, index) => {
          const value = item.customerType === IDENTIFIER.PRIVATE
            ? `${item.firstName} ${item.lastName}`
            : item.company
          return (
            <li key={index}>
              <a target='_blank' href={`${SERVER_URL}/customer/${item._id}/pdf`}>{value}</a>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}