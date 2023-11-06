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
            if(state.bookingItems.length < 3)
            state.bookingItems.push(action.payload)
        },

        changeBookingItem: (state, action: PayloadAction<BookingItem>) => {
            const remainItem = state.bookingItems.filter((obj) => {
                return (
                    obj.firstname === action.payload.firstname &&
                    obj.lastname === action.payload.lastname &&
                    obj.company === action.payload.company &&
                    obj.interviewdate === action.payload.interviewdate
                )
                })
            state.bookingItems = remainItem
        },

        removeBookingItem: (state, action: PayloadAction<BookingItem>) => {
            state.bookingItems.pop()
        }

    }
})

export const { addBookingItem, removeBookingItem } = bookSlice.actions
export default bookSlice.reducer