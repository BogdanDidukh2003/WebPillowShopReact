import React, { useContext } from 'react'
import { PillowContext } from '../../App';
import { CatalogCard } from './CatalogCard';
import { CatalogHeader } from './CatalogHeader';

type CatalogProps = {
}
export const Catalog = (props: CatalogProps) => {
    const { pillows, filter } = useContext(PillowContext);

    return (
        <div>
            <CatalogHeader />
            <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", listStyleType: "none" }}>
                {pillows
                    .filter(x =>
                        x.description.includes(filter['searchBy'].value.toLowerCase()))
                    .sort((a, b) => {
                        const isAsc = filter['orderBy'].direction == "asc";

                        if (a[filter['orderBy'].property] >= b[filter['orderBy'].property])
                            return isAsc ? 1 : -1;
                        else
                            return isAsc ? -1 : 1;
                    }).map((pillow) => (
                        <li key={pillow.id} style={{ margin: "1rem", padding: "1rem", borderRadius: "8px", border: "2px solid #BBBB" }}>
                            <CatalogCard pillow={pillow} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}