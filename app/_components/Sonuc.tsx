import React from 'react'

const Sonuc = () => {
  return (
    <div className='items-center justify-center flex w-full '>
        <div className='sm:items-start items-center justify-center max-w-7xl w-full flex flex-col px-10 md:px-20 py-10 md:py-16  md:mx-20 my-10 md:my-20 bg-bb-blue/20 drop-shadow-lg md:rounded-t-xl md:rounded-b-xl'>
        <p className='text-xl md:text-2xl lg:text-3xl text-bb-blue font-semibold'>Beylikdüzü Genç Üniversiteli Eğitim Yardımı</p>
        <form className='text-bb-blue pt-8'>
            <div className='gap-2 flex flex-col'>
            <label htmlFor="tc" className='text-sm md:text-base'>TC Kimlik No</label>
            <input type="text" className='rounded px-2 py-1 w-full'/>
            <button className='bg-bb-green hover:bg-bb-green/70 rounded-full px-4 py-2 text-white transition-all mt-4'>Sonuç Getir</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Sonuc
