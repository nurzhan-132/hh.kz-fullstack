import { END_POINT } from '@/config/end-point'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const resumeSlice = createSlice({
    name: "resume",
    initialState: {
        resumes: [],
        resume: {},
    },
    reducers: {
        setResumes: (state, action) => {
            state.resumes = action.payload.resumes
        },
        appendResume: (state, action) => {
            state.resumes = [...state.resumes, action.payload.newResume]
        },
        setResume: (state, action) => {
            state.resume = action.payload.resume
        },
        handleResumeDeletion: (state, action) => {
            state.resumes = state.resumes.filter(res => res.id !== action.payload);
        }          
    },
})

export const { setResumes, appendResume, setResume, handleResumeDeletion } = resumeSlice.actions

export const getMyResumes = () => async (dispatch) => {
    try {
        const res = await axios.get(`${END_POINT}/api/resume`)
        dispatch(setResumes({resumes: res.data}))
    } catch (e) {
        alert(e.message)
    }
}

export const getResumeById = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${END_POINT}/api/resume/${id}`)
        dispatch(setResume({ resume: res.data }))        
    } catch (e) {
        alert(e.message)        
    }
}

export const createResume = (resume, router) => async (dispatch) => {
    try {
        const res = await axios.post(`${END_POINT}/api/resume`, resume)
        router.push('/resumes')
        dispatch(appendResume({ newResume: res.data }))        
    } catch (e) {
        alert(e.message)        
    }
}

export const editResume = (resume, router) => async (dispatch) => {
    try {
        const res = await axios.put(`${END_POINT}/api/resume`, resume)
        router.push('/resumes')   
    } catch (e) {
        alert(e.message)        
    }
}

export const deleteResume = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${END_POINT}/api/resume/${id}`)
        dispatch(handleResumeDeletion(id))
    } catch (e) {
        alert(e.message)        
    }
}

export default resumeSlice.reducer