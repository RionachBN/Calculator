import {Textfit} from "react-textfit";
import "./Screen.js";

const Screen = ({value}) => {
    return (
        <Textfit className = "screen" mode="single" max={70}>
    {value}
    </Textfit>
     );
};

export default Screen;

// Tried running npm i react-textfit but didn't work