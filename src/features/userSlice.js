import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem('user'))||null,
        cart: JSON.parse(localStorage.getItem('cart'))||[]
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = null
        },
        addCart: (state, action) => {
            var localVariable = state.cart;
            localVariable.push(action.payload)
        },
        removeCart: (state, action) => {
            for(var j = 0;j<state.cart.length;j++) {
                if(state.cart[j].id===action.payload.id) state.cart.splice(j,1)
            }
        },
        emptyCart: (state, action) => {
            state.cart = []
        }
    }
})

export const { login, logout, addCart, removeCart, emptyCart} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectCart = (state) => state.user.cart;

export default userSlice.reducer;