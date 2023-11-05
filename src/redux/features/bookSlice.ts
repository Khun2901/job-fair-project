import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BookingItem } from "../../../interfaces";

type BookState = {
    bookingItems: BookingItem[]
}

const initialState: BookState = {
    bookingItems: []
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {

        addBookingItem: (state, action: PayloadAction<BookingItem>) => {
            state.bookingItems.push(action.payload)
        },

        removeBookingItem: (state, action: PayloadAction<BookingItem>) => {
            state.bookingItems.pop()
        }

    }
})

export const { addBookingItem, removeBookingItem } = bookSlice.actions
export default bookSlice.reducer