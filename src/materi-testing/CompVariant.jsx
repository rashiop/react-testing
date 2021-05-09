import { useEffect, useState } from 'react';

export const data = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu"
]

const CompVariant = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setUser('rashiop')
    }, 1000)
  }, [])

  return (
    <>
      {user ? <p>Selamat datang {user}</p> : null}
      <p>Hari-hari yang ada:</p>
      <ul>
      {
        data.map((hari, i) => <li data-testid="hari" key={i}>{hari}</li>)
      }
      </ul>
    </>
  )
}

export default CompVariant