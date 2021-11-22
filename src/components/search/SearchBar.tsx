import React, { ChangeEvent, useContext } from 'react'
import { PillowContext } from '../../App';

export const SearchBar = () => {
    const { setFilter } = useContext(PillowContext);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter('searchBy', event.target.value);
    }

    return (
        <input type="text" placeholder="Search.." onChange={onChangeHandler} style={{ padding: "0.5rem", borderRadius: "8px", borderWidth: "1px" }} />
    )
}