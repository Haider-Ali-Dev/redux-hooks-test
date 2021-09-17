import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRobots } from './robotsSlice';
import { unwrapResult } from '@reduxjs/toolkit'
import random from 'fast-helpers.js/random'
import './Robots.css'

const Robots = () => {
    const dispatch = useDispatch()
    const robots = useSelector(state => state.robots.robots)
    const onClickGetRobot = () => {
        dispatch(fetchRobots())
          .then(unwrapResult)
          .then((res) => {
              return res;
          })
          .catch((err) => {
              return new Error(err)
          })
    }
    useEffect(() => {
        dispatch(fetchRobots())
          .then(unwrapResult)
          .then((res) => {
              return res;
          })
          .catch((err) => {
              return new Error(err)
          })
    }, [])

        return (
                    <div className="image">
                    {robots[0] ? <img src={random.choice(robots).file} alt={'cat'}></img> : <h1>Loading</h1>}
                    <button onClick={onClickGetRobot}>Generate</button>
                    </div>
        )
}

export default Robots;