import { createSlice } from "@reduxjs/toolkit"
const initailState = {
    name: ""
}

const inputSlice = createSlice({
    name: "input",
    initialState: initailState,
    reducers: {
        onInputChange: (state, action) => {
            state.name = action.payload
        }
    }

})

export const { onInputChange }  = inputSlice.actions
export default inputSlice.reducer
