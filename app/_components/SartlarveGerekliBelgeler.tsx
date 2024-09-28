import Link from 'next/link';
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const SartlarveGerekliBelgeler = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>

<div className='flex flex-col w-full items-center max-w-7xl px-10 md:px-20 my-12 lg:my-16'>

<div className=' w-full grid grid-cols-1 md:grid-cols-2 items-start justify-center  flex-col lg:flex-row gap-10 '>
    <div className='flex flex-col'>
        
    <h1 className='text-xl md:text-2xl lg:text-3xl text-bb-blue font-bold pb-2'>Başvuru Genel Koşulları</h1>
    <div className='flex flex-col items-start justify-start gap-4 bg-bb-green/70 rounded px-4 py-4 text-sm md:text-base lg:min-h-[368px]'>
    <div className='flex items-center justify-center text-white'>
        <span><FaAngleRight className='w-6 h-6'/></span>
        <p>Türkiye Cumhuriyeti vatandaşı olmak</p>
    </div>
    <div className='flex items-center justify-center text-white'>
        <span><FaAngleRight className='w-6 h-6'/></span>
        <p>Öğrencinin Beylikdüzü&apos;nde ikamet etmesi veya ailesinin/anne-baba vefat durumunda yakınının Beylikdüzü&apos;nde ikamet etmesi</p>
    </div>
    <div className='flex items-center justify-center text-white'>
        <span><FaAngleRight className='w-6 h-6'/></span>
        <p>Ön lisans veya Lisans öğrencisi olmak</p>
    </div>
    <div className='flex items-center justify-center text-white'>
        <span><FaAngleRight className='w-6 h-6'/></span>
        <p>Normal öğrenim süresinin içinde eğitimine devam ediyor olmak</p>
    </div> 
    <div className='flex items-center justify-center text-white'>
        <span><FaAngleRight className='w-6 h-6'/></span>
        <p>Devlet üniversitesinde okuyor olmak veya vakıf /özel üniversitede %100 burslu okuyor olmak</p>
    </div>
    <div className='flex items-center justify-center text-white'>
        <span><FaAngleRight className='w-6 h-6'/></span>
        <p>Ara ve son sınıf öğrencileri için yılsonu başarı notunun en az 100 üzerinden 53 ya da 4,00 üzerinden 2,00 olması</p>
    </div>
    <div className='flex items-center justify-center text-white'>
        <span><FaAngleRight className='w-6 h-6'/></span>
        <p>Gelir durumu açısından maddi desteğe ihtiyacı olmak **</p>
    </div>
    
    </div>
   
    </div>
    
  
    <div className='flex flex-col w-full'>
    <h1 className='text-xl md:text-2xl lg:text-3xl text-bb-blue font-bold pb-2'>Gerekli Belgeler</h1>
    <div className='flex flex-col md:flex-row items-start justify-start bg-bb-green/70 rounded  w-full '>
        <div className='flex flex-col gap-4 rounded px-4 py-4 text-sm md:text-base items-start justify-start'>
        
        <h3 className='text-lg lg:text-xl text-white font-medium'>Öğrenci Bilgileri</h3>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Nüfus cüzdan fotokopisi</p>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>İkametgah adresi</p>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Telefon numarası</p>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Öğrenci belgesi ve not durumunu gösteren transkript</p>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Bursluluk belgesi</p>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Devam edilen okuldan alınacak öğrenci belgesi</p>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <Link href="https://sonuc.osym.gov.tr/" className='underline' target={'_blank'}>YKS yerleştirme sonuçları belgesi</Link>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <Link href="https://www.turkiye.gov.tr/adli-sicil-kaydi" className='underline' target={'_blank'}>Adli sicil kaydı (E-devlet)</Link>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Banka hesap bilgilerini içeren belge</p>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Varsa kendisinin ya da aile bireylerinin engelli raporu fotokopisi </p>
        </div>
        </div>
        <div className='flex flex-col items-start justify-start gap-4 px-4 py-4 text-sm md:text-base'>
        <h3 className='text-lg lg:text-xl text-white font-medium'>Hanede Yaşayan Bireyler</h3>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <Link href="https://www.turkiye.gov.tr/nvi-ayni-hanede-ikamet-eden-kisi-belgesi-sorgulama" target={'_blank'} className='underline'>Aynı hanede yaşayan kişi belgesi (E-devlet)</Link>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <Link href="https://www.turkiye.gov.tr/sgk-tescil-ve-hizmet-dokumu" target={'_blank'} className='underline'>SGK Hizmet Dökümü (Barkodlu) (E-Devlet)</Link>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <Link href="https://www.turkiye.gov.tr/tapu-bilgileri-sorgulama" target={'_blank'} className='underline'>Tapu Kaydı Bilgisi (E-Devlet)</Link>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <Link href="https://www.turkiye.gov.tr/turkiye-noterler-birligi-adima-tescilli-arac-sorgulama" target={'_blank'} className='underline'>Araç Kaydı Bilgisi (E-Devlet)</Link>
        </div>
        </div>
        </div>
        
    </div>
    
</div>

<div className='flex flex-col mt-4 lg:mt-12  text-neutral-600 gap-2 items-start justify-start text-sm md:text-base'>
        <p>* Anne babanın vefat etmesi ya da boşanması (Sadece resmi olarak boşanmış aileler) durumunda öğrencinin
        ikamet ettiği aile bireyi esas alınır.</p>
        <p>** Gelir beyanına fazla mesai ve prim ücretleri dahil edilmez, bordro üstündeki net gelir baz alınır.</p>
        </div>
</div>
    </div>
  )
}

export default SartlarveGerekliBelgeler;
