// createAsyncThunk,
import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

console.log(userList);

// const getUsers = createAsyncThunk('users/getUsers', (_, ThunkAPI) => {
//     // Your async logic goes here
// });
// , loading: 'pending' 

// const initialState = { records: []};

const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const ufind = state.find(user => user.id == id)
            if (ufind) {
                ufind.name = name;
                ufind.email = email
            }
        },
    deleteUser:  (state, action) =>{
        const {id} = action.payload;
        const ufind = state.find(user => user.id == id)
        if (ufind){
            return state.filter(f => f.id != id)
        }
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getUsers.pending, (state) => {
    //             state.loading = 'pending';
    //         })
    //         .addCase(getUsers.fulfilled, (state, action) => {
    //             state.loading = 'succeeded';
    //             state.records = action.payload;
    //         })
    //         .addCase(getUsers.rejected, (state) => {
    //             state.loading = 'failed';
    //         });
    // }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer;
