import { useState } from "react";

function PaymentTotal( storagePick, storagePrice, computingPick, computingPrice) {

    const [storageName, setStorageName] = useState(" ")
    const [storageCost, setStorageCost] = useState(" ")
    
    for(let i=0; i<storagePick.lenght; i++){
        if(storagePick[i].value == true)
        setStorageName(memory[i])
        setStorageCost(parseInt(StoragePrice[i]))
    }

    return(
    <>
      <div className="flex mt-32 mb-32 h-60 bg-navy ">
            <div className="h-0.5 mt-28 w-[50%] bg-white"> </div>
            <button type="button" class="object-right border border-lime text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br shadow-lg shadow-cyan-500/50 font-poppins font-semibold rounded-lg text-lg px-20 py-2 mb-24 text-center ml-96 mt-24">ACTIVATE</button>
        </div>
    </>
    )
}

export default PaymentTotal