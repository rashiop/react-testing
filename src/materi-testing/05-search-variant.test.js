import { render, screen } from '@testing-library/react';

import App from '../App';
import { data } from './CompVariant';

test( 'Melakukan testing untuk queryBy dan findBy', async () => {
  render( <App /> )
  const txt = screen.queryByText( /Selamat datang/g )
  expect( txt ).toBeNull()
  // expect( txt ).not.toBeInTheDocument()

  const txt2 = await screen.findByText( /Selamat datang/g )
  expect( txt2 ).toBeInTheDocument()
} )

test( 'Melakukan render li sebanyak total hari', () => {
  render( <App /> )
  const hari = screen.getAllByTestId( 'hari' )
  expect( hari ).toHaveLength( data.length )
} )