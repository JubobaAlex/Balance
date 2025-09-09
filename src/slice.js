const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name:'Result',
  initialState: {
  result: 0
  },

  reducers: {
    calculate : (state,action ) =>{
      state.result = action.payload
    }
  }
})

export default slice.reducer
export const { calculate  } = slice.actions