import { fireEvent, render, screen } from '@testing-library/react';

import App from '../App';

describe( 'Untuk testing select element dan dijadikan expect value', () => {
  test( 'Memastikan text yg dirender pertama betul', () => {
    render( <App /> )
    const txt = screen.getByText( 'Saya sedang Ngumpet' )
    expect( txt ).toBeInTheDocument()

  } )


  test( 'Memastikan content text button sesuai saat dirender pertama', () => {
    render( <App /> )
    const txt = screen.getByText( 'Munculkan' )
    expect( txt ).toBeInTheDocument()

  } )
} )

describe( 'Melakukan selecting element untuk diberikan trigger fireEvent', () => {
  test( 'Memastikan test yang dirender setelah fireEvent', () => {
    render( <App /> )
    const btn = screen.getByText( 'Munculkan' )
    fireEvent.click( btn )

    const txt = screen.getByText( 'Saya sedang Muncul' )
    expect( txt ).toBeInTheDocument()
  } )

  test( 'Memastikan text dalam button yang dirender setelah fireEvent sesuai', () => {
    render( <App /> )
    const btn = screen.getByText( 'Munculkan' )
    fireEvent.click( btn )

    const btnResult = screen.getByText( 'Sembunyikan' )
    expect( btnResult ).toBeInTheDocument()
  } )
} )