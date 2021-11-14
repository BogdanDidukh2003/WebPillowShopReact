import React from 'react';
// @ts-ignore
import { Link } from "react-router-dom";

interface HeaderItemProps {
    label: string;
    path: string
}
export const HeaderItem = (props: HeaderItemProps) => {
    return (
        <Link to={props.path} style={{ margin: "1rem" }}>
            {props.label}
        </Link>
    )
}