import React, { createContext, useState } from "react";

export const SettingContext = createContext()

function SettingContextProvider (props) {

    const[pomodoro, setPomodoro] =useState(0)
    const [executing, setExecting] = useState({})
    const [startAnimate, setStartAnimate] = useState (false)


    function setCurrentTimer (active_state){
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)

    }
    function startTimer(){
        setStartAnimate(true);
    }
    function pauseTimer(){
        setStartAnimate(false);
    }
    function stopTimer(){
        setStartAnimate(false);
    }

    //pass time
    const children = ({remainingTime}) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
    
        return `${minutes}:${seconds}`;
    };
    
    const SettingBtn = () =>{
        setExecting({})
        setPomodoro(0)
    }

    const updateExecute = updatedSettings => {
        setExecting(updatedSettings)
        setTimerTime(updatedSettings)
    }


    const setTimerTime = evalute => {
        switch (evalute.active) {
            case 'work':
                setPomodoro(evalute.work)
                break;

            case 'short':
                setPomodoro(evalute.short)
                break;

            case 'long':
                setPomodoro(evalute.long)
                break;

                default:
                    setPomodoro(0)
                break;
        }
    }

    
    return(
        <SettingContext.Provider 
        value={{
            stopTimer, 
            updateExecute,
            pomodoro,
            executing,
            startAnimate,
            startTimer,
            pauseTimer,
            SettingBtn,
            setCurrentTimer,
            updateExecute,
            children
            }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingContextProvider