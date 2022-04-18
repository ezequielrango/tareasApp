export const tareasReducer = (state = [] , action) => {

    switch (action?.type) {
        case 'agregar':
        //AGREGAR ELEMENTO AL ARRAY

            return [...state, action.payload]; // + elemento agregado

        case 'borrar':
            //ELIMINAR ELEMENTO AL ARRAY
      
            return state.filter(tarea => tarea.id !== action.payload); // - elemento eliminado

        case 'actualizar':

            return state.map(tarea => 
                (tarea.id === action.payload) ? { ...tarea, done : !tarea.done} : tarea)
    
        //  case 'actualizar' :
            
        //      return state.map(tarea => {

        //         if(tarea.id === action.payload){
        //             return {
        //                 ...tarea ,
        //                 done: !tarea.done
        //             }
                    
        //         }else{
        //             return tarea;
        //         }
        //      })

            default : 
            return state;
    }
}