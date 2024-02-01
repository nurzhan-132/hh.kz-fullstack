import { END_POINT } from '@/config/end-point'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const vacancySlice = createSlice({
    name: "vacancy",
    initialState: {
        vacancies: [],
        vacancy: {},
        specializations: [],
        cities: [],
        experiences: [],
        skills: [],
        empTypes: [],
    },
    reducers: {
        setVacancies: (state, action) => {
            state.vacancies = action.payload.vacancies
        },
        setVacancy: (state, action) => {
            state.vacancy = action.payload.vacancy
        },
        handleVacancyDeletion: (state, action) => {
            state.vacancies = state.vacancies.filter(res => res.id !== action.payload);
        },
        setSpecializations: (state, action) => {
            state.specializations = action.payload
        },
        setCities: (state, action) => {
            state.cities = action.payload
        },
        setExperiences: (state, action) => {
            state.experiences = action.payload
        },
        setSkills: (state, action) => {
            state.skills = action.payload
        },
        setEmpTypes: (state, action) => {
            state.empTypes = action.payload
        },
    },
})

export const { setVacancies, setVacancy, handleVacancyDeletion, setSpecializations, setCities, setExperiences, setSkills, setEmpTypes } = vacancySlice.actions

export const getMyVacancies = () => async (dispatch) => {
    try {
        const res = await axios.get(`${END_POINT}/api/vacancy`)
        dispatch(setVacancies({ vacancies: res.data }))
    } catch (e) {
        alert(e.message)
    }
}

export const getSearchedVacancies = (params, router) => async (dispatch) => {
    try {
        // const queryString = Object.keys(params)
        //     .filter((key) => (params[key] !== undefined))
        //     .map((key) => `${key}=${params[key]}`)
        //     .join('&');
        let {
            q,
            specializationId,
            cityId,
            salary,
            salary_type,
            experienceId,
            employmentTypeId
        } = params

        let queryString = '?'
        if (q) queryString += `q=${q}&`
        if (cityId) queryString += `cityId=${cityId}&`
        if (specializationId) queryString += `specializationId=${specializationId}&`
        if (salary) queryString += `salary=${salary}&`
        if (salary_type) queryString += `salary_type=${salary_type}&`
        if (experienceId) queryString += `experienceId=${experienceId}&`
        if (employmentTypeId) queryString += `employmentTypeId=${employmentTypeId}&`

        router.push(`/search/vacancy${queryString}`)
        const res = await axios.get(`${END_POINT}/api/vacancy/search${queryString}`)
        dispatch(setVacancies({ vacancies: res.data }))
    } catch (e) {
        alert(e.message)
    }
}

export const getSpecializations = () => async (dispatch) => {
    try {
        const res = await axios.get(`${END_POINT}/api/specializations`)
        dispatch(setSpecializations(res.data))
    } catch (e) {
        alert(e.message)
    }
}

export const getCities = () => async (dispatch) => {
    try {
        const res = await axios.get(`${END_POINT}/api/region/cities`)
        dispatch(setCities(res.data))

    } catch (e) {
        alert(e.message)
    }
}

export const getExperiences = () => async (dispatch) => {
    try {
        const res = await axios.get(`${END_POINT}/api/experiences`)
        dispatch(setExperiences(res.data))
    } catch (e) {
        alert(e.message)
    }
}

export const getSkills = () => async (dispatch) => {
    try {
        const res = await axios.get(`${END_POINT}/api/skills`)
        dispatch(setSkills(res.data))
    } catch (e) {
        alert(e.message)
    }
}

export const getEmpTypes = () => async (dispatch) => {
    try {
        const res = await axios.get(`${END_POINT}/api/employment-types`)
        dispatch(setEmpTypes(res.data))
    } catch (e) {
        alert(e.message)
    }
}

export const createVacancy = (vacancy, router) => async (dispatch) => {
    try {
        const res = await axios.post(`${END_POINT}/api/vacancy`, vacancy)
        router.push('/vacancy')
    } catch (e) {
        alert(e.message)
    }
}

export const deleteVacancy = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${END_POINT}/api/vacancy/${id}`)
        dispatch(handleVacancyDeletion(id))
    } catch (e) {
        alert(e.message)
    }
}

export const getVacancyById = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${END_POINT}/api/vacancy/${id}`)
        dispatch(setVacancy({ vacancy: res.data }))
    } catch (e) {
        alert(e.message)
    }
}

// export const createResume = (resume, router) => async (dispatch) => {
//     try {
//         const res = await axios.post(`${END_POINT}/api/resume`, resume)
//         router.push('/resumes')
//         dispatch(appendResume({ newResume: res.data }))        
//     } catch (e) {
//         alert(e.message)        
//     }
// }

// export const editResume = (resume, router) => async (dispatch) => {
//     try {
//         const res = await axios.put(`${END_POINT}/api/resume`, resume)
//         router.push('/resumes')   
//     } catch (e) {
//         alert(e.message)        
//     }
// }



export default vacancySlice.reducer