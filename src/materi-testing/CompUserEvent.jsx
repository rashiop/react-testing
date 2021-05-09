import { useState } from 'react';

const CompUserEvent = ({
  onSubmit
}) => {
  const [value, setValue] = useState("");
  // const onSubmit = () => {
  //   console.log("Call API Submit")
  // }

  return (
    <>
      <div>
        <p>Anda mengetik {value}</p>
        <input
          type="text"
          placeholder="Input Value"
          value={value}
          onChange={(e) => setValue(e?.target?.value)}
        />
        <p onClick={onSubmit} data-testid="text-submit">
          Submit
        </p>
      </div>
    </>
  )
}

export default CompUserEvent