import { SET_TOKEN } from "./Type"

export const setToken=(token)=>{
    return {
        type:SET_TOKEN,
        payload:token
    }
}