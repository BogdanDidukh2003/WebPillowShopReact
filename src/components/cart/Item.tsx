import React from 'react'
import { SelectedPillow } from '../../models/selectedPillow';
import { decrease, increase } from '../../store/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import { Button } from '../button/Button';

interface ItemProps {
    selectedPillow: SelectedPillow
}

export const Item = (props: ItemProps) => {
    const { pillow, count } = props.selectedPillow;
    const dispatch = useAppDispatch();

    const handleAddAmount = () => dispatch(increase(pillow.id));
    const handleRemoveAmount = () => dispatch(decrease(pillow.id));

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "2rem"
        }}>
            <img src={pillow.imgUrl} style={{
                width: "150px",
                height: "100px"
            }} />
            <p>{pillow.title}</p>
            <div>
                <Button label='+' onClick={handleAddAmount} />
                {count}
                <Button label='-' onClick={handleRemoveAmount} />
            </div>
            ${pillow.price * count}
        </div>
    )
}