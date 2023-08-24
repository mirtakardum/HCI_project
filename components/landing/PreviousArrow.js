import { BsFillArrowLeftCircleFill } from "react-icons/bs"

function PreviousArrow({ onClick }){
    return(
        <>
        <div className="absolute left-[4%] top-[80%] lg:top-[35%] z-20 cursor-pointer" onClick={onClick}>
            <BsFillArrowLeftCircleFill color="white" size={50} />
        </div>
        </>
    )
}

export default PreviousArrow