import { SET_TOKEN } from "./Type"

const ini={
    token:""
}

const Reducer=(state=ini,action)=>{
    switch(action.type){
        case SET_TOKEN:return{
            ...state,
            token:action.payload
        }
        default:return state

    }

}
export default Reducer