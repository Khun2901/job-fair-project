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
            if(state.bookingItems.length > 0) {
                state.bookingItems.pop()
                state.bookingItems.push(action.payload)
            }
            else{
                state.bookingItems.push(action.payload)
            }
        },

        // NOTE: EDIT THIS CODE TO REMOVE BOOKING ITEM
        // removeBookingItem: (state, action: PayloadAction<BookingItem>) => {
        //     const remainItems = state.bookingItems.filter( obj => {
        //         return ()
        //     })
        //     state.bookingItems = remainItems
        // }

    }
})

export const { addBookingItem, /*removeBookingItem*/ } = bookSlice.actions
export default bookSlice.reducer