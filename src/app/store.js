import { configureStore } from "@reduxjs/toolkit";
import inputSliceReducer from "../features/Input/inputSlice";
import robotSliceReducer from '../features/Robots/robotsSlice'
import chuckSliceReducer from '../features/ChuckNorris/ChuckNorris'
export const store = configureStore({
  reducer: {input: inputSliceReducer, robots: robotSliceReducer, joke: chuckSliceReducer}

})
