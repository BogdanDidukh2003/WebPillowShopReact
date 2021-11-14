import React from 'react';
import { Button } from '../button/Button';
import { CatalogFilter } from './CatalogFilter';

export const CatalogHeader = () => {
    return (
        <div>
            <div>
                <CatalogFilter name='Price' options={['asc', 'desc']} />
            </div>
            <Button label='Apply' />
        </div>
    )
}