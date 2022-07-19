/* eslint-disable */
import React from 'react'
import { render, getByText } from '@testing-library/react'
import Login from '../../pages/Login'

jest.mock('react-router-dom')

test('Renders the homepage', () => {
   const { getByText } = render(<Login />)
   expect(getByText(/login/i)).toBeTruthy()
})
