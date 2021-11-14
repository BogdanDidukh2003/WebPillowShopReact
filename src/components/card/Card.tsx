import { Pillow } from "../../models/pillow";
import { Button } from "../button/Button";

interface CardProps {
    pillow: Pillow;
}
export const Card = (props: CardProps) => {
    const { title, description, price, width, height, imgUrl } = props.pillow;
    return (
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px", textAlign: "left" }}>
            <img style={{ maxHeight: "200px" }} src={imgUrl} alt="card" />
            <h5>{title}</h5>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Width: {width} sm</p>
            <p>Height: {height} sm</p>
            <div style={{ flexDirection: "row" }}>
                <Button label="Edit" />
                <Button label="Delete" />
            </div>
        </div>
    );
}