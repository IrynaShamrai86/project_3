import {useEffect, useState } from "react";

import '../../dist/css/aboutUs.css';


const Counter = ({title, timerEnd, isIconPlus, timerInterval = 3000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === timerEnd) return;

        const timerId = setInterval(() => {
            setCount(count + 1)
        }, timerInterval);
        return () => clearInterval(timerId)
    }, [count])

    return (
        <div className="counter">
            <div className="counter1">
                { count }
                {isIconPlus &&
                    <span className="plus">+</span>
                }
            </div>
            <h3>{ title }</h3>
        </div>
    )
}

export default Counter;