import React from 'react'
interface ButtonProps {
    label: string;
}
export const Button = (props: ButtonProps) => {
    return <button style={{ borderRadius: "8px", border: "1px solid transparent", margin: "1rem" }}>{props.label}</button>;
}