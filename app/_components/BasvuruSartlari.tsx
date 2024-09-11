import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import banner from '@/public/images/banner.jpg'
import Image from "next/image";
import Link from 'next/link';


const BasvuruSartlari = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
    <div className='relative w-full'>
        <Image 
        src={banner}
        alt='Banner Görseli'
        aria-hidden="true"
        width={1000}
        height={500}
        style={{ maxWidth: "100%", height: "auto" }}
        className="max-h-[500px] min-h-[350px] w-full object-cover object-center brightness-50 saturate-100 opacity-90"
        />
        <div className="z-10 absolute h-full w-full top-0">
        <div className="lg:mt-36 mt-8 sm:mt-24 h-full flex flex-col items-center">
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mx-2'>Beylikdüzü Genç Üniversiteli Eğitim Yardımı</h1>
        <p className='text-white mt-2 text-xs md:text-base text-center mx-4 md:mx-12 lg:mx-48 md:mt-8'>Eğitim hayatınıza katkıda bulunmak ve geleceğinizi desteklemek amacıyla, Beylikdüzü Belediyesi olarak üniversite öğrencilerine burs desteği sunuyoruz. Bu burs programı, ekonomik açıdan ihtiyaç duyan öğrencilerin eğitimlerini daha rahat sürdürebilmeleri ve başarılarına odaklanabilmeleri için hayata geçirilmiştir. Başvuru süreci ve gerekli belgeler hakkında detaylı bilgiye bu portal üzerinden ulaşabilir ve burs başvurunuzu kolayca gerçekleştirebilirsiniz. Siz de hemen başvurarak geleceğinize bir adım daha atabilirsiniz!</p>
        <Link 
        className='bg-bb-green hover:bg-bb-green/70 rounded-full px-4 py-2 text-white transition-all mt-4 md:text-lg'
        href='/sonuclar'
        >Sonuç Getir
        </Link>
        </div>
        </div>
    </div>
    <div className='flex flex-col w-full items-center max-w-7xl px-10 md:px-20 my-12 lg:my-16'>

    <div className=' w-full grid grid-cols-1 md:grid-cols-2 items-start justify-center  flex-col lg:flex-row gap-10 '>
        <div className='flex flex-col'>
            
        <h1 className='text-xl md:text-2xl lg:text-3xl text-bb-blue font-bold pb-2'>Başvuru Şartları</h1>
        <div className='flex flex-col items-start justify-start gap-4 bg-bb-green/70 rounded px-4 py-4 text-sm md:text-base'>
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
        <h1 className='text-xl md:text-2xl lg:text-3xl text-bb-blue font-bold pb-2'>Başvuru Yapamayacak Öğrenciler</h1>
        <div className='flex flex-col items-start justify-start gap-4 bg-bb-green/70 rounded px-4 py-4 text-sm md:text-base'>
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
        <h1 className='text-xl md:text-2xl lg:text-3xl text-bb-blue font-bold pb-2'>Gerekli Belgeler</h1>
        <div className='flex flex-col items-start justify-start gap-4 bg-bb-green/70 rounded px-4 py-4 text-sm md:text-base'>
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
        <h1 className='text-xl md:text-2xl lg:text-3xl text-bb-blue font-bold pb-2'>Bilgilendirme</h1>
        <div className='flex flex-col items-start justify-start gap-4 bg-bb-green/70 rounded px-4 py-4 text-sm md:text-base'>
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
    </div>
    </div>
  )
}

export default BasvuruSartlari
