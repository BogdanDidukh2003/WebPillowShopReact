import React from 'react'
import { Pillow } from '../../models/pillow';
import { CatalogCard } from './CatalogCard';
import { CatalogHeader } from './CatalogHeader';

interface CatalogProps {
    pillows: Pillow[];
}
export const Catalog = (props: CatalogProps) => {
    const pillows = props.pillows;
    return (
        <div>
            <CatalogHeader />
            <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", listStyleType: "none" }}>
                {pillows.map((pillow) => (
                    <li key={pillow.id} style={{ margin: "1rem", padding: "1rem", borderRadius: "8px", border: "2px solid #BBBB" }}>
                        <CatalogCard pillow={pillow} />
                    </li>
                ))}
            </ul>
        </div>
    )
}