import { fetchWordMeaning } from "./urbanSlice";
import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import './Urban.css'

const Urban = (props) => {
    const [word, setWord] = useState('')
    const dispatch = useDispatch()
    const meaning = useSelector(state => state.meaning.meaning)
    const getMyMeaning = () => {
        dispatch(fetchWordMeaning(word))
        .then(unwrapResult)
        .then(data => {
            return data
        })
    }

    return  (
        <div className="urban">
            <input placeholder="Enter a Word" onChange={(event) => setWord(event.target.value)}/>
            <div>
                <h3>Word</h3>
                {meaning[0] ? <p className="center"> {meaning[meaning.length - 1].list[0].word}</p> : "None"}
                <h3>Meaning</h3>
                {meaning[0] ? <p>{meaning[meaning.length - 1].list[0].definition} | 👍 
                {meaning[meaning.length - 1].list[0].thumbs_up} | 👎 
                {meaning[meaning.length - 1].list[0].thumbs_down}</p> : 
                <p>None</p>}
                {meaning[0] ? <p>{meaning[meaning.length - 1].list[1].definition} | 👍 
                {meaning[meaning.length - 1].list[1].thumbs_up} | 👎 
                {meaning[meaning.length - 1].list[1].thumbs_down}</p> :
                 <p>None</p>}
                {meaning[0] ? <p>{meaning[meaning.length - 1].list[2].definition} | 👍 
                {meaning[meaning.length - 1].list[2].thumbs_up} | 👎 
                {meaning[meaning.length - 1].list[2].thumbs_down}</p> : 
                <p>None</p>}
            </div>
            <button onClick={getMyMeaning}>Submit</button>
        </div>
    )
}

export default Urban