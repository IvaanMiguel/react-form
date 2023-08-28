function Table({ headers }) {
  return (
    <table className='table table-bordered table-light table-hover'>
      <thead>
        <tr className='text-center d-flex'>
          <th className='p-1 col-1'></th>
          { headers.map(header => <th className='p-1 col text-truncate'>{ header }</th>) }
        </tr>
      </thead>
      <tbody>
        <tr className='text-center d-flex'>
          <th className='p-1 col-1 text-truncate'>1</th>
          <td className='p-1 col text-truncate'>Miguel Iván</td>
          <td className='p-1 col text-truncate'>Domínguez Cota</td>
          <td className='p-1 col text-truncate'>miguel@gmail.com</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
