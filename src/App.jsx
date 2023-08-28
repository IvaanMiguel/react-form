import './App.css'
import Textfield from './components/textfield'
import Table from './components/table'

function App() {
  return (
    <div className="w-75 mx-auto">
      <h1 className='text-center'>React form</h1>
      <form className='border p-3 rounded'>
        <Textfield label='Nombre' name='name' />
        <Textfield label='Apellidos' name='lastNames' />
        <Textfield label='Email' name='email' />
        <button className='btn btn-primary'>Guardar</button>
      </form>
      <div className='mt-4'>
        <Table headers={[ 'Nombre', 'Apellidos', 'Email' ]} />
      </div>
    </div>
  )
}

export default App
