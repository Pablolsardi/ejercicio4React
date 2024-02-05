import React from 'react';

const TextField = () => {
    return (
        <>
            <form>
                <div className="mb-3 w-75 mx-auto">
                    <label for="inputTarea" className="form-label">Ingresa tu tarea</label>
                    <input type="text" className="form-control" id="inputTarea" placeholder='Presiona enter para agregar'/>
                </div>
                <button type="submit" className="btn btn-dark">+ Agregar</button>
            </form>
        </>
    );
};

export default TextField;