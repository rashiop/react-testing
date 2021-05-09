const CompRole = () => {
  return (
    <>
      <a href="https://github.com/rashiop" rel="external noreferrer" target="_blank">Link github repo</a>
      <figure>
        <img
          src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1870&h=935&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2021%2F01%2F21%2Fcalico-cat.jpg"
          alt=""
          style={{width: 100, height: 100, objectFit: 'cover'}}  
        />
        <figcaption>Udra's lookalike</figcaption>
      </figure>
      <label htmlFor="email">Your Email</label>
      <input type="email" name="email" placeholder="rashiop@email.com" data-testid="email-test-id" />
    </>
  )
}

export default CompRole