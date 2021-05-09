import { penjumlahan, perkalian } from './angka';
import { potongPajak, sapaan } from './huruf';

describe( 'basic testing', () => {
  it( 'testing sederhana', () => {
    expect( true ).toBe( true )
  } )

  it( 'menjumlahkan nilai', () => {
    expect( 1 + 1 ).toBe( 2 )
  } )

} )

describe( 'testing angka', () => {
  it( 'fungsi penjumlahan', () => {
    expect( penjumlahan( 5, 2 ) ).toBe( 7 )
    expect( penjumlahan( 4, 8 ) ).toBe( 12 )
  } )

  it( 'fungsi perkalian', () => {
    expect( perkalian( 5, 2 ) ).toBe( 10 )
    expect( perkalian( 4, 8 ) ).toBe( 32 )
  } )
} )

describe( 'testing string', () => {
  it( 'Mengetahui gaji bersih', () => {
    expect( potongPajak( 200000 ) ).toBe( `Gaji Bersih anda: ${180000}` )
    expect( potongPajak( 100000 ) ).toBe( `Gaji Bersih anda: ${90000}` )
  } )

  it( 'Sapaan', () => {
    expect( sapaan( 'Ecip' ) ).toBe( 'Halo, Ecip' )
    expect( sapaan( 'Udra' ) ).toBe( 'Halo, Udra' )
  } )
} )


