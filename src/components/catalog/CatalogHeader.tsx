import React from 'react';
import { nameof } from '../../helpers/nameof';
import { Pillow } from '../../models/pillow';
import { Button } from '../button/Button';
import { CatalogFilter } from './CatalogFilter';

export const CatalogHeader = () => {
    return (
        <div>
            <CatalogFilter name='Price' propertyName={nameof<Pillow>('price')} options={[{ name: 'asc', value: 'asc' }, { name: 'desc', value: 'desc' }]} />
        </div>
    )
}