import React from "react";
import { HeaderItem } from "./HeaderItem";

export const Header = () => {
    return (
        <div style={{ width: "80%", marginLeft: "10%", display: "flex", justifyContent: "space-between" }}>
            <HeaderItem label="Home" />
            <HeaderItem label="Catalog" />
            <HeaderItem label="Cart" />
        </div>
    );
};