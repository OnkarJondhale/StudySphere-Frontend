import { Link } from "react-router-dom";
import Footer from "../Util/Footer.jsx";

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "StudySphere partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "StudySphere partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "StudySphere partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "StudySphere partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "StudySphere partners with more than 275+ leading universities and companies to bring",
    },
  ];

  const Stats = [
    { count: "5K", label: "Active Students" },
    { count: "10+", label: "Mentors" },
    { count: "200+", label: "Courses" },
    { count: "50+", label: "Awards" },
  ];

function About()
{
    return(
        <>
            <div className="flex flex-col gap-10 ">
                
                {/* top section */}
               <div className="w-full flex flex-col gap-2">
                    {/* Heading */}
                    <div className="min-h-[25rem] w-full bg-slate-800 flex flex-col justify-start py-10 sm:py-16 gap-4 items-center">
                            <h1 className="w-full  sm:w-2/3 text-2xl sm:text-4xl font-bold text-center"> Driving Innovation in Online Education for a <span className="text-cyan-400"> Brighter Future </span> </h1>
                            <p className="w-full sm:w-2/3 text-sm sm:text-base font-semibold text-center"> StudySphere is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community. </p>
                    </div>

                    <div className="w-full flex justify-center gap-2"> 
                        <img src="about2.webp" className="-translate-y-20 hidden lg:block h-56 lg:h-auto"/>
                        <img src="about3.webp" className="-translate-y-20 h-56 sm:h-auto"/>
                        <img src="about4.webp" className="-translate-y-20 hidden lg:block h-56 lg:h-auto"/>
                    </div>
                    
                    {/* Quote */}
                    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 text-center text-white">
                        We are passionate about revolutionizing the way we learn. Our
                        innovative platform <span className="text-cyan-400"> Combines Technology </span>,{" "}
                        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
                            {" "}
                            expertise
                        </span>
                        , and community to create an
                        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
                            {" "}
                            unparalleled educational
                        experience.
                        </span> 
                    </div>                
               </div>

                {/* Line */}
                <hr></hr>

                {/* Story */}
                <div className="min-h-96 w-full flex flex-col-reverse sm:flex-row gap-4 p-2 lg:p-8 mb-20">
                    <div className="w-full sm:w-1/2 flex flex-col gap-4 sm:py-4 sm:px-8 lg:px-16 p-1">
                        <h1 className="bg-gradient-to-b py-1 from-red-400 via-red-600 to-red-800 text-4xl font-bold text-transparent bg-clip-text"> Our Founding Story </h1>
                        <p className="text-sm sm:text-base font-semibold"> Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world. </p>
                        <p className="text-sm sm:text-base font-semibold"> As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential. </p> 
                    </div>
                    <div className="w-full sm:w-1/2 flex justify-center items-center">
                        <img src="about1.png" className="shadow-xl shadow-red-600 sm:h-96 lg:h-auto"/>
                    </div>
                </div>

                {/* Vision and Mission */}
                <div className="w-full flex flex-wrap p-2 sm:px-8 lg:px-16 mb-10">
                    <div className="w-full sm:w-1/2 flex flex-col gap-2 sm:px-6 lg:px-8">
                        <h1 className="bg-gradient-to-b from-orange-400 via-orange-600 to-orange-800 text-4xl text-transparent bg-clip-text font-bold"> Our Vision </h1>
                        <p className="text-sm sm:text-base font-semibold"> With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience. </p>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col gap-2 sm:px-6 lg:px-8">
                        <h1 className="bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 text-4xl text-transparent bg-clip-text font-bold"> Our Mission </h1>
                        <p className="text-sm sm:text-base font-semibold"> Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities. </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-slate-800 mb-16">
                        <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto">
                                <div className="grid grid-cols-2 md:grid-cols-4 text-center">
                                    {Stats.map((data, index) => {
                                        return (
                                        <div className="flex flex-col py-10" key={index}>
                                            <h1 className="text-[30px] font-bold text-richblack-5">
                                            {data.count}
                                            </h1>
                                            <h2 className="font-semibold text-[16px] text-richblack-500">
                                            {data.label}
                                            </h2>
                                        </div>
                                        );
                                    })}
                                </div>
                            </div>
                </div>


                {/* Grid */}
                <div className="grid mx-auto gap-4 sm:w-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                    {LearningGridArray.map((card, i) => {
                        return (
                            <div
                                key={i}
                                className={`${i === 0 && "lg:col-span-2 lg:h-[320px]"} ${
                                    card.order % 2 === 1
                                        ? "bg-slate-700 sm:h-[220px] lg:h-[320px] shadow-xl shadow-black rounded-xl"
                                        : card.order % 2 === 0
                                        ? "bg-slate-800 sm:h-[220px] lg:h-[320px] shadow-xl shadow-black rounded-xl"
                                        : "bg-transparent"
                                } ${card.order === 3 && "lg:col-start-2"} flex flex-col h-full`}
                            >
                                {card.order < 0 ? (
                                    <div className="lg:w-[90%] flex flex-col gap-3 lg:px-16 xl:px-28 ">
                                        <div className="sm:text-xl lg:text-4xl font-semibold">
                                            {card.heading}
                                            <span className="text-cyan-400"> {card.highlightText} </span>
                                        </div>
                                        <p className="text-slate-300 font-medium">
                                            {card.description}
                                        </p>
                                        <div className="w-fit mt-2">
                                            <Link to={card.BtnLink}>
                                                <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-xl text-sm hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200">
                                                    {card.BtnText}
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col justify-between p-8 h-full">
                                        <div className="flex flex-col gap-8">
                                            <h1 className="text-slate-200 text-lg">{card.heading}</h1>
                                            <p className="text-slate-300 font-medium">{card.description}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>


                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default About;