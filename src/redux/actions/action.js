import {ADD,DELET,EDIT,FILTER} from './constantes'

export const add =(newTodo)=>{
    return {
        type:"ADD",
        payload:newTodo
    }
}
export const delet =(ID)=>{
    return {
        type:"DELET",
        payload:ID
    }
}
export const edit =(ID,textEdited)=>{
    return {
        type:"EDIT",
        payload:{ID,textEdited}
    }
}
export const filterClick =()=>{
    return {
        type:'FILTERClICK'
       
    }
}
export const filterNotDoneClick =()=>{
    return {
        type:'FILTERNOTDONECLICK'
       
    }
}
export const notDone =()=>{
    return {
        type:'NOTDONE'
       
    }
}
export const done =()=>{
    return {
        type:'DONE'
       
    }
}

export const complet =(ID)=>{
    return {
        type:'COMPLET',
        payload:ID
       
    }
}