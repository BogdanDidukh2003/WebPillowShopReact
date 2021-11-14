import React from 'react'

interface CatalogFilterProps {
    name: string;
    options: string[];
}
export const CatalogFilter = (props: CatalogFilterProps) => {
    return (
        <div>
            <label htmlFor={props.name}> {props.name} </label>
            <select style={{ borderRadius: "6px", height: "2rem", width: "7rem", marginRight: "2rem" }} id={props.name}>
                {props.options.map((option) => (
                    <option value={option}>
                        {option}
                    </option>))}
            </select>
        </div>
    )
}