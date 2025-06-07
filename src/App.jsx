import { useState } from 'react'
import './App.css'

import { Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import Home from './Components/Pages/Home.jsx';
import Signup from './Components/Pages/Signup.jsx';
import Login from './Components/Pages/Login.jsx';
import Error from './Components/Pages/Error.jsx';
import Otp from './Components/Pages/Otp.jsx';
import Resetpassword from './Components/Pages/Resetpassword.jsx';
import Updatepassword from './Components/Pages/Updatepassword.jsx'
import Dashboard from './Components/Pages/Dashboard.jsx';
import About from './Components/Pages/About.jsx';
import Contact from './Components/Pages/Contact.jsx';
import MyProfile from './Components/Util/MyProfile.jsx';
import Cart from './Components/Util/Cart.jsx';
import EnrolledCourses from './Components/Util/EnrolledCourses.jsx';
import Setting from './Components/Util/Settings.jsx';
import PrivateRoute from './Components/Util/PrivateRoute.jsx';
import OpenRoute from './Components/Util/OpenRoute.jsx';
import AddCourse from './Components/Util/AddCourse.jsx';
import MyCourses from './Components/Util/MyCourses.jsx';
import EditCourse from './Components/Util/EditCourse.jsx';
import CourseCardDetails from './Components/Util/CourseCardDetails.jsx';
import Payment from './Components/Util/Payment.jsx';
import Courses from "./Components/Pages/Courses.jsx"

function App() {
  const [count, setCount] = useState(0)
  const user = useSelector((state)=>state.profile.user)
  return (
    <>
      <div className='min-h-screen w-full text-white p-2'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<OpenRoute> <Signup /> </OpenRoute>} />
          <Route path='/login' element={<OpenRoute> <Login /> </OpenRoute>} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/resetpassword' element={<Resetpassword />} />
          <Route path='/update-password/:id' element={<Updatepassword />} />
          <Route element={<PrivateRoute> <Dashboard /> </PrivateRoute>}>
              <Route path='/dashboard/myprofile' element={<MyProfile />} />
              <Route path='/dashboard/setting' element={<Setting />} />
              {
                user && user.accountType === 'Student' &&
                (<>
                   <Route path='/dashboard/cart' element={<Cart />} />
                   <Route path='/dashboard/enrolledcourses' element={<EnrolledCourses />} />
                   <Route path='/courses/:id' element={<CourseCardDetails />} />
                   <Route path="/payment/:id" element={<Payment />} />
                   <Route path="/courses" element={<Courses />} />
                </>)
              }
              {
                user && user.accountType === 'Instructor' && 
                (
                  <>
                    <Route path='/dashboard/mycourses' element={<MyCourses />} />
                    <Route path='/dashboard/addcourse' element={<AddCourse />} />
                    <Route path='dashboard/editcourse/:courseId' element={<EditCourse />}/>
                  </>
                )
              }
          </Route>
          <Route path='/aboutus' element={<About />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default App
