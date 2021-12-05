import React, { ChangeEvent, useContext } from 'react'
import { PillowContext } from '../../App';
import { Pillow } from '../../models/pillow'

interface Option {
    name: string;
    value: string;
}

interface CatalogFilterProps {
    name: string;
    options: Option[];
    propertyName: keyof Pillow;
}
export const CatalogFilter = (props: CatalogFilterProps) => {
    const { filter, setFilter } = useContext(PillowContext);

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => { setFilter('orderBy', `${event.target.id} ${event.target.value}`); }
    return (
        <div>
            <label htmlFor={props.name}> {props.name} </label>
            <select style={{ borderRadius: "6px", height: "2rem", width: "7rem", marginRight: "2rem" }}
                id={props.propertyName} onChange={onChangeHandler}>
                {props.options.map((option) => (
                    <option value={option.value}>
                        {option.name}
                    </option>))}
            </select>
        </div>
    )
}