import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice";

import * as Pillows from './cartSlice';

export interface AppState {
    selectedPillows: Pillows.CartState
}

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;