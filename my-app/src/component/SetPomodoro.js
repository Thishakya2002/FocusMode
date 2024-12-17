import React, { useContext, useState } from "react";
import Button from "./Button";
import { SettingContext } from "../context/SettingsContext";

const SetPomodoro = () => {

    const [newTimer , setNewTimer] = useState({
        work:0.3,
        short:0.2,
        long:1,
        active: 'work'
    });

    const {updateExecute} = useContext(SettingContext)

    const handleChange = input =>{
        const {name, value} = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })                
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short:parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long:parseInt(value)
                })
        
            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return(
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input 
                        className="input" 
                        name="work" 
                        onChange={handleChange} 
                        value={newTimer.work}
                    />
                    <input 
                        className="input" 
                        name="shortBreak" 
                        onChange={handleChange} value={newTimer.short}/>
                    <input className="input" name="longBreak" onChange={handleChange} value={newTimer.long}/>
                </div>
                <Button type = "submit">Set Timer</Button>
            </form>
        </div>
    )
}

export default SetPomodoro