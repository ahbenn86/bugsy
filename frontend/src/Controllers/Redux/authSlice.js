import {createSlice} from '@reduxjs/toolkit' 
//Creates our reducer in one easy step instead of having it all seperate

const slice = createSlice({
    name:"auth",
    initialState:{
        admin:false,
        LoggedIn:false,
    },
    reducers:{ //Acts as a function which will run wherever you define it too 
        //and then set the state so the state can be used application wide
        signIn:(state, action) => {
            //When we call signIn we'll be fetching the employees name & password
            const {name,password} = action.payload; //Here we destructure the name & password 
            //of the employee from the payload
            state.LoggedIn = true; //Now LoggedIn becomes true and the employee can log in
            state.admin = true; //Give the employee full access 
        },

        signOut:(state) => {
            state.LoggedIn = false;
            state.admin = false;

        },
        createUser:(state,action) => {

        }
    }
})

export default slice.reducer; //Exports only the reducer
export const {signIn, signOut, createUser} = slice.actions; //Destructers and exports each action individually. 