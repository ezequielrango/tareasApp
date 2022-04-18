import React from 'react';
import { useForm } from '../hooks/userForm';


export const AddTarea = ({handleAdd}) => {
    
     const [{description}, handleInputChange, reset] = useForm({
           description : ''
          })

          const handleSubmit = (e) => {

            e.preventDefault(); 
      
            if(description.trim().length<2){
              return
            }
      
            let nuevaTarea = {
              id : new Date().getTime(),
              description ,
              done : false,
            }
          
          
            handleAdd(nuevaTarea);


          reset();
      
          }
      

    return (

        <form onSubmit={handleSubmit}>
        <input
          type='text'
          name= 'description'
          placeholder='Aprender...'
          autoComplete='off'
          className='form-control'
          onChange={handleInputChange}
          value={description}
        />
        <button
        type='submit'
        className='btn btn-primary w100 mt-2'
        >Agregar
        </button>
      </form>

    )
}