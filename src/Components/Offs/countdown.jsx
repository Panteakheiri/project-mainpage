import React,{useState,useEffect} from 'react'

export default function Clock() {

    const[days,setdays]=useState()
    const[hours,sethours]=useState()
    const[seconds,setseconds]=useState()
    const[minutes,setminutes]=useState()

    let interval;

    const countDown= () => {

        const destination= new Date('Nov 10, 2023').getTime()

        interval=setInterval(()=>{
            const now = new Date().getTime()
            const diffrent= destination -now
            const days=Math.floor(diffrent / (1000*60*60*24))

            const hours=Math.floor(diffrent % (1000*60*60*24) / (1000*60*60))

            const minutes=Math.floor(diffrent % (1000*60*60) / (1000*60))

            const seconds=Math.floor(diffrent % (1000*60) / 1000)

            if(destination < 0) clearInterval(interval.current)
            else{
                setdays(days)
                sethours(hours)
                setminutes(minutes)
                setseconds(seconds)
            }
        })

    
    }

    useEffect(()=>{
          countDown()
    })
  return (
    <div className=' flex items-center justify-center mt-6 gap-12'>

        <div className='clock-data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-blue-800 font-bold'>{hours} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :</h1>
                <h5 className='text-gray-600 text-[10px]'>hours</h5>
            </div>
            
        </div>


        <div className='clock-data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-blue-800 font-bold'>{minutes}&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; :</h1>
                <h5 className='text-gray-600 text-[10px]'>mins</h5>
            </div>
        
        </div>


        <div className='clock-data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-blue-800 font-bold'>{seconds} </h1>
                <h5 className='text-gray-600 text-[10px]'>seconds</h5>
            </div>
         
        </div>
    </div>
  )
}


