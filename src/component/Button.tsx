import React from 'react';
import styled  from "styled-components";

//버튼의 속성을 정의합니다.
export interface ButtonProps{
    /**
     * 버튼의 border를 정합니다.숫자로 기입합니다.
     */
    borderRadius?: number,
    /**
     * 버튼의 백그라운드 색상을 정의합니다.`
     */
    backgroundColor?: string,
    /**
     * 버튼내부에 들어가는 글자를 정의합니다.
     */
    InputText?: string | "버튼",
    /**
     * 
     */
    primary?: boolean,
    /**
     * primary 선택시 변경될 컬러입니다.
     */
    primaryColor?:string,
}

const ButtonStyled = styled.div<ButtonProps>`
background-color: white;
border : 1px solid black;
border-radius: 10%;
width: 5rem;
height: 5rem;
display : flex;
justify-content: center;
align-items : center;

background-color: ${props => props.backgroundColor};

border-radius: ${ props => `${props.borderRadius}%}`}
${props => (
    props.primary && `
        background-color: ${props.primaryColor};
    `
)}

`

export const Button:React.FC<ButtonProps> = ({
    borderRadius,backgroundColor,InputText,primary = false,primaryColor
}) => {

    return(
        <ButtonStyled  borderRadius={borderRadius} primary={primary} backgroundColor={backgroundColor} primaryColor={primaryColor}>
            {InputText}
        </ButtonStyled>
    )

}