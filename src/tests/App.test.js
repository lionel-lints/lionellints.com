import { render, screen } from '@testing-library/react'

import App from '../components/App.js'

test('renders learn react link', () => {
  render(<App />)
  const divElement = screen.getByText(/hi there/i)
  expect(divElement).toBeInTheDocument()
});
