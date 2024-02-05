import React, { useState } from 'react';

const TextField = ({ tareas, setTareas }) => {

    const[tarea, setTarea] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas([...tareas, tarea]);
        setTarea('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 w-75 mx-auto">
                    <label htmlFor="inputTarea" className="form-label">Ingresa tu tarea</label>
                    <input type="text" className="form-control" id="inputTarea" placeholder='Presiona enter para agregar' onChange={(e)=>setTarea(e.target.value)} value={tarea}/>
                </div>
                <button type="submit" className="btn btn-dark">+ Agregar</button>
            </form>
        </>
    );
};

export default TextField;