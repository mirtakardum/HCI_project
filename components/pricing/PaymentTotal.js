import { useEffect, useState } from "react"
import { useRouter } from 'next/router';

function PaymentTotal({ storagePick, computingPick, storagePrice, memory, computingPrice, computingName }) {

    const [storageName, setStorageName] = useState(" ")
    const [storageCost, setStorageCost] = useState(0)
    const [storageIsSelected, setStorageIsSelected] = useState(false)
    const [selectedComputing, setSelectedComputing] = useState(" ")
    const [computignCost, setComputingCost] = useState(0)
    const [computingIsSelected, setComputingisSelected] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const router = useRouter();

    function determineSelected(){
        setStorageName("")
        setStorageCost(0)
        setSelectedComputing("")
        setComputingCost(0)
        setComputingisSelected(false)
        setStorageIsSelected(false)
        setIsActive(false)
        for(let i = 0; i < storagePick.length; i++){
            if(storagePick[i].value == true){
                setStorageName(memory[i])
                setStorageCost(parseFloat(storagePrice[i]))
                setIsActive(true)
            }
            if(computingPick[i].value == true){
                setSelectedComputing(computingName[i])
                setComputingCost(parseFloat(computingPrice[i]))
                setComputingisSelected(true)
                setIsActive(true)
            }
        }
    }

    function handleActivate(){
        if(isActive){
            router.push("/payment")
        }
        else{
            alert("No service selected!")
        }
    }

    useEffect(() => {
        determineSelected()
    }, [storagePick])

    return(
    <>
      <div className="flex mt-32 mb-32 h-60 bg-navy ">
        <div className="w-[55%] lg:w-[50%] mt-12">
            <p className="text-white text-5xl lg:text-6xl ml-2 lg:ml-16 font-bold font-space">{(storageCost + computignCost).toFixed(2)} €<span className="text-blue-400 text-4xl font-bold font-space">/mo</span></p>
            <div className="h-0.5 mt-3 bg-white"> </div>
            <p className="text-white text-5xl lg:text-6xl lg:ml-80 font-bold font-space">{storageName} {(storageName && selectedComputing) && "&"} {selectedComputing}</p>
        </div>
            <button type="button" className={`object-right border border-lime text-white ${isActive === true ? "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300 shadow-cyan-500/50" : "bg-gray-500 focus:ring-4 focus:ring-red-600 cursor-default"} focus:outline-none shadow-lg  dark:shadow-lg font-poppins font-semibold rounded-lg text-m lg:text-lg px-6 lg:px-20 py-4 lg:py-2 mb-24 text-center ml-7 lg:ml-96 mt-20 lg:mt-24`} onClick={handleActivate}>ACTIVATE</button>
        </div>
    </>
    )
}

export default PaymentTotal