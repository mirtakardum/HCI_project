import { useEffect, useState } from "react"

function PaymentTotal({ storagePick, computingPick, storagePrice, memory, computingPrice, computingName }) {

    const [storageName, setStorageName] = useState(" ")
    const [storageCost, setStorageCost] = useState(0)
    const [selectedComputing, setSelectedComputing] = useState(" ")
    const [computignCost, setComputingCost] = useState(0)

    function determineSelected(){
        setStorageName("")
        setStorageCost(0)
        setSelectedComputing("")
        setComputingCost(0)
        for(let i = 0; i < storagePick.length; i++){
            if(storagePick[i].value == true){
                setStorageName(memory[i])
                setStorageCost(parseFloat(storagePrice[i]))
            }
            if(computingPick[i].value == true){
                setSelectedComputing(computingName[i])
                setComputingCost(parseFloat(computingPrice[i]))
            }
            console.log(computignCost)
            console.log(storageCost)
        }
    }

    useEffect(() => {
        determineSelected()
    }, [storagePick])

    return(
    <>
      <div className="flex mt-32 mb-32 h-60 bg-navy ">
        <div className="w-[50%] mt-12">
            <p className="text-white text-6xl ml-16 font-bold font-space">{(storageCost + computignCost).toFixed(2)}<span className="text-blue-400 text-4xl font-bold font-space">/mo</span></p>
            <div className="h-0.5 mt-3 bg-white"> </div>
            <p className="text-white text-6xl ml-80 font-bold font-space">{storageName} {(storageName && selectedComputing) && "&"} {selectedComputing}</p>
        </div>
            <button type="button" className="object-right border border-lime text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-poppins font-semibold rounded-lg text-lg px-20 py-2 mb-24 text-center ml-96 mt-24">ACTIVATE</button>
        </div>
    </>
    )
}

export default PaymentTotal