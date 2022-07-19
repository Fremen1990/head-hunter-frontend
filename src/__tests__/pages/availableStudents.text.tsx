/* eslint-disable */
import React from 'react'
import { render, getByText } from '@testing-library/react'
import AvailableStudents from '../../pages/AvailableStudents'

jest.mock('react-router-dom')

test('Renders the homepage', () => {
   const { getByText } = render(<AvailableStudents />)
   expect(getByText(/available students/i)).toBeTruthy()
})
