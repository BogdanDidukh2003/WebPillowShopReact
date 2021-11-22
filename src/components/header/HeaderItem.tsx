import React from 'react'

interface HeaderItemProps {
    label: string;
}
export const HeaderItem = (props: HeaderItemProps) => {
    return (
        <div style={{ margin: "1rem" }}>
            {props.label}
        </div>
    )
}