import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers : {
        addUsers : (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const {id, name, email } = action.payload;
            const updatedUser = state.find(user => user.id == id)
            if(updatedUser){
                updatedUser.name = name;
                updatedUser.email = email;
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const updateUser = state.find(user => user.id == id)

            if(updateUser){
                return state.filter((user) => user.id !== id)
            }

        }
    },
})

export const {addUsers, updateUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;