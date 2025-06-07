import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Code from "../Util/Code.jsx";
import Footer from "../Util/Footer.jsx";

import { FaArrowRight } from "react-icons/fa";

const codeArr = [
{
    lineCount : [1,2,3,4,5,6,7,8,9,10,11,12,13],
    backgroundColor : 'code1',
    data : 
    `
<!DOCTYPE html>\n
<html lang="en">\n
<head>\n
<title>This is myPage</title>\n
</head> <body>\n
<h1><a href="/">Header</a></h1>\n
<nav> \n 
<a href="/one">One</a>\n
<a href="/two">Two</a>\n
<a href="/three">Three</a>\n
</nav>\n
</body> </html>`
},
{
    lineCount : [1,2,3,4,5,6,7,8,9,10,11,12],
    backgroundColor : 'code2',
    data : 
    `
import {React} from 'react\n
import {Button} from './Button.jsx'\n

function Home()\n
{\n
    return(\n
     <>\n
      <Button> Click me </Button>\n
     </>\n
    )\n
}\n
`
}
]

const boxData = [
    [
        {
            heading : "Learn HTML",
            description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more."
        },
        {
            heading : "Learn CSS",
            description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques"
        },
        {
            heading : "Responsive Web design",
            description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes"
        },
    ],
    [
        {
            heading : "HTML",
            description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more."
        },
        {
            heading : "CSS",
            description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques"
        },
        {
            heading : "Responsive",
            description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes"
        },
    ],
    [
        {
            heading : "JS",
            description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more."
        },
        {
            heading : "MongoDb",
            description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques"
        },
        {
            heading : "Express",
            description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes"
        },
    ],
    [
        {
            heading : "Node",
            description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more."
        },
        {
            heading : "React",
            description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques"
        },
        {
            heading : "Tailwind css",
            description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes"
        },
    ],
    [
        {
            heading : "Network",
            description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more."
        },
        {
            heading : "DSA",
            description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques"
        },
        {
            heading : "Web Development",
            description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes"
        },
    ]
]

