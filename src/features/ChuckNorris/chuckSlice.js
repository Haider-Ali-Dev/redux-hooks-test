import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchChuckJoke = createAsyncThunk(
    'joke', 
    async () => {
        const data = await fetch('https://api.chucknorris.io/jokes/random')
        return await data.json()
    }
)

const chuckSlice = createSlice({
    name: "joke",
    initialState: {joke: []},
    reducers: {
        onJokeChange: (state, action) => {
            state.joke = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChuckJoke.fulfilled, (state, action) => {
            state.joke.push(action.payload)
        })
    }
})

export default chuckSlice.reducer