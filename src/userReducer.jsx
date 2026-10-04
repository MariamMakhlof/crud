// createAsyncThunk,
import { createSlice } from "@reduxjs/toolkit";
import { userList } from './Data';

const USER_STORAGE_KEY = 'crud-users';

function loadUsers() {
    try {
        const savedUsers = window.localStorage.getItem(USER_STORAGE_KEY);
        if (savedUsers) {
            const parsedUsers = JSON.parse(savedUsers);
            if (Array.isArray(parsedUsers)) return parsedUsers;
        }
    } catch {
        // Use the sample users if browser storage is unavailable or invalid.
    }

    return userList;
}

const userSlice = createSlice({
    name: 'users',
    initialState: loadUsers(),
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const user = state.find((entry) => entry.id === Number(id));
            if (user) {
                user.name = name;
                user.email = email;
            }
        },
        deleteUser: (state, action) =>
            state.filter((user) => user.id !== Number(action.payload.id)),
    },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer;
