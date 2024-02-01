import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'

let initialState = {
  applies: [],
  apply: {}
}

export const applySlice = createSlice({
  name: 'apply',
  initialState,
  reducers: {
    appendApply: (state, action) => {
      state.applies = [...state.applies, action.payload]
    },
    setApplies: (state, action) => {
      state.applies = action.payload
    },
    handleApplyDeletion: (state, action) => {
      state.applies = state.applies.filter(res => res.id !== action.payload);
    },
    setApplyStatus: (state, action) => {
      const { applyId, status } = action.payload;
      state.applies = state.applies.map(item =>
        item.id === applyId ? { ...item, status } : item
      );
    }
  },
})

// Action creators are generated for each case reducer function
export const { appendApply, setApplies, handleApplyDeletion, setApplyStatus } = applySlice.actions

export const getEmployeeApplies = () => (dispatch) => {
  axios.get(`${END_POINT}/api/applies/employee`).then(res => {
    dispatch(setApplies(res.data))
  }).catch(e => {
    console.log(e);
  })
}

export const getVacancyApplies = (id) => (dispatch) => {
  axios.get(`${END_POINT}/api/applies/vacancy/${id}`).then(res => {
    dispatch(setApplies(res.data))
  }).catch(e => {
    console.log(e);
  })
}

export const createApply = (data) => (dispatch) => {
  axios.post(`${END_POINT}/api/applies`, data).then(res => {
    dispatch(appendApply(res.data))
  }).catch(e => {
    console.log(e);
  })
}

export const acceptApply = (applyId) => (dispatch) => {
  axios.put(`${END_POINT}/api/applies/accept/employee`, { applyId }).then(res => {
    dispatch(setApplyStatus({ applyId, status: "INVITATION" }))
  }).catch(e => {
    console.log(e);
  })
}

export const declineApply = (applyId) => (dispatch) => {
  axios.put(`${END_POINT}/api/applies/decline/employee`, { applyId }).then(res => {
    dispatch(setApplyStatus({ applyId, status: "DECLINED" }))
  }).catch(e => {
    console.log(e);
  })
}

export const deleteApply = (id) => (dispatch) => {
  axios.delete(`${END_POINT}/api/applies/${id}`).then(res => {
    dispatch(removeApply(id))
  }).catch(e => {
    console.log(e);
  })
}

export default applySlice.reducer