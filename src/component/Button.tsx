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
    InputText?: string,
}

const ButtonStyled = styled.div<ButtonProps>`
background-color: red;
border-radius: 1%;
width: 5rem;

background-color: ${props => props.backgroundColor};
border-radius: ${ props => `${props.borderRadius}%}`}
`

export const Button:React.FC<ButtonProps> = ({
    borderRadius,backgroundColor,InputText
}) => {

    return(
        <ButtonStyled borderRadius={borderRadius} backgroundColor={backgroundColor}>
        {InputText}
        </ButtonStyled>
    )

}