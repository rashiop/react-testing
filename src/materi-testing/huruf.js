export const potongPajak = ( gaji ) => {
  const PAJAK = 10 / 100
  const gajiBersih = gaji - ( PAJAK * gaji )

  return `Gaji Bersih anda: ${gajiBersih}`
}

export const sapaan = ( nama ) => {
  return `Halo, ${nama}`
}