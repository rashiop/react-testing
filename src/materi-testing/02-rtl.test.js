import { render, screen } from '@testing-library/react';

import App from '../App';

test( 'Menyapa ecip ada di app', () => {
  render( <App /> )
  const text = screen.getByText( 'Halo, Ecip' )
  expect( text ).toBeInTheDocument()
} )