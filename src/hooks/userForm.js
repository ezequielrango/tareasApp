import React, { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [ formValues , setFormValues] = useState(initialState);

    const handleInputChange = ({target}) => {

        setFormValues({
            ...formValues, //mantengo lo que tenga el estado
            [target.name] : target.value // Toma el nombr del objetivo( el input a manejar)
        })
    }
    const reset = () => setFormValues(initialState);

    return [formValues, handleInputChange, reset]
}