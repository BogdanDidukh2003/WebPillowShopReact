import React from "react";
import { useLocation } from "react-router-dom";
import { SearchBar } from "../search/SearchBar";
import { HeaderItem } from "./HeaderItem";

export const Header = () => {
    const location = useLocation();
    return (
        <div style={{ width: "80%", marginLeft: "10%", display: "flex", justifyContent: "space-between" }}>
            <HeaderItem label="Home" path='/home' />
            <HeaderItem label="Catalog" path='/catalog' />
            <HeaderItem label="Cart" path='/cart' />
            {location.pathname === '/catalog' && <SearchBar />}
        </div>
    );
};