import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import {logout} from "../../Operations/auth.js"

function ProfileDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [avatar, setAvatar] = useState(''); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpData = useSelector((state) => state.auth.signUpData);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (signUpData && signUpData.avatar) {
      setAvatar(signUpData.avatar);
    }
  }, [signUpData]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  function logouthandler()
  {
    dispatch(logout(navigate));
  }

  return (
    <div className="relative z-[1000]" ref={dropdownRef}>
      <div
        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-800 cursor-pointer"
        onClick={handleClick}
        style={{ 
          backgroundImage: `url(${avatar})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg font-semibold">
          <div className="py-2 ">
            <Link to="/dashboard/myprofile" className="block px-4 py-2 text-black hover:bg-gray-600 rounded-xl">
              Dashboard
            </Link>
            <button className="block py-2 text-start px-4 w-full text-black hover:bg-gray-600 rounded-xl" onClick={logouthandler}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropDown;
