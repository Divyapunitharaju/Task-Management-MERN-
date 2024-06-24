import {createSlice} from '@reduxjs/toolkit'

const initialState={
    taskslist:[],
    selectedTask:{}

}

const tasksSlice=createSlice({
   name:'tasksSlice',
   initialState,
   reducers:{
    addTaskToList:(state,action)=>{
        const id=Math.random*100
        let task={...action.payload,id}
        state.taskslist.push(task)

    },
    setSelectedTask:(state,action)=>{
       state.selectedTask=action.payload
    }
   }
})


export const {addTaskToList,setSelectedTask}=tasksSlice.actions
export default tasksSlice.reducer