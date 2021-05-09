import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import App from '../App';

jest.mock( 'axios' )

test( 'untuk memastikan list user dg call axios', async () => {
  const users = [
    {
      id: 1,
      name: 'Rashiop'
    },
    {
      id: 2,
      name: 'Ecip'
    },
    {
      id: 3,
      name: 'Belang'
    }
  ]

  axios.get.mockImplementation( () => Promise.resolve( {
    data: users
  } ) )

  render( <App /> )
  const btn = screen.getByTestId( 'get-users' );
  userEvent.click( btn )

  await waitFor( () => {
    expect( screen.getAllByTestId( 'user-name' ) ).toHaveLength( users.length )
  } )
} )