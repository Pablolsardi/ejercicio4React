import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const Lista = ({ tareas, setTareas }) => {
    return (
        <ListGroup className='my-4'>
            {tareas.map((tarea, index) => (
                <ItemTarea key={index} tarea={tarea} tareas={tareas} setTareas={setTareas} />
            ))}
        </ListGroup>
    );
};

export default Lista;
