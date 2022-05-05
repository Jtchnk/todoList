import React, { useState } from "react";

const Gunkung = () => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count+1);
    }

    const delCount = () => {
        setCount(count-1);
    }

    return (
        <div>
            Gunkung
            <div>{count}</div>
            <button onClick={addCount}>+</button>
            <button onClick={delCount}>-</button>
        </div>
    )
}

export default Gunkung;