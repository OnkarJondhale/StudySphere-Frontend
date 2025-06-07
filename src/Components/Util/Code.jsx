import { VscWhitespace } from "react-icons/vsc";
import { TypeAnimation } from "react-type-animation";
import "../../App.css"

function Code({data})
{

    return(
    <>
        <div className='relative w-80 h-80 sm:w-2/5 lg:w-1/3 flex gap-4 leading-none px-8 text-[0.8rem] font-semibold shadow-xl border-r-[0.08rem] border-blue-200'>
            <div className={`absolute ${data.backgroundColor}`}></div>
            <div className="text-sm leading-6 pt-1 ">
                {
                    data.lineCount.map((it,index)=>(
                        <p key={index}> {it} </p>
                    ))
                }
            </div>
            <div className="text-yellow-500">
                <TypeAnimation sequence={[data.data,5000,""]} repeat={Infinity} cursor={true} omitDeletionAnimation={true} style={{whiteSpace:'pre-line',display:"block"}}/>
            </div>
        </div>
    </>)
}

export default Code;