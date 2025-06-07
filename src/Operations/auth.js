
import {setToken} from '../Redux/Slices/authSlice.js';
import { setProfile } from '../Redux/Slices/profileSlice.js';

import {toast} from 'react-hot-toast'

const URL = import.meta.env.VITE_BACKEND_URL

export function sendOtp(email,navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try 
      {
        const response = await fetch(`${URL}user/createotp`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        console.log(data,email);

        if (!response.ok) {
          throw new Error(data.message)
        }

        toast.success("otp sent successfully");
        navigate("/otp")
      } 
      catch (error) {
        toast.error("could not sent otp");
        console.log(error.message)
      }
      toast.dismiss(toastId);
    }
  }

  export function signUp( data,navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try 
      {
        const response = await fetch(`${URL}user/signup`,{
            method : 'POST',
            headers : 
            {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        
        const value = await response.json();
        console.log(value);

        if (!response.ok) {
          throw new Error(value.message)
        }

        toast.success('Sign up successful');
        navigate("/login")
      } 
      catch (error) 
      {
        toast.error('Could not signup');
        console.log(error.message)
        navigate("/signup")
      }
      toast.dismiss(toastId);
    }
  }

  export function login(data,navigate)
  {
    console.log(URL);
    return async(dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log(data);
        try 
        {
            const response = await fetch(`${URL}user/login`,{
                method : 'POST',
                headers :
                {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data),
                credentials: 'include'
            })

            const value = await response.json();
            const userDetails = value;

            if (!response.ok) {
              throw new Error(value.message)
            }


            console.log(value);
            dispatch(setToken(value.token));
            const imageUrl = value.data;
            dispatch(setProfile({ userDetails , imageUrl }));
            console.log(userDetails,imageUrl)
            console.log(value)
            localStorage.setItem("token", JSON.stringify(value.token))
            localStorage.setItem("user", JSON.stringify(value.data));
            toast.error('Login successful');
            navigate('/dashboard/myprofile')
        }
        catch(error)
        {
            toast.error(error.message);
            console.log(error)
            navigate("/login")
        }
        toast.dismiss(toastId)
    }
  }

  export function logout(navigate)
  {
    return (dispatch)=>{
        dispatch(setToken(null));
        dispatch(setProfile(null));
        localStorage.removeItem("token");
        localStorage.removeItem('user');
        navigate('/');
        toast.success('logout successful');
    }
  }

export function getPasswordResetToken(email,navigate) {
    return async(dispatch) => {
      const toastId = toast.loading("Loading...")
      try 
      {
        const response = await fetch(`${URL}user/resetpasswordtoken`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        
        const data = await response.json();
        console.log(data.data,email);
        
        if (!response.ok) {
          throw new Error(data.message)
        }

        navigate('/')
      }
      catch(error)
      {
        console.log(error.message)
      }
      toast.success("Reset link send successfully");
      toast.dismiss(toastId);
    }
  }
  

  export function resetPassword(token,password,confirmPassword,navigate){
    return async(dispatch) => {
      const toastId = toast.loading("Loading...")
      const data = {token,password,confirmPassword};
      try 
      {
        const response = await fetch(`${URL}user/resetpassword`,{
          method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        const value = await response.json();
        console.log("Password reset successfully",value);
        navigate('/');
      }
      catch(error)
      {
        console.log(error);
      }
      toast.dismiss(toastId);
    }
  }