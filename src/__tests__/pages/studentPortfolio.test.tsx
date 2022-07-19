/* eslint-disable */
import React from 'react'
import { render, getByText } from '@testing-library/react'
import StudentPortfolio from '../../pages/StudentPortfolio'

jest.mock('react-router-dom')

test('Renders the homepage', () => {
   const { getByText } = render(<StudentPortfolio />)
   expect(getByText(/student portfolio/i)).toBeTruthy()
})
