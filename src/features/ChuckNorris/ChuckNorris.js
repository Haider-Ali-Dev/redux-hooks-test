import React, {useEffect, useState} from "react";
import { fetchChuckJoke } from "./chuckSlice";
import { useSelector, useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

const Chuck = (props) => {
    const dispatch = useDispatch()
    const joke = useSelector(state => state.joke.joke)
    const onClickOrLoad = () => {
        dispatch(fetchChuckJoke())
          .then(unwrapResult)
          .then((res) => {
              return res;
          })
          .catch((err) => {
              return new Error(err)
          })
    }

    useEffect(() => {
        onClickOrLoad()
    }, [])
    return (
        <div>
            <h1>Heres a joke</h1>
            {<button >Click Me</button>}
            <p>{joke}</p>
        </div>
    )
}
export default Chuck