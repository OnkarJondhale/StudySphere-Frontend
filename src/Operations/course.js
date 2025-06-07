import {toast, ToastBar} from 'react-hot-toast'

const URL = import.meta.env.VITE_BACKEND_URL

export function getEnrolledCourses(token)
{
    return async(dispatch)=>{
        const toastId = toast.loading('Loading...')
        let result = []
        try 
        {   
            const response = await fetch(`${URL}profile/getenrolledcourses`,{
                method : 'GET',
                headers : 
                {
                    'Authorisation': `Bearer ${token}`, 
                    'Content-Type' : 'application/json'
                },
                
            })

            const data = await response.json();
            if(!response.ok)
            {
                throw new Error(data.message)
            }
            result = data.data;
        }
        catch(error)
        {
            toast.error("Can't fetch enrolled courses");
            console.log(error.message);
        }
        toast.dismiss(toastId);
        return result;
    }
}

export function createCourse(formData,token)
{
    return async(dispatch)=>{
        const toastId = toast.loading('Loading...')
        let result = []
        try 
        {   
            const response = await fetch(`${URL}course/createCourse`,{
                method : 'POST',
                headers : 
                {
                    'Authorisation': `Bearer ${token}`, 
                },
                body : formData
            })

            const value = await response.json();
            if(!response.ok)
            {
                throw new Error(value.message)
            }
            
            console.log(value);
            result = value.data;
            toast.success("Course Entry Created successfully");
        }
        catch(error)
        {
            toast.error(error.message);
            console.log(error.message);
        }
        toast.dismiss(toastId);
        return result;
    }
}

export function getMyCourses(token)
{
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...");
        let result = []
        try 
        {
            const response = await fetch(`${URL}course/mycourse`,{
                method : "GET",
                headers : 
                {
                    'Authorisation': `Bearer ${token}`, 
                    'Content-Type' : 'application/json'
                },
                
            })

            const value = await response.json();
            if(!response.ok)
            {
                throw new Error(value.message)
            }
            result = value.data.courses;
            toast.success("Course Fetched successfully");
        }
        catch(error)
        {
            toast.error(error.message);
            console.log(error.message);
        }
        toast.dismiss(toastId);
        return result;
    }
}

export function createSection(sectionName,courseId)
{
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...");
        let result = null;
        try 
        {
            const response = await fetch(`${URL}course/createSection`,{
                method : 'POST',
                headers : 
                {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({sectionName,courseId})
            })

            const value = await response.json();
            if(!response.ok)
            {
                throw new Error(value.message);
            }

            console.log(value.data.response);
            toast.success("Section created successfully");
            toast.dismiss(toastId);
            return value.data.response;
        }
        catch(error)
        {
            toast.error(error.message);
            console.log(error.message);
        }
        toast.dismiss(toastId);
        return null;
    }
}

export function createSubsection(subSectionDetails,sectionId)
{
    const formData = new FormData();
    formData.append('sectionId',sectionId);
    Object.entries(subSectionDetails).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return async(dispatch) =>{
        const toastId = toast.loading("Loading...");
        let a = false;
        try 
        {
            const response = await fetch(`${URL}course/createsubsection`,{
                method : 'POST',
                body : formData
            })

            const value = await response.json();
            if(!response.ok)
            {
                throw new Error(value.message);
            }

            // console.log(value);
            toast.success("Subsection added successfully");
            a = true;
        }
        catch(error)
        {
            toast.error(error.message);
            console.log(error.message);
        }
        toast.dismiss(toastId);
        return a;
    }
}

export function deleteAddedSection(sectionId)
{
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...");
        console.log(sectionId)
        try 
        {
            const response = await fetch(`${URL}course/deletesection/${sectionId}`,{
                method : 'DELETE'
            })

            const value = await response.json();

            if(!response.ok)
            {
                throw new Error(value.message);
            }

            toast.success("Section deleted successfully");
        }
        catch(error)
        {
            toast.error(error.message);
            console.log(error.message);
        }
        toast.dismiss(toastId);
    }
}

export function getCourseDetails(courseId,token)
{
    let value = null;
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...");
        try 
        {
            const response = await fetch(`${URL}course/getcoursedetails`,{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({courseId : courseId,token : token})
            })

            const res = await response.json();
            value = res.data[0];

            if(!response.ok)
            {
                throw new Error(value.message);
            }

            // console.log(value);
            toast.success("Course Details fetched successfully");
        }
        catch(error)
        {
            toast.error(error.message);
            console.log(error.message);
        }
        toast.dismiss(toastId);

        return value;
    }
}

export function getAllCourses()
{
    let value = null;
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...");
        try 
        {
            const response = await fetch(`${URL}course/getallcourses`,{
                method : 'GET'
            })

            value = await response.json();

            if(!response.ok)
            {
                throw new Error(value.message);
            }
            toast.success("Course fetched successfully");
        }
        catch(error)
        {
            toast.error(error.message);
            console.log(error.message);
        }
        toast.dismiss(toastId);
        return value.data;
    }
}