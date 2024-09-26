import Link from 'next/link'
import React from 'react'

const Sonuc = () => {
  return (
    <div className='items-center justify-center flex w-full'>
        <div className='md:items-start h-screen md:h-auto items-center justify-center max-w-7xl w-full flex flex-col px-10 md:px-20 py-10 md:py-16  md:mx-20 md:my-20 bg-bb-blue/20 drop-shadow-lg md:rounded-t-xl md:rounded-b-xl'>
        <h1 className='text-xl md:text-2xl lg:text-4xl text-bb-blue font-semibold text-center'>Yarının Öncüsü Gençler</h1>
        <p className='text-xl md:text-2xl lg:text-3xl text-bb-blue font-semibold text-center'>Eğitim Yardımı</p>
        <form className='text-bb-blue pt-8'>
            <div className='gap-2 flex flex-col'>
            <label htmlFor="tc" className='text-sm md:text-base' >TC Kimlik No</label>
            <input  type="text" maxLength={11} minLength={11} className='rounded px-2 py-1 w-full'/>
            <label htmlFor="dogum-tarihi" className='text-sm md:text-base mt-4' >Doğum Tarihi</label>
            <input  type="date"  className='rounded px-2 py-1 w-full'/>
            <Link 
            href="/"
            className='bg-bb-green hover:bg-bb-green/70 rounded-full px-4 py-2 text-white transition-all mt-6 lg:mt-10 md:text-lg items-center text-center'>
              Sonuç Getir
            </Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Sonuc
