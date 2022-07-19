/* eslint-disable */
import React from 'react'
import { render, getByText } from '@testing-library/react'
import ForInterview from '../../pages/ForInterview'

jest.mock('react-router-dom')

test('Renders the homepage', () => {
   const { getByText } = render(<ForInterview />)
   expect(getByText(/for interview/i)).toBeTruthy()
})
