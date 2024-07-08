import { useState } from "react"
import Overlay from "./Overlay";
import ContactModal from "./ContactModal"

function FAQ(){

    const qna = [
        {
            question: "What does CloudByte offer?",
            answer: "CloudByte offers a cloud hosted platform where companies or individuals can store data and use the worlds fastest hardware to run their software."
        },
        {
            question: "What should my business get?",
            answer: "Every business has it's own unique demands. Feel free to contact us via email and let our team figure out the best plan to suit your business's needs."
        },
        {
            question: "How much do the services cost?",
            answer: "Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements."
        },
        {
            question: "How do I get started with CloudByte?",
            answer: "It's simple! Visit our pricing page to set up your plan and we'll send you an email containing all of your account information. Once your account is active, you decide who has access to your cloud platform."
        },

    ]

    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [isOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true)
    }

    function closeModal(){
        setIsOpen(false)
    }


    const toggle = (i) => {
        if(selectedQuestion == i){
            return setSelectedQuestion(null)
        }

        setSelectedQuestion(i)
    }

    return(
        <>
        <div className="relative pt-10 h-fit pb-10 lg:h-screen bg-dark">
        <div class={`hidden lg:block absolute top-[14%] right-[12%] h-[7%] w-[5%] float-right bg-light`}></div>
        <div class={`hidden lg:block absolute top-[18%] left-[15%] h-[4%] w-[2%] float-right bg-light`}></div>
        <div class={`hidden lg:block absolute top-[24%] left-[18%] h-[2%] w-[1%] float-right bg-light`}></div>
        <div class={`hidden lg:block absolute top-[84%] right-[22%] h-[3%] w-[2%] float-right bg-light`}></div>
            <p className="text-7xl font-space text-white font-bold text-center">FAQ</p>
            <p className="text-xl mt-5 font-poppins text-white text-center">For any further questions feel free to <span className="underline cursor-pointer" onClick={() => openModal()}>contact us</span></p>
            <div className="text-center mt-16">
                {qna.map((item, i) => (
                    <div key={i} className="cursor-pointer hover:bg-slate-800" onClick={() => toggle(i)}>
                        <div className="relative flex justify-center">
                            <p className="text-l lg:text-2xl font-poppins text-white font-semibold mt-6">{item.question}</p>
                            <span className="absolute right-10 mt-7 lg:mt-10 text-white text-xl font-poppins">{selectedQuestion === i ? '-' : '+'}</span>
                        </div>
                        <div className="border-b-2 pb-4 border-gray-600 mt-3">
                            <p className={`${selectedQuestion === i ? "text-l lg:text-xl font-poppins text-white" : "hidden"}`}>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {isOpen && (<Overlay close={closeModal}>{<ContactModal close={closeModal}/>}</Overlay>)}
        </>
    )
}

export default FAQ