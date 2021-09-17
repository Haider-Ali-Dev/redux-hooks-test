import React, {useEffect, useState} from 'react';
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
            <div>
                <button onClick={onClickGetRobot}>Click Me</button>
                {robots[0] ? <img src={robots[random.randint(robots.length)].file} alt={'cat'}></img> : undefined}
            </div>
        )
}

export default Robots;