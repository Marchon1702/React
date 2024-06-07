import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"
import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from "../reducers/taskReducer"

export const useTaskContext = () => {
    const { dispatch, taskToEdit, editTask } = useContext(TaskContext)

    const addTaskAction = (newTask) => ({
        type: ADD_TASK,
        payload: newTask
    })
    const removeTaskAction = (taskToRemove) => ({
        type: REMOVE_TASK,
        payload: taskToRemove
    })
    const editTaskAction = (newTask, taskToEdit) => ({
        type: EDIT_TASK,
        payload: { newTask, taskToEdit }
    })

    const addTask = (newTask) => {
        if (!newTask.name) return
        if (taskToEdit) {
            dispatch(editTaskAction(newTask, taskToEdit))
            editTask(null)
        } else {
            dispatch(addTaskAction(newTask))
        }
    }

    const removeTask = (taskToRemove) => dispatch(removeTaskAction(taskToRemove))

    return {
        addTask,
        removeTask
    }
}