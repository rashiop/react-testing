import { useState } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show)

  return (
    <section>
      <h2>Saya sedang {show ? 'Muncul': 'Ngumpet'}</h2>
        <button onClick={toggleShow}>
          {show ? 'Sembunyikan' : 'Munculkan'}
        </button>
    </section>
  )
}

export default ShowHide