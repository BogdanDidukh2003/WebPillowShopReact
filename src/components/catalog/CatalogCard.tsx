import React from 'react';
import { Pillow } from '../../models/pillow';
import { Button } from '../button/Button';

interface CatalogCardProps {
    pillow: Pillow;
}
export const CatalogCard = (props: CatalogCardProps) => {
    const { id, title, description, price, width, height, imgUrl } = props.pillow;
    return (
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px", textAlign: "left" }}>
            <img style={{ maxHeight: "200px" }} src={imgUrl} alt="card" />
            <h5>{title}</h5>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Width: {width} cm</p>
            <p>Height: {height} cm</p>
            <Button label="View more" />
        </div>
    )
}