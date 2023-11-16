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
            const repeatedItem = state.bookingItems.find((obj) => {
                return (
                    obj.firstname === action.payload.firstname &&
                    obj.lastname === action.payload.lastname &&
                    obj.company === action.payload.company
                )
            })

            if(state.bookingItems.length >= 3) {
                alert("Booking limit reached: 3")
            }
            else if (repeatedItem){
                alert("You've already booked for this company")
            }
            else {
                state.bookingItems.push(action.payload)
            }
        },

        removeBookingItem: (state, action: PayloadAction<BookingItem>) => {
            const remainItems = state.bookingItems.filter((obj) => {
                return (
                    obj.firstname !== action.payload.firstname ||
                    obj.lastname !== action.payload.lastname ||
                    obj.company !== action.payload.company
                )
                })
            state.bookingItems = remainItems
        }

    }
})

export const { addBookingItem, removeBookingItem } = bookSlice.actions
export default bookSlice.reducer