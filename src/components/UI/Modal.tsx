import {useState} from "react"
import "./Modal.css"


export default function Modal() {
    const [rolling, setRolling] = useState(false)
    const [roll, setRoll] = useState(1)
    const sides: string[] = ["front", "back", "right", "left", "top", "bottom"]


    function rollDice() {
        setRolling(true)
        setRoll(Math.floor(Math.random() * 6))
        setTimeout(() => setRolling(false), 1000)
    }


    return (
        <div className="container">
            <div id="dice" className={`dice ${rolling ? "rolling" : ""} rolled-${sides[roll]}`}>
                <div className="side front">
                    <span className="dot"></span>
                </div>
                <div className="side back">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="side right">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="side left">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="side top">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="side bottom">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            <div id="controls">
                <button onClick={rollDice}>Roll Dice</button>
                <div className="result">
                    {rolling ? "Rolling..."
                        : `You rolled a ${roll+1}`}
                </div>
            </div>
        </div>
    )

}
