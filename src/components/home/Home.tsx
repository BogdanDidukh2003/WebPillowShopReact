import React, { useContext } from 'react'
import { PillowContext } from '../../App'
import { CardList } from '../list/CardList'
import { Heading } from './Heading'

type HomeProps = {
}
export const Home = () => {
    const { pillows } = useContext(PillowContext)
    return (
        <div>
            <Heading pillow={pillows[0] || {}} />
            <CardList pillows={pillows} />
        </div>
    )
}