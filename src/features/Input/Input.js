import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { onInputChange } from './inputSlice'



const Input = (props) => {
    const dispatch = useDispatch()
    const name = useSelector(state => state.input.name)
    const eventList = (event) => {
        const payload = event.target.value
        dispatch(onInputChange(payload))
    }
        return(
            <div>
                <input onChange={eventList} placeholder="name" type="text"/>
                <p>{name}: Name</p>
            </div>
        )
}

export default Input;