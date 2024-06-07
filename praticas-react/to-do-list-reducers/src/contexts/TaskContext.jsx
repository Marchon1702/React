import { createContext, useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import PropTypes from 'prop-types';

export const TaskContext = createContext()
TaskContext.displayName= 'TaskContext'

const initialState = []

export const TaskProvider = ({children}) => {
    const [allTasks, dispatch] = useReducer(taskReducer, initialState)
    const [taskToEdit, setTaskToEdit] = useState(null)
    const editTask = (task) => setTaskToEdit(task)
        
    return (
        <TaskContext.Provider
            value={{allTasks, dispatch, taskToEdit, editTask}}
        >
            {children}
        </TaskContext.Provider>
    )
}

TaskProvider.propTypes = {
    children: PropTypes.node.isRequired
}


