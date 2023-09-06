import { motion, spring } from "framer-motion"


function DesktopMockup(){
    return(
        <>
        <div className="bg-dark h-fit w-full">
            <div className="relative overflow-x-hidden w-full lg:h-[800px] mt-4">
                <div className="ml-10 mt-10">
                <p className="lg:hidden ml-10 text-l"><span className="text-[#BA68C8]">import</span><span className="text-[#81D4FA]"> CloudByteConnect</span></p>
                <p className="lg:hidden ml-10 mt-2 text-l"><span className="text-[#7DA8FC]">def</span><span className="text-[#F0FF93]"> Connect(</span><span className="text-[#81D4FA]">host =</span><span className="text-[#FF8D6A]">&quot;CloudByte&quot;</span><span className="text-[#F0FF93]">)</span></p>
                <p className="lg:hidden ml-20 mt-4 text-l"><span className="text-[#BA68C8]">if</span><span className="text-[#81D4FA]"> speed &lt; unbelievable:</span></p>
                <p className="lg:hidden ml-28 mt-2 text-l"><span className="text-[#81D4FA]">isCloudByte = false</span></p>
                <p className="lg:hidden ml-28 mt-2 text-l"><span className="text-[#F0FF93]">exit</span></p>
                <p className="lg:hidden ml-20 mt-2 text-l"><span className="text-[#BA68C8]">else:</span></p>
                <p className="lg:hidden ml-28 mt-2 text-l"><span className="text-[#F0FF93]">enjoy()</span></p>
                <p className="lg:hidden w-60 ml-10 text-l text-green-800 mt-2">(//)&quot;Once a new technology rolls (//)over you, if you&apos;re not part of (//)the steamroller, you&apos;re part of (//)the road.&quot;</p>
                <p className="lg:hidden w-60 ml-10 text-l text-green-800">(//)- Steward Brand</p>
                </div>
                <motion.p
                initial = {{x:-200}}
                whileInView={{x: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="hidden lg:block ml-20 pt-36 w-[40%] text-white font-poppins text-5xl italic font-bold ">&quot;Once a new technology rolls over you, if you&apos;re not part of the steamroller, you&apos;re part of the road.&quot;</motion.p>
                <motion.p
                initial = {{x:-200}}
                whileInView={{x: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="hidden lg:block ml-96 pl-20 mt-8 text-white font-poppins text-xl italic font-semibold">- Steward Brand</motion.p>
                <motion.img src="/images/desktop.png"
                initial = {{x: 500}}
                whileInView={{x: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="hidden lg:block w-[35%] absolute right-0 top-0"/>
            </div>
        </div>
        </>
    )
}

export default DesktopMockup