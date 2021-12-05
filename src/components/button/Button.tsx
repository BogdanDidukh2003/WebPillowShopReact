import React from 'react'
interface ButtonProps {
    label: string;
    onClick?: () => void;
}
export const Button = (props: ButtonProps) => {
    return <button style={{ borderRadius: "8px", border: "1px solid transparent", margin: "1rem" }} onClick={props.onClick}>
        {props.label}
    </button>;
}