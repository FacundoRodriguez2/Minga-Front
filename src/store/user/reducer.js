import { createReducer } from "@reduxjs/toolkit";
import userActions from "./actions";

const { verify_account } = userActions


const initialState = {
user: [],
message: ""
};

const verifyReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(verify_account.fulfilled, (state, action) => {
        console.log(action.payload.response) // Verificar que se están recibiendo los datos esperados
        let newState = {
            ...state,
            user: action.payload.response.user, // Actualizar solo la propiedad user en lugar de todo el objeto
            message: action.payload.message
        }
        console.log(newState) // Verificar que el nuevo estado se está actualizando correctamente
        return newState
    })
    
    .addCase(verify_account.rejected, (state, action) => {
        let newState =  {
            ...state,
            message: "error"
        }
        return newState
    })
})


export default verifyReducer