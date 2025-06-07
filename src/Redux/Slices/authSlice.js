import { createSlice } from "@reduxjs/toolkit";

const getTokenFromLocalStorageToken = () => 
    { 
        const token = localStorage.getItem("token"); 
        try 
        { 
            return token ? JSON.parse(token) : null; 
        } 
        catch (error) 
        { 
            console.error("Error parsing token from localStorage:", error); 
            return null; 
        } 
    };

    const getDataFromLocalStorage = () => 
        { 
            const user = localStorage.getItem("user"); 
            try 
            { 
                return user ? JSON.parse(user) : null; 
            } 
            catch (error) 
            { 
                console.error("Error parsing token from localStorage:", error); 
                return null; 
            } 
        };

const initialState = {
    token : getTokenFromLocalStorageToken(),
    signUpData : getDataFromLocalStorage(),
    loading : false,
    user : getDataFromLocalStorage()
}

const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers : 
    {
        setToken(state,value){
            state.token = value.payload
        },
        setSignUpData(state,value)
        {
            state.signUpData = value.payload
        },
        setLoading(state,value)
        {
            state.loading = value.payload
        },
    }
});

export const {setToken,setSignUpData,setLoading} = authSlice.actions;
export const authReducer = authSlice.reducer;