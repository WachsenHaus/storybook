import React from "react";
import "./input.css";


export interface InputProps {
    /*
    * 텍스트를 입력합니다.
    */
    inputText:string;
}


export const Input: React.FC<InputProps> = ({
    inputText
}) => {

    return(
        <input value={inputText}>
        </input>
    )

};