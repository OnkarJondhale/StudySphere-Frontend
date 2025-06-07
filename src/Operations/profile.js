import {toast} from 'react-hot-toast'

import { setProfile } from '../Redux/Slices/profileSlice';
import { setSignUpData } from '../Redux/Slices/authSlice';

export function getProfileData(token)
{
    return async(dispatch)=>{
        const toastId = toast.loading('Loading...')
        try 
        {
            const response = await fetch('http://localhost:3000/profile/getuserdetail',{
                method : 'POST',
                headers : 
                {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({token})
            })

            if(!response.ok)
            {
                throw new Error(error.message)
            }

            const data = await response.json();
            dispatch(setProfile(data.data.additionalDetails))
        }
        catch(error)
        {
            toast.error(error.message);
            console.log(error.message);
        }
        toast.dismiss(toastId);
    }
}

export function updateProfileDetails(token,data)
{
    return async(dispatch) =>{
        const toastId = toast.loading('Loading...');
        try 
        {
            const response = await fetch('http://localhost:3000/profile/updateprofile',{
                method : 'PUT',
                headers: 
                { 
                    'Authorisation': `Bearer ${token}`, 
                    'Content-Type': 'application/json' 
                },
                body : JSON.stringify(data)
                
            })

            const value = await response.json();
            if(!response.ok)
            {
                throw new Error(value.message);
            }

            
            dispatch(setSignUpData(value.data));
            dispatch(setProfile(value.data));
            localStorage.setItem("user", JSON.stringify(value.data));
            toast.success("Profile update successful");
        }
        catch(error)
        {
            toast.error(value.message);
            console.log(error.message);
        }
        toast.dismiss(toastId);
    }
}

export function uploadFile(token,formData)
{
    return async(dispatch)=>{
        const toastId = toast.loading('Loading...');
        try 
        {
            const response = await fetch('http://localhost:3000/profile/updateimage',
                {
                    method : 'PUT',
                    headers : 
                    {
                        'Authorisation': `Bearer ${token}`, 
                    },
                    body : formData
                }
            )

            const value = await response.json();
            if(!response.ok)
            {
                throw new Error(value.message);
            }
            dispatch(setSignUpData(value.data));
            dispatch(setProfile(value.data));
            localStorage.setItem("user", JSON.stringify(value.data));
            toast.success("file uploaded successfully");
        }
        catch(error)
        {
            toast.error(error.message);
            console.log(error.message);
        }
        toast.dismiss(toastId);
    }
}