import { BsFillArrowRightCircleFill } from "react-icons/bs"

function NextArrow({ onClick }){
    return(
        <>
        <div className="absolute right-[4%] top-[80%] lg:top-[35%] cursor-pointer" onClick={onClick}>
            <BsFillArrowRightCircleFill color="white" size={50} />
        </div>
        </>
    )
}

export default NextArrow