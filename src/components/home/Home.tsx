import React from 'react'
import { Pillow } from '../../models/pillow'
import { CardList } from '../list/CardList'
import { Heading } from './Heading'

interface HomeProps {
    pillows: Pillow[];
}
export const Home = (props: HomeProps) => {
    return (
        <div>
            <Heading pillow={props.pillows[0]} />
            <CardList pillows={props.pillows} />
        </div>
    )
}