import { useEffect, useState } from "react"

function PaymentTotal({ storagePick, computingPick, storagePrice, memory, computingPrice, computingName }) {

    const [storageName, setStorageName] = useState(" ")
    const [storageCost, setStorageCost] = useState(0)

    function determineSelected(){
        for(let i = 0; i < storagePick.length; i++){
            if(storagePick[i].value == true){
                setStorageName(memory[i])
                setStorageCost(parseFloat(storagePrice[i]))
            }
        }
    }

    useEffect(() => {
        determineSelected()
        console.log(storageName)
        console.log(storageCost)
    }, [])

    return(
    <>
      <div className="flex mt-32 mb-32 h-60 bg-navy ">

            <div className="h-0.5 mt-28 w-[50%] bg-white"> </div>
            <button type="button" className="object-right border border-lime text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-poppins font-semibold rounded-lg text-lg px-20 py-2 mb-24 text-center ml-96 mt-24">ACTIVATE</button>
        </div>
    </>
    )
}

export default PaymentTotal