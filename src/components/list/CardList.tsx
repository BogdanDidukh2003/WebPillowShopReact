import { useContext, useState } from "react";
import { PillowContext } from "../../App";
import { Pillow } from "../../models/pillow";
import { Button } from "../button/Button";
import { Card } from "../card/Card";

interface CardListProps {
    pillows: Pillow[];
}
export const CardList = (props: CardListProps) => {
    const { pillows } = useContext(PillowContext);

    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", listStyleType: "none" }}>
                {pillows.slice(0, showMore ? pillows.length : 8).map((pillow) => (
                    <li style={{ margin: "1rem", padding: "1rem", borderRadius: "8px", border: "2px solid #BBBB" }} key={pillow.id}>
                        <Card pillow={pillow} />
                    </li>
                ))}
            </ul>
            <Button onClick={() => setShowMore(!showMore)} label={!showMore ? 'Show more' : 'Show less'} />
        </>
    );
};