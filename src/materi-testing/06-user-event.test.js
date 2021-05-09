import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import CompUserEvent from './CompUserEvent';

const MOCK_SUBMIT_BTN = jest.fn();

test( 'testing onchange ketika typing', () => {
  render( <App /> )
  const input = screen.getByPlaceholderText( 'Input Value' )
  userEvent.type( input, 'rashiop puwawaw' )
  expect( screen.getByText( /Anda mengetik rashiop puwawaw/g ) ).toBeInTheDocument()

} )

it( 'test onClick pada userevent', () => {
  render( <CompUserEvent onSubmit={MOCK_SUBMIT_BTN} /> )
  const textSubmit = screen.getByTestId( 'text-submit' )
  userEvent.click( textSubmit )
  expect( MOCK_SUBMIT_BTN ).toHaveBeenCalled()
} )