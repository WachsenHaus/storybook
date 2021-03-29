import React from "react";

export interface InputProps {
    /*
    * 텍스트를 입력합니다.
    */
    inputText:string;
    color:string;
}


export const Input: React.FC<InputProps> = ({
    inputText,color
}) => {

    return(
        <input value={inputText} color={color}>
        </input>
    )

};