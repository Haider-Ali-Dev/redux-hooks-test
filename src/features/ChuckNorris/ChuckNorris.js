import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChuckJoke } from './chuckSlice';
import random from 'fast-helpers.js/random'
import './ChuckNorris.css'

const ChuckNorris = () => {
    const dispatch = useDispatch()
    const joke = useSelector(state => state.joke.joke) 
    const jokeStater = () => {
        dispatch(fetchChuckJoke())
        .then(unwrapResult)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return new Error(err)
        })
    }

    useEffect(()=> {
        jokeStater()
    },[])
    return (
        <div className="joke-container">
                { joke.length ? <img alt="" src={joke[0].icon_url}/> : <h1>Loading</h1>}
                {joke.length ? <p>Joke {joke[random.randint(joke.length)].value}</p> : <p>Loading</p>}
                <button onClick={jokeStater}>Generate</button>
        </div>
    )
}


export default ChuckNorris