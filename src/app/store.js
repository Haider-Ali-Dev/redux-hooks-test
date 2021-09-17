import { configureStore } from "@reduxjs/toolkit";
import inputSliceReducer from "../features/Input/inputSlice";
import robotSliceReducer from '../features/Robots/robotsSlice'
import chuckSliceRedcuer from "../features/ChuckNorris/chuckSlice";
import urbanSliceRedcuer from "../features/UrbanDict/urbanSlice";
export const store = configureStore({
  reducer: {input: inputSliceReducer, robots: robotSliceReducer, joke: chuckSliceRedcuer, meaning: urbanSliceRedcuer}

})
