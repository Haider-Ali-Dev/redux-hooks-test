import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWordMeaning = createAsyncThunk('meaning', async (term) => {
    const data = await fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "a044aad677msh7d8af96e2adc9f6p1c5b18jsn50254a432290"
	} 
    })

    const response = data.json()
    return response;
})

const urbanSlice = createSlice({
    name: "meaning",
    initialState: {meaning: []},
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchWordMeaning.fulfilled, (state, action) =>{
            state.meaning.push(action.payload)
        })
    }
})

export default urbanSlice.reducer