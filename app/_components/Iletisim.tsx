import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import IFrame from "react-iframe";

const Iletisim = () => {
  return (
    <div className='items-center justify-center flex w-full'>
        <div className='sm:items-start items-center justify-center max-w-7xl w-full flex flex-col md:rounded-t-xl md:rounded-b-xl md:mx-20  md:my-20 bg-bb-green/10 drop-shadow-lg'>
        <div className='p-3 md:p-6 w-full items-center justify-center flex bg-bb-green md:rounded-t-xl'>
            <h3 className='text-white text-center text-lg md:text-xl lg:text-2xl font-semibold'>Bize Ulaşın</h3>
        </div>
        <div className='w-full flex flex-col items-center justify-center p-10 gap-4'>
            <div className='flex items-center justify-center gap-2 text-slate-700'>
                <FaPhone className='w-5 h-5 lg:w-6 lg:h-6'/>
                <h3 className= 'text-base md:text-lg font-medium'>444 09 39</h3>
            </div>
            <div className='flex items-center justify-center gap-2 text-slate-700'>
                <MdEmail className='w-5 h-5 lg:w-6 lg:h-6'/>
                <h3 className='text-base md:text-lg font-medium'>ibs@beylikduzu.istanbul</h3>
            </div>
        </div>  
        <div className="flex items-center justify-center w-full">
              <IFrame
                className="min-h-[300px] w-full md:border-2 md:rounded-lg border-bb-green"
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.4811496337397!2d28.624296090165203!3d40.99284089748809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55fcb769d3431%3A0xbe5b022984cca608!2zQmV5bGlrZMO8esO8IEJlbGVkaXllc2kgVmV0ZXJpbmVyIMSwxZ9sZXJpIE3DvGTDvHJsw7zEn8O8IEhheXZhbiBCYXLEsW5hxJ_EsQ!5e0!3m2!1str!2str!4v1694778140010!5m2!1str!2str"
              />
            </div>
        
        </div>
    </div>
  )
}

export default Iletisim
