import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state, //* siempre se recomienda regresar el estado y solo modificar lo que necesitamos
                logged: true,
                user: action.payload
            };

        case types.logout:

            return {
                logged: false,
            };

        default:
            return state
    }

};