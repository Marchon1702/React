export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK"
export const EDIT_TASK = "EDIT_TASK"

export const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const newTask = action.payload
            return [...state, newTask]
        }

        case REMOVE_TASK: {
            const taskToRemove = action.payload
            return state.filter(task => task.id !== taskToRemove.id)
        }

        case EDIT_TASK: {
            const { newTask, taskToEdit } = action.payload
            const updateTasks = state.map(task => task.id === taskToEdit.id ? { ...newTask, id: taskToEdit.id } : task)
            return updateTasks
        }

        default:
            return state
    }
}