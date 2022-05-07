<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
=======
import {createSlice} from '@reduxjs/toolkit' 

>>>>>>> c3d3975622497087aa838030d2ed8f1949f59440

const slice = createSlice({
  name: "auth",
  initialState: {
    admin: false,
    LoggedIn: false,
  },
  reducers: {
    signIn: (state, action) => {
      const { name, password } = action.payload;
      state.LoggedIn = true;
      state.admin = true;
    },
<<<<<<< HEAD
=======
    reducers:{ 
        signIn:(state, action) => {
            
            const {name,password} = action.payload; 
            state.LoggedIn = true; 
            state.admin = true; 
        },
>>>>>>> c3d3975622497087aa838030d2ed8f1949f59440

    signOut: (state) => {
      state.LoggedIn = false;
      state.admin = false;
    },
    createUser: (state, action) => {},
  },
});

<<<<<<< HEAD
export default slice.reducer;
export const { signIn, signOut, createUser } = slice.actions;
=======
        },
        createUser:(state,action) => {

        }
    }
})

export default slice.reducer; 
export const {signIn, signOut, createUser} = slice.actions;  
>>>>>>> c3d3975622497087aa838030d2ed8f1949f59440
