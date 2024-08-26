import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const BasvuruSartlari = () => {
  return (
    <div className=' w-full grid grid-cols-2 items-start justify-center  flex-col lg:flex-row gap-10 max-w-7xl px-10 md:px-20'>
        <div className='flex flex-col'>
        <h1 className='text-2xl md:text-3xl text-bb-blue font-bold pb-4'>Başvuru Şartları</h1>
        <div className='flex flex-col items-start justify-start gap-4 bg-bb-green rounded px-4 py-4'>
        <div className='flex items-start justify-center text-white'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Türkiye Cumhuriyeti vatandaşı olmak</p>
        </div>
        <div className='flex items-start justify-center text-white'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Öğrencinin İstanbul’da öğrenim görüyor olması veya ailesinin/anne-baba vefat durumunda yakınının İstanbul’da ikamet etmesi</p>
        </div>
        <div className='flex items-start justify-center text-white'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Ön lisans, Lisans, Yüksek Lisans veya Doktora öğrencisi olmak</p>
        </div>
        <div className='flex items-start justify-center text-white'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Ara ve son sınıf öğrencileri için yılsonu başarı notunun en az 100 üzerinden 53 ya da 4,00 üzerinden 2,00 olması</p>
        </div>
        <div className='flex items-start justify-center text-white'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Devlet üniversitesinde okuyor olmak veya vakıf /özel üniversitede %100 burslu okuyor olmak</p>
        </div>

        </div>
        </div>
        <div className='flex flex-col'>
        <h1 className='text-2xl md:text-3xl text-bb-blue font-bold pb-4'>Başvuru Yapamayacak Öğrenciler</h1>
        <div className='flex flex-col items-start justify-start gap-4 bg-bb-green rounded px-4 py-4'>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><MdCancel className='w-6 h-6'/></span>
            <p>Açık öğretimde okuyan öğrenciler</p>
        </div>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><MdCancel className='w-6 h-6'/></span>
            <p>Yurtdışında öğrenim gören öğrenciler</p>
        </div>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><MdCancel className='w-6 h-6'/></span>
            <p>Ön lisans ve Lisans 30 yaşından büyükler, Yüksek lisans ve Doktora 40 yaşından büyükler</p>
        </div>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><MdCancel className='w-6 h-6'/></span>
            <p>Sabıka kaydı olanlar</p>
        </div>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><MdCancel className='w-6 h-6'/></span>
            <p>Öğrenim görüyorken yüz kızartıcı bir eylemden dolayı disiplin cezası alanlar</p>
        </div>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><MdCancel className='w-6 h-6'/></span>
            <p>Ücretli değişim programında bulunanlar</p>
        </div>
        </div>

        
        
        </div>
        <div className='flex flex-col'>
        <h1 className='text-2xl md:text-3xl text-bb-blue font-bold pb-4'>Gerekli Belgeler</h1>
        <div className='flex flex-col items-start justify-start gap-4 bg-bb-green rounded px-4 py-4'>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Adli sicil kaydı</p>
        </div>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Öğrenci belgesi ve not durumunu gösteren transkript</p>
        </div>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Bursluluk belgesi</p>
        </div>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Ailenin maddi durumunu gösteren belgeler (Gelir belgesi, Maaş bordrosu vb.)</p>
        </div>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Varsa kendisinin ya da aile bireylerinin engelli raporu fotokopisi</p>
        </div>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Öğrencinin banka hesap bilgilerini içeren belge</p>
        </div>
        </div>
        </div>
        <div className='flex flex-col'>
        <h1 className='text-2xl md:text-3xl text-bb-blue font-bold pb-4'>Bilgilendirme</h1>
        <div className='flex flex-col items-start justify-start gap-4 bg-bb-green rounded px-4 py-4'>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Değerlendirmede, eğitim yardımı değerlendirme kriterlerine göre yapılacak sıralama esas alınır.</p>
        </div>
        <div className='flex items-start justify-center text-white gap-2'>
            <span><FaAngleRight className='w-6 h-6'/></span>
            <p>Eğitim yardımına başvuru esnasında istenen belgelerin eksiksiz olarak yüklenmesi gerekmektedir. Eksik evrak yüklenmesi durumunda başvuru değerlendirmeye alınmayacaktır.</p>
        </div>
        
        </div>
        </div>
    </div>
  )
}

export default BasvuruSartlari
