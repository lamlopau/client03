export const apiUrl = process.env.NODE_ENV != "production" ? "http://localhost:2222/api" : "some deplploy"
export const LOCAL_STORAGE_TOKEN_NAME = "token";

export const CLASSES_LOADED_SUCCESS = 'CLASSES_LOADED_SUCCESS'
export const CLASSES_LOADED_FAIL = 'CLASSES_LOADED_FAIL'
export const ADD_CLASS = 'ADD_CLASS'
export const DELETE_CLASS = 'DELETE_CLASS'
export const UPDATE_CLASS = 'UPDATE_CLASS'
export const FIND_CLASS = 'FIND_CLASS'