import React,{useState} from "react";
 

function Counter(){

    const [count,setCount] = useState(0); 

    function handleIncrement(){
        setCount(count+1);
    }
    function handleDecrement(){
        setCount(count-1);
    }
    function handleReset(){
       setCount(0);
    }

    return(
        <div>
            <h1>Counter App</h1>
    
            <div>{count}</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement} >Decrement</button>
            <button onClick={handleReset}>Reset</button>

        </div>
    );


}
export default Counter;