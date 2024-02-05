import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const ItemTarea = ({ tarea, tareas, setTareas }) => {
    const handleBorrar = () => {
        const nuevasTareas = tareas.filter(t => t !== tarea);
        setTareas(nuevasTareas);
    };

    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {tarea}
            <Button variant="danger" onClick={handleBorrar}>
                Borrar
            </Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;
