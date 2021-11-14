import React from "react";
import { Pillow } from "../../models/pillow";

interface HeadingProps {
    pillow: Pillow;
}
export const Heading = (props: HeadingProps) => {
    const { title, description, imgUrl } = props.pillow;
    return (
        <div style={{ display: "flex", margin: "6rem" }}>
            <img style={{ maxWidth: "630px", maxHeight: "300px" }} src={imgUrl} />
            <div style={{ textAlign: "left", marginLeft: "2rem" }}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};