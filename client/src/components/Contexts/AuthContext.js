//xác thực người dùng
import { useEffect, createContext, useReducer } from "react";
import axios from 'axios';
import {
    apiUrl, LOCAL_STORAGE_TOKEN_NAME,
    ADD_CLASS,
    CLASSES_LOADED_FAIL,
    CLASSES_LOADED_SUCCESS
} from "./Constants"
import { AuthReducer } from "./AuthReducer";
import setAuthToken from "../Util/setAuthToken";
import { ClassReducer } from "./ClassReducer";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(AuthReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })
    const [class_State, dispatch1] = useReducer(ClassReducer, {
        c_lass: null,
        classes: [],
        classesLoading: true
    })
    // Authenticate user
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
        }

        try {
            const response = await axios.get(`${apiUrl}/auth`)
            if (response.data.success) {
                dispatch({
                    type: 'SET_AUTH',
                    payload: { isAuthenticated: true, user: response.data.user }
                })
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
            setAuthToken(null)
            dispatch({
                type: 'SET_AUTH',
                payload: { isAuthenticated: false, user: null }
            })
        }
    }

    useEffect(() => loadUser(), [])

    // Login
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm)
            if (response.data.success)
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken
                )

            await loadUser()

            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    // Register
    const registerUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/register`, userForm)
            if (response.data.success)
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken
                )

            await loadUser()

            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }
    // Register
    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        dispatch({
            type: 'SET_AUTH',
            payload: { isAuthenticated: false, user: null }
        })
    }
    const createClass = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/class`, userForm)
            if (response.data.success) {
                dispatch1({ type: ADD_CLASS, payload: response.data.c_lass })
                return response.data
            }


            return response.data
        } catch (error) {

        }
    }
    // Logout

    const getClasses = async () => {
        try {
            const response = await axios.get(`${apiUrl}/class`)
            if (response.data.success) {
                dispatch1({ type: CLASSES_LOADED_SUCCESS, payload: response.data.classes })
            }
        } catch (error) {
            //   dispatch({ type: CLASSES_LOADED_FAIL })
        }
    }


    // Context data
    const authContextData = { class_State, getClasses, createClass, loginUser, registerUser, logoutUser, authState }

    // Return provider
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider