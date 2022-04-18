import React, {useEffect, useReducer} from 'react';
import { tareasReducer } from './reducers/tareasReducer';
import './App.css';
import { logDOM } from '@testing-library/react';
import { AddTarea } from './components/AddTarea';
import { ListTareas } from './components/ListTareas';



const initialState = [
  {
    id : new Date().getTime(),
    description : 'Aprender React',
    done : false,
  }
  
]

const init = () => {

  return JSON.parse(localStorage.getItem('tareas')) || [] ;
}

function App() {


   const [tareas, dispatch] = useReducer(tareasReducer, [], init); 

  // console.log(tareas);
  


    useEffect(()=> {
      localStorage.setItem('tareas',JSON.stringify(tareas))
    }, [tareas]);

    const handleAdd = (nuevaTarea) => {

      const agregarTarea = {
        type : 'agregar',
        payload : nuevaTarea

      }

      dispatch(agregarTarea);
    }

    const handleDelete = (id) => {
      // accion de borrar
      const borrarTarea = {
        type : 'borrar',
        payload : id
      }

      dispatch(borrarTarea);
    };

    const handleUpdate = (id) => {
      // accion de actualizar
      const actualizarTarea = {
        type : 'actualizar',
        payload : id
      }

      dispatch(actualizarTarea)
    };




  return (
    <>
    <h1>TAREAS APP</h1>
    <hr/>
    <h3>Total tareas: {tareas.length}</h3>
    <hr/>
    <div className='row'>
      <div className='col-7'>
        <ListTareas
          tareas = {tareas}
          handleDelete = {handleDelete}
          handleUpdate = {handleUpdate}
        />
      </div>
    </div>
    <div className='col-5'>
    
        <AddTarea
          handleAdd = {handleAdd}
        />

    </div>
    </>
    
  );
}

export default App;