function Home()
{
    const [currentTab,setCurrentTab] = useState(0);

    return(
        <>
           <div className="min-h-screen w-full flex flex-col gap-8">
                <div className="min-h-content w-full flex flex-col gap-4 items-center text-sm p-4">
                    <Link to='/signup'>
                        <button className="bg-gray-800 font-semibold p-2 rounded-xl hover:bg-gray-700 flex gap-2 justify-center items-center shadow-md shadow-black hover:scale-95 transition-all duration-200"> Become an instructor <div className="text-sm"> <FaArrowRight /> </div>  </button>
                    </Link>
                    <p className="text-xl text-center content-center font-bold sm:text-4xl"> Empower your future with <span className="text-cyan-400">coding skills</span></p>
                    <p className="w-full sm:w-1/2 text-center content-center"> With our online coding courses,you can learn at your own pace,from anywhere in the world,and get access toa wealth of 
                            resources,including hands on project,quizzes,and personalized feedback from instructor</p>
                    <div className="w-full sm:w-1/2 flex justify-center gap-4"> 
                    <Link to='/login'>
                        <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-xl text-sm hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200"> Learn More </button>
                    </Link>
                    <Link to='/login'>
                        <button className="bg-gray-800 px-4 py-2 rounded-xl text-sm hover:bg-gray-700 shadow-md shadow-black hover:scale-95 transition-all duration-200"> Book a demo </button>
                    </Link>
                    </div>
                </div>

                <div className="w-full flex justify-center p-4"> 
                    <video className="sm:h-[30rem] shadow-md shadow-blue-200" autoPlay muted loop> 
                        <source src="homepagevideo.mp4" type="video/mp4" /> 
                    </video> 
                </div>

                <div className="min-h-96 w-full flex flex-col gap-8 mt-8">
                        <div className="w-full flex justify-center gap-4 lg:gap-32 flex-wrap">

                            <div className="w-80 max-h-80 sm:w-2/5 lg:w-1/3  flex flex-col gap-4">
                                    <h1 className="text-lg lg:text-3xl text-start content-center px-8 font-bold"> Unlock your <span className="text-cyan-400"> coding potential  </span>with our online Courses </h1> 
                                    <p className="text-sm text-start context-center px-8"> Our courses are designed and taught by industry experts who have experience in coding and are passionate about sharing their knowledge with you </p> 
                                    <div className="w-full flex justify-start px-8 gap-4 "> 
                                        <Link to='/signup'>
                                            <button className="bg-yellow-400 text-black font-semibold lg:px-4 lg:py-2 p-1 rounded-xl text-sm hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200 flex gap-2 items-center"> Try it yourself <span> <FaArrowRight /> </span> </button>
                                        </Link>
                                        <Link to='/login'>
                                            <button className="bg-gray-800 font-semibold lg:px-4 lg:py-2 p-1 rounded-xl text-sm hover:bg-gray-700 shadow-md shadow-black hover:scale-95 transition-all duration-200"> Learn More </button>
                                        </Link>
                                    </div>
                            </div>

                            <Code data={codeArr[0]}/>
                        </div>
                        <div className="w-full flex sm:flex-row-reverse justify-center gap-4 lg:gap-32 flex-wrap">
                            <div className="w-80 max-h-80 sm:w-2/5 lg:w-1/3 flex flex-col gap-4">
                                    <h1 className="text-lg lg:text-3xl text-start content-center px-8 font-bold"> Start <span className="text-cyan-400"> coding in seconds </span> </h1> 
                                    <p className="text-sm text-start context-center px-8"> Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson. </p> 
                                    <div className="w-full flex justify-start px-8 gap-4 "> 
                                        <Link to='/signup'>
                                            <button className="bg-yellow-400 text-black font-semibold lg:px-4 lg:py-2 p-1 rounded-xl text-sm hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200 flex gap-2 items-center"> Try it yourself <span> <FaArrowRight /> </span> </button>
                                        </Link>
                                        <Link to='/login'>
                                            <button className="bg-gray-800 font-semibold lg:px-4 lg:py-2 p-1 rounded-xl text-sm hover:bg-gray-700 shadow-md shadow-black hover:scale-95 transition-all duration-200"> Learn More </button>
                                        </Link>
                                    </div>
                            </div>
                            <Code data={codeArr[1]}/>
                        </div>

                        <div className="min-h-96 w-full text-center content-center p-4">
                                <h1 className="text-xl sm:text-4xl font-bold mb-2"> Unlock the <span className="text-cyan-400"> power of code </span> </h1>
                                <p className="font-semibold mb-4"> Let's learn to Build anything you can imagine </p>
                                <div className="w-full flex justify-center ">
                                    <div className="min-h-12 text-sm font-semibold p-1 lg:text-base  w-full sm:w-2/3 lg:w-2/3 bg-gray-800 rounded-3xl flex justify-around items-center">
                                        <p onClick={()=> setCurrentTab(0)} className={`cursor-pointer p-2 rounded-xl ${currentTab==0 ? 'bg-slate-900' : 'bg-transparent'}`}> Free </p>
                                        <p onClick={()=> setCurrentTab(1)} className={`cursor-pointer p-2 rounded-xl ${currentTab==1 ? 'bg-slate-900' : 'bg-transparent'}`}> New to Coding </p>
                                        <p onClick={()=> setCurrentTab(2)} className={`cursor-pointer p-2 rounded-xl ${currentTab==2 ? 'bg-slate-900' : 'bg-transparent'}`}> Most Popular </p>
                                        <p onClick={()=> setCurrentTab(3)} className={`cursor-pointer p-2 rounded-xl ${currentTab==3 ? 'bg-slate-900' : 'bg-transparent'}`}> Skills path </p>
                                        <p onClick={()=> setCurrentTab(4)} className={`cursor-pointer p-2 rounded-xl ${currentTab==4 ? 'bg-slate-900' : 'bg-transparent'}`}> Careers path </p>
                                    </div>
                                </div>
                        </div>
                </div>

                <div className="min-h-96 w-full bg-gray-100 text-black">
                        <div className="min-h-48 flex flex-col mb-24" style={{backgroundImage : `url('bghome.svg')`}}>;

                            <NavLink className="w-full flex flex-wrap justify-around gap-4 -translate-y-28 p-2">
                                    {
                                        boxData[currentTab].map((it,key)=>(
                                            <div key={key} className={`p-8 h-72 w-96 flex flex-col justify-between ${key==0 ? 'bg-gray-200' : 'bg-slate-800'} ${key==0 ? 'text-black' : 'text-white'} shadow-xl ${key==0 ? 'shadow-yellow-600' : 'shadow-black'}`}>
                                                <p className="text-xl font-semibold"> {it.heading}  </p>
                                                <p> {it.description} </p>
                                                <div className={`h-10 border-t-2 flex justify-between items-center border-dashed ${key==0 ? 'border-black' : 'border-white'}`}>
                                                    <div>
                                                        Beginner
                                                    </div>

                                                    <div>
                                                        6 Lessons
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                            </NavLink>

                            <div className="w-full flex justify-center px-8 gap-4"> 
                                    <Link to='/signup'>
                                        <button className="bg-yellow-400 text-black font-semibold lg:px-4 lg:py-2 p-1 rounded-xl text-sm hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200 flex gap-2 items-center"> Explore full catalog <span> <FaArrowRight /> </span> </button>
                                    </Link>
                                    <Link to='/login'>
                                        <button className="bg-gray-800 font-semibold lg:px-4 lg:py-2 p-1 rounded-xl text-sm hover:bg-gray-700 shadow-md shadow-black hover:scale-95 transition-all duration-200 text-white"> Learn More </button>
                                    </Link>
                            </div>
                        </div>

                        <div className="w-full flex flex-wrap justify-center gap-8 items-center p-4 mt-10">
                            <div className="h-full w-full sm:w-1/3 text-3xl font-bold text-start content-center">
                                Get the skills you need for a <span className="text-cyan-400">job that is in demand.</span>
                            </div>
                            <div className="h-full w-full sm:w-1/3 flex flex-col justify-center gap-2">
                                <p className="font-semibold text-sm"> The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills. </p>
                                <Link to='/login'>
                                    <button className="bg-yellow-400  font-semibold lg:px-4 lg:py-2 p-1 rounded-xl text-sm hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200"> Learn More </button>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="min-h-60 w-full flex flex-wrap p-4 mt-10">
                            <div className="w-full sm:w-1/2 flex flex-col items-center">
                                <div className="w-2/3 flex gap-2">
                                    <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center">
                                        <img src="Logo1.svg"/>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-lg"> Leadership </h1>
                                        <p className="text-sm "> Fully committed to the success company </p>
                                    </div>
                                </div>
                                <div className="h-16 w-[60%] border-l-2 border-black border-dashed"> </div>
                                <div className="w-2/3 flex gap-2">
                                    <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center">
                                        <img src="Logo2.svg"/>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-lg"> Responsibility </h1>
                                        <p className="text-sm "> Students will always be our top priority </p>
                                    </div>
                                </div>
                                <div className="h-16 w-[60%] border-l-2 border-black border-dashed"> </div>
                                <div className="w-2/3 flex gap-2">
                                    <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center">
                                        <img src="Logo3.svg"/>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-lg"> Flexibility </h1>
                                        <p className="text-sm "> The ability to switch is an important skills </p>
                                    </div>
                                </div>
                                <div className="h-16 w-[60%] border-l-2 border-black border-dashed"> </div>
                                <div className="w-2/3 flex gap-2">
                                    <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center">
                                        <img src="Logo4.svg"/>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-lg"> Solve the problem </h1>
                                        <p className="text-sm "> Code your way to a solution </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full sm:w-1/2 flex justify-center mt-4">
                                    <img src="study.png" className="h-96 sm:h-4/5 shadow-xl shadow-blue-600"/>
                                    <div className="absolute lg:px-8 left-4 sm:left-16 lg:left-28 -bottom-16 sm:bottom-8 bg-green-900 text-white h-24 w-[90%] sm:w-[70%] lg:w-2/3 flex justify-center items-center"> 
                                        <div className="w-1/2 flex justify-between border-r-2 border-green-800 p-4">
                                            <p className="text-2xl font-bold"> 10 </p>
                                            <p className="text-green-600 text-xs sm:text-sm"> Years <br />Experience </p>
                                        </div>
                                        <div className="w-1/2 flex justify-between p-4">
                                            <p className="text-2xl font-bold"> 250 </p>
                                            <p className="text-green-600 text-xs sm:text-sm"> Types of <br />Courses </p>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="min-h-60 w-full flex flex-col justify-center gap-2 items-center mt-20 ">
                            <div className="w-full sm:w-2/3 flex flex-col gap-2">
                                <h1 className="text-2xl sm:text-3xl font-semibold text-center content-center"> Your swiss knife for <span className="text-cyan-400"> learning any language </span> </h1>
                                <p className="text-semibold text-center content-center"> Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more. </p>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row justify-center items-center">
                                    <img src="progress.png" className="h-[20rem] lg:h-[24rem] translate-y-10 lg:translate-x-24 lg:translate-y-0"/>
                                    <img src="cmpwo.png" className="h-[28rem] lg:h-[30rem] -translate-y-10 lg:-translate-y-0"/>
                                    <img src="lesson.png" className="h-[20rem] lg:h-[28rem] -translate-y-40 lg:-translate-x-32 lg:-translate-y-4"/>
                            </div>
                            <Link to='/login'>
                                <button className="-translate-y-24 lg:translate-y-0 mb-2 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-xl text-sm hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200"> Learn More </button>
                            </Link>
                        </div>
                </div>

                <div className="min-h-96 w-full">
                    <div className="w-full flex flex-wrap">
                        <div className="w-full sm:w-1/2 flex justify-center">
                            <img src="instructor.png" className="h-80 sm:h-[30rem] shadow-xl shadow-blue-600"/>
                        </div>
                        <div className="w-full sm:w-1/2 flex flex-col justify-center gap-4 items-start p-8">
                                <h1 className="text-3xl font-semibold"> Become an<br/> <span className="text-cyan-400">instructor</span> </h1>
                                <p className="font-semibold"> Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                                <Link to='/login'>
                                    <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-xl text-sm hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200 flex gap-2 items-center"> Start Teaching Today <div className="text-sm"> <FaArrowRight /> </div> </button>
                                </Link>
                        </div>
                    </div>

                    
                </div>
                
                <Footer />
            </div>
        </>
    )
}

export default Home; 