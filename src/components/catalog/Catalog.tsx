import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { PillowContext } from '../../App';
import { CatalogCard } from './CatalogCard';
import { CatalogHeader } from './CatalogHeader';

type CatalogProps = RouteComponentProps;
export const Catalog = (props: CatalogProps) => {
    const { pillows, filter } = useContext(PillowContext);

    return (
        <div>
            <CatalogHeader />
            <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", listStyleType: "none" }}>
                {pillows
                    .filter(x =>
                        x.description.toLowerCase().includes((filter['searchBy'] as string).toLowerCase()))
                    .map((pillow) => (
                        <li key={pillow.id} style={{ margin: "1rem", padding: "1rem", borderRadius: "8px", border: "2px solid #BBBB" }}>
                            <CatalogCard pillow={pillow} onViewMoreClick={() => props.history.push(`/catalog/${pillow.id}`)} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}