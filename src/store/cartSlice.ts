import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pillow } from '../models/pillow';
import { SelectedPillow } from '../models/selectedPillow';
import { RootState } from './store';

export interface CartState {
    selectedPillows: { [key: number]: SelectedPillow };
}

const initialState: CartState = {
    selectedPillows: []
}

export const cartSlice = createSlice({
    name: 'selectedPillows',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Pillow>) => {
            const pillow = action.payload;
            state.selectedPillows[pillow.id] = { pillow: pillow, count: 1 };
        },
        remove: (state, action: PayloadAction<Pillow>) => {
            delete state.selectedPillows[action.payload.id]
        },
        increase: (state, action: PayloadAction<number>) => {
            state.selectedPillows[action.payload].count++;
        },
        decrease: (state, action: PayloadAction<number>) => {
            state.selectedPillows[action.payload].count--;
        },
    },
})

export const { add, remove, increase, decrease } = cartSlice.actions

export const selectPillows = (state: RootState) => state.cart.selectedPillows

export default cartSlice.reducer