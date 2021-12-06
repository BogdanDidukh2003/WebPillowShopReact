import React from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '../../store/hooks';
import { Item } from './Item';

export const Cart = () => {
    const { pillows } = useAppSelector(state => {
        return {
            pillows: state.cart.selectedPillows
        }
    }, shallowEqual);
    console.log(pillows);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {Object.entries(pillows).map(value => {
                const [id, pillow] = value;
                return <Item key={id} selectedPillow={pillow} />
            })}
            <div>Total amount: ${Object.entries(pillows).reduce<number>((a, b) => a + b[1].pillow.price * b[1].count, 0)}</div>
        </div>
    )
}
