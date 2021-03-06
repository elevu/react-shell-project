import * as React from 'react'
import { render } from '@testing-library/react'
import { App } from './App'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

test('renders learn react link', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <App name="User" />
    </Router>
  )
  const linkElement = getByText(/User!/i)
  expect(linkElement).toBeInTheDocument()
})
