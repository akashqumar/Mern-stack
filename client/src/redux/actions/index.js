import axios from 'axios';
import { ADDNEW_TODO ,GETALL_TODOS,TOGGLE_TODO,UPDATE_TODO,DELETE_TODO,TOGGLE_TAB} from './type'; 


const API_URL = "https://mern-todolist-backend-bcs2.onrender.com";

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`,{data})

        dispatch({type : ADDNEW_TODO,payload : res.data})
    } catch (error) {
        console.log("Error while calling addNewTodo",error)
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`)
        console.log(res.data)
        dispatch({type : GETALL_TODOS,payload : res.data})
    } catch (error) {
        console.log("Error while calling getAllTodos",error)
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`)
        console.log(res.data)
        dispatch({type : TOGGLE_TODO,payload : res.data})
    } catch (error) {
        console.log("Error while calling getAllTodos",error)
    }
}

export const updateTodo = (id,data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`,{data})
        console.log(res.data)
        dispatch({type : UPDATE_TODO,payload : res.data})
    } catch (error) {
        console.log("Error while calling getAllTodos",error)
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`)
        console.log(res.data)
        dispatch({type : DELETE_TODO,payload : res.data})
    } catch (error) {
        console.log("Error while calling getAllTodos",error)
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    try {
        dispatch({type : TOGGLE_TAB,selected : tab})
    } catch (error) {
        console.log("Error while calling toggleTab",error)
    }
}