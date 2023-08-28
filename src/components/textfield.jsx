function Textfield({ label, name }) {
  return (
    <div className='mb-3'>
      {
        label ? (
          <label>{ label }</label>
        ) : (null)
      }
      <input className='form-control mt-2' type='text' name={ name }/>
    </div>
  )
}

export default Textfield
