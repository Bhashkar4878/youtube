import { useState } from "react";
import "./Click.css";
function HookComponent(){
    const [numberOfClick, setNumberOfClicks] = useState(0);


function onClickFunction(){
     const newNumberOfClick = numberOfClick + 1;
     setNumberOfClicks(newNumberOfClick);
    }

    return(
        <div>
            <span>{numberOfClick}</span>
            <button onClick={onClickFunction} id="clickButton">Click</button>
        </div>
    );
}
 
export default HookComponent;