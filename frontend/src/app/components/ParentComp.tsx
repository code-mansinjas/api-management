"use client"
import React, { useEffect, useState } from 'react'

const ParentComp = () => {

    const [currentTime, SetCurrentTime] = useState(``)
    const [text, SetText] = useState('')

    useEffect(() => {
        setTimeout(() => SetCurrentTime(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`), 1000)
    }, [currentTime])

    return (
        <>
            <div className='parent-container'>
                <span className='timer'>{currentTime}</span>
                <input type="text" className=''  onChange={(e)=> SetText(e.target.value)} />
                <ChildComp text={text} />
            </div>
            <style>{`
    .parent-container, .child-container{
        border: 5px solid
    }
    .parent-container{
        width: 100%;
        border-color: red;
        height: 400px;
    }
    .child-container{
    float: right;
        width: 600px;
        height: 300px;
        border-color: green;
    }
    .timer{
        margin: 10px;
    font-size: 45px;
    }
    `}</style>
        </>
    )
}

const ChildComp = ({text}: {text: string}) => {
    useEffect(() => {
        console.log("Child Comp UseEffect")
    }, [])
    return (
        <div className="child-container">
            {text}
        </div>
    )
}

export default ParentComp
