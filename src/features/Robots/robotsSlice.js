import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchRobots = createAsyncThunk(
    'robots', 
    async (thunkAPI) => {
        const data = await fetch("https://aws.random.cat/meow?ref=apilist.fun")
        const response = await data.json()
        return response
    }
)

const robotsSlice = createSlice({
    name: "robots",
    initialState: {robots: []},
    reducers: {
        onRobotUpdate: (state, action) => {
            state.robots = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRobots.fulfilled, (state, action) => {
            state.robots.push(action.payload)
        })
    }
})


export default robotsSlice.reducer

