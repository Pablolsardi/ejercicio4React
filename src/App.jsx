import 'bootstrap/dist/css/bootstrap.min.css'
import Encabezado from './components/Encabezado'
import Lista from './components/Lista'
import TextField from './components/TextField'
import { useState } from 'react'

function App() {

  const[tareas, setTareas] = useState([])

  return (
    <>
      <section className='mx-auto mt-5 w-50 text-center bg-light rounded-3 h-auto p-3'>
        <Encabezado></Encabezado>
        <TextField></TextField>
        <Lista></Lista>
      </section>
    </>
  )
}

export default App
