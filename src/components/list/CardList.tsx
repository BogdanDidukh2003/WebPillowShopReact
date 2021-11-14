import { Pillow } from "../../models/pillow";
import { Card } from "../card/Card";

interface CardListProps {
    pillows: Pillow[];
}
export const CardList = (props: CardListProps) => {
    const pillows = props.pillows;
    return (
        <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", listStyleType: "none" }}>
            {pillows.map((pillow) => (
                <li style={{ margin: "1rem", padding: "1rem", borderRadius: "8px", border: "2px solid #BBBB" }} key={pillow.id}>
                    <Card pillow={pillow} />
                </li>
            ))}
        </ul>
    );
};