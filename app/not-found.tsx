import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center pt-14 md:pt-20 lg:pt-32'>
      <p className='text-black/70 lg:text-2xl'>Sayfa bulunamadı!</p>

      <Link 
      href="/" 
      className='py-2 px-4 text-sm lg:text-base bg-bb-green text-white border-transparent border hover:bg-white transition-colors hover:border-bb-green hover:text-bb-green rounded-full mt-4'>
        Geri Dön
        </Link>
    </div>
  )
}