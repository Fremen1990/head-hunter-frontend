/* eslint-disable */
import React from 'react'
import { render, getByText } from '@testing-library/react'
import Home from '../../pages/Home'

jest.mock('react-router-dom')

test('Renders the homepage', () => {
   const { getByText } = render(<Home />)
   expect(getByText(/head hunter/i)).toBeTruthy()
})
