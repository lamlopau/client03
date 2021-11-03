import { createContext, useReducer, useState } from 'react'
import { ClassReducer } from './ClassReducer'
import {
    apiUrl,
    ADD_CLASS,
    CLASSES_LOADED_FAIL,
    CLASSES_LOADED_SUCCESS,

} from './Constants'
import axios from 'axios'

export const classContext = createContext()

const ClassContextProvider = ({ children }) => {
    // State
    const [classState, dispatch] = useReducer(ClassReducer, {
        c_lass: null,
        classes: [],
        classesLoading: true
    })

    const [showAddClassModal, setShowAddClassModal] = useState(false)
    //const [showUpdateCLASSModal, setShowUpdateCLASSModal] = useState(false)
    const [showToast, setShowToast] = useState({
        show: false,
        message: '',
        type: null
    })

    // Get all CLASSs
    const getClasses = async () => {
        try {
            const response = await axios.get(`${apiUrl}/class`)
            if (response.data.success) {
                dispatch({ type: CLASSES_LOADED_SUCCESS, payload: response.data.classes })
            }
        } catch (error) {
            dispatch({ type: CLASSES_LOADED_FAIL })
        }
    }

    // Add CLASS
    const addClass = async newClass => {
        try {
            const response = await axios.post(`${apiUrl}/class`, newClass)
            if (response.data.success) {
                dispatch({ type: ADD_CLASS, payload: response.data.class })
                return response.data
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }


    // CLASS context data
    const ClassContextData = {
        classState,
        getClasses,
        showAddClassModal,
        setShowAddClassModal,
        addClass,
        showToast,
        setShowToast
    }

    return (
        <classContext.Provider value={ClassContextData}>
            {children}
        </classContext.Provider>
    )
}

export default ClassContextProvider