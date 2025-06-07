import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getCourseDetails } from '../../Operations/course';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Payment = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseId = location.pathname.split("/")[2];
  const userId = useSelector((state) => state.auth.user._id);
  const email = useSelector((state) => state.auth.user.email);
  const token = useSelector((state) => state.auth.token);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function getCourseData() {
      const course = await dispatch(getCourseDetails(courseId, token));
      setCourse(course);
    }
    getCourseData();
  }, [courseId, token]);

  const handlePayment = async () => {
    const toastId = toast.loading('Loading...')
    try {
      const response = await fetch('http://localhost:3000/payment/createorder', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: course?.price }),
      });

      const orderData = await response.json();

      if (orderData) {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: orderData.amount,
          currency: orderData.currency,
          order_id: orderData.orderId,
          name: "StudySphere",
          description: `Purchasing the course: ${course?.courseName}`,
          handler: async (response) => {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

            if (razorpay_order_id && razorpay_payment_id && razorpay_signature) {
              await handlePaymentSuccess({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
                amount: orderData.amount,
                email: email,
                courseId: courseId,
                userId: userId,
              });
            } else {
              toast.error("Payment failed: Missing required fields");
            }
          },
          prefill: {
            name: "User Name",
            email: email,
          },
          theme: {
            color: "#1F2937",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        toast.error("Failed to create order");
      }
    } catch (error) {
      console.error('Payment Error: ', error);
      toast.error("Error in initiating payment");
    }

    toast.dismiss(toastId);
  };

  const handlePaymentSuccess = async (response) => {
    console.log("Payment Success Response:", response);
    const toastId = toast.loading('Loading...')

    try {
      const verificationResponse = await fetch('http://localhost:3000/payment/verifypayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(response),
      });

      const verificationData = await verificationResponse.json();

      console.log(verificationData);
      toast.dismiss(toastId);
      navigate(`/courses/${courseId}`);
      if (verificationData.success) {
        toast.success('Payment verified successfully!');
      } else {
        toast.error('Payment verification failed!');
      }
    } catch (error) {
      console.error('Verification Error: ', error);
      toast.error("Error in verifying payment");
    }
    toast.dismiss(toastId);
  };

  if (!course) {
    return (
      <div className="min-h-screen w-full bg-gray-900 text-white flex justify-center items-center">
        {/* Loading State or Placeholder */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-3xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-semibold text-center mb-4">{course.courseName}</h2>
          <p className="text-gray-300 text-lg mb-4">{course.courseDescription}</p>

          <div className="flex items-center mb-4">
            <img
              src={course.instructor[0].avatar}
              alt="Instructor Avatar"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-white font-semibold text-sm">{course.instructor[0].firstName} {course.instructor[0].lastName}</p>
              <p className="text-gray-400 text-xs">{course.instructor[0].email}</p>
            </div>
          </div>

          <p className="text-xl font-bold mb-2">Price: <span className="text-green-400">${course.price}</span></p>

          <p className="text-sm text-gray-300 mb-2">Category: {course.category.description}</p>
          <div className="flex flex-wrap mb-4">
            <span className="font-semibold text-sm mr-2">Tags:</span>
            {course.tags.map((tag, index) => (
              <span key={index} className="bg-gray-700 rounded-full px-2 py-1 mr-1 mb-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-300 mb-4">What you will learn: {course.whatYouwillLearn}</p>

          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
            onClick={handlePayment}
          >
            Pay Now and Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;