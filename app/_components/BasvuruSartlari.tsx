import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import banner from "@/public/images/banner.jpg";
import Image from "next/image";
import Link from "next/link";
import imza from "@/public/images/başkan-imza-beyaz.png";

const BasvuruSartlari = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full">
        <Image
          src={banner}
          alt="Banner Görseli"
          aria-hidden="true"
          width={1000}
          height={500}
          style={{ maxWidth: "100%", height: "auto" }}
          className="max-h-[500px] min-h-[350px] w-full object-cover object-center brightness-50 saturate-100 opacity-90"
        />
        <div className="z-10 absolute h-full w-full top-0">
          <div className="lg:mt-28 mt-10 sm:mt-20 h-full flex flex-col items-center">
            <h1 className="text-lg md:text-2xl lg:text-3xl text-white font-semibold text-center mx-2">
              BEYLİKDÜZÜ BELEDİYESİ
            </h1>
            <h1 className="text-base md:text-xl  text-white font-semibold text-center mx-2">
              2024 - 2025 Eğitim Öğretim Yılı
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mx-2 lg:mt-4">
              Yarının Öncüsü Gençler
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-semibold text-center mx-2 mt-1 lg:mt-2">
              Eğitim Destek Programı
            </p>
            <p className="text-white text-sm md:text-lg text-center mx-4 md:mx-12 lg:mx-48 mt-4">
              &quot;Her zaman siz gençlerimizin yanındayız.&quot;
            </p>
            <Image src={imza} alt="Baskan İmza" className="w-32 h-auto" />
            <Link
              className="bg-bb-green hover:bg-bb-green/70 rounded-full px-4 py-2 text-white transition-all mt-2 md:text-lg items-center text-center text-sm md:mt-4"
              href="https://ulakbel.beylikduzu.bel.tr/WebBasvuru/yarinin-oncusu-gencler#/"
              target="_blank"
            >
              Başvuru Yap
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center max-w-7xl px-10 md:px-20 my-12 lg:my-16">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 items-start justify-center  flex-col lg:flex-row gap-10 ">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-bb-blue font-bold pb-2">
              Başvuru Genel Koşulları
            </h1>
            <div className="flex flex-col items-start justify-start gap-4 bg-bb-green/70 rounded px-4 py-4 text-sm md:text-base lg:min-h-[368px]">
              <div className="flex items-center justify-center text-white">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Türkiye Cumhuriyeti vatandaşı olmak</p>
              </div>
              <div className="flex items-center justify-center text-white">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>
                  Öğrencinin Beylikdüzü&apos;nde ikamet etmesi veya ailesinin/anne-baba vefat
                  durumunda yakınının Beylikdüzü&apos;nde ikamet etmesi
                </p>
              </div>
              <div className="flex items-center justify-center text-white">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Ön lisans veya Lisans öğrencisi olmak</p>
              </div>
              <div className="flex items-center justify-center text-white">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Normal öğrenim süresinin içinde eğitimine devam ediyor olmak</p>
              </div>
              <div className="flex items-center justify-center text-white">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>
                  Devlet üniversitesinde okuyor olmak veya vakıf /özel üniversitede %100 burslu
                  okuyor olmak
                </p>
              </div>
              <div className="flex items-center justify-center text-white">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>
                  Ara ve son sınıf öğrencileri için yılsonu başarı notunun en az 100 üzerinden 50 ya
                  da 4,00 üzerinden 2,00 olması
                </p>
              </div>
              <div className="flex items-center justify-center text-white">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Gelir durumu açısından maddi desteğe ihtiyacı olmak **</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-bb-blue font-bold pb-2">
              Başvuru Yapamayacak Öğrenciler
            </h1>
            <div className="flex flex-col items-start justify-start gap-4 bg-bb-green/70 rounded px-4 py-4 text-sm md:text-base md:min-h-[368px]">
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <MdCancel className="w-6 h-6" />
                </span>
                <p>Açık öğretimde okuyan öğrenciler</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <MdCancel className="w-6 h-6" />
                </span>
                <p>Yurtdışında öğrenim gören öğrenciler</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <MdCancel className="w-6 h-6" />
                </span>
                <p>Ücretli değişim programında bulunanlar</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <MdCancel className="w-6 h-6" />
                </span>
                <p>Ön lisans ve Lisans 30 yaşından büyükler</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <MdCancel className="w-6 h-6" />
                </span>
                <p>Öğrenim görüyorken yüz kızartıcı bir eylemden dolayı disiplin cezası alanlar</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <MdCancel className="w-6 h-6" />
                </span>
                <p>Sabıka kaydı olanlar</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-bb-blue font-bold pb-2">
              Değerlendirme Yöntemi
            </h1>
            <div className="flex flex-col items-start justify-start gap-4 bg-bb-green/70 rounded px-4 py-4 text-sm md:text-base md:min-h-[368px]">
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Eğitim yardımı, Değerlendirme Komisyonuyla karara bağlanacaktır.</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>
                  Eğitim yardımına başvuru esnasında istenen belgelerin eksiksiz olarak yüklenmesi
                  gerekmektedir. Eksik evrak yüklenmesi durumunda başvuru değerlendirmeye
                  alınmayacaktır.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-bb-blue font-bold pb-2">
              Bilgilendirme
            </h1>
            <div className="flex flex-col items-start justify-start gap-4 bg-bb-green/70 rounded px-4 py-4 text-sm md:text-base md:min-h-[368px]">
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>
                  Eğitim yardımı başvurularınızı ve evrak işlemlerinizi web sayfamız{" "}
                  <a className="underline" href="https://ogrenci.beylikduzu.istanbul">
                    ogrenci.beylikduzu.istanbul
                  </a>{" "}
                  üzerinden gerçekleştirebilirsiniz.
                </p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>
                  Bilgilerinizin doğruluğundan emin olun. Onaylamanız durumunda, başvuru sırasında
                  beyan ettiğiniz evraklardaki bilgiler esas alınacaktır.
                </p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>
                  Sonucuna göre tarafınıza beyan ettiğiniz numara üzerinden arama
                  gerçekleştirilecektir.
                </p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>İletişim için: 444 09 39 (Dahililer: 2757, 2760, 2727)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-bb-blue font-bold pb-2  mt-10 lg:mt-12">
            Gerekli Belgeler
          </h1>
          <div className="flex flex-col md:flex-row items-start justify-start bg-bb-green/70 rounded md:min-h-[368px] w-full md:gap-10">
            <div className="flex flex-col gap-4 rounded px-4 py-4 text-sm md:text-base items-start justify-start">
              <h3 className="text-lg lg:text-xl text-white font-medium">Öğrenci Bilgileri</h3>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Nüfus cüzdan fotokopisi</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>İkametgah adresi</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Telefon numarası</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Öğrenci belgesi ve not durumunu gösteren transkript</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Bursluluk belgesi</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Devam edilen okuldan alınacak öğrenci belgesi</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <Link href="https://sonuc.osym.gov.tr/" className="underline" target={"_blank"}>
                  YKS yerleştirme sonuçları belgesi
                </Link>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <Link
                  href="https://www.turkiye.gov.tr/adli-sicil-kaydi"
                  className="underline"
                  target={"_blank"}
                >
                  Adli sicil kaydı (E-devlet)
                </Link>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Banka hesap bilgilerini içeren belge</p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>Varsa kendisinin ya da aile bireylerinin engelli raporu fotokopisi </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 px-4 py-4 text-sm md:text-base">
              <h3 className="text-lg lg:text-xl text-white font-medium">Hanede Yaşayan Bireyler</h3>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <Link
                  href="https://www.turkiye.gov.tr/nvi-ayni-hanede-ikamet-eden-kisi-belgesi-sorgulama"
                  target={"_blank"}
                  className="underline"
                >
                  Aynı hanede yaşayan kişi belgesi (E-devlet)
                </Link>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <p>
                  Gelir Belgesi (SGK Hizmet Dökümü, Emekli Geliri, Maaş Bordrosu)
                </p>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <Link
                  href="https://www.turkiye.gov.tr/tapu-bilgileri-sorgulama"
                  target={"_blank"}
                  className="underline"
                >
                  Tapu Kaydı Bilgisi (E-Devlet)
                </Link>
              </div>
              <div className="flex items-center justify-center text-white gap-2">
                <span>
                  <FaAngleRight className="w-6 h-6" />
                </span>
                <Link
                  href="https://www.turkiye.gov.tr/turkiye-noterler-birligi-adima-tescilli-arac-sorgulama"
                  target={"_blank"}
                  className="underline"
                >
                  Araç Kaydı Bilgisi (E-Devlet)
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 lg:mt-12  text-neutral-600 gap-2 items-start justify-start text-sm md:text-base">
          <p>
            * Anne babanın vefat etmesi ya da boşanması (Sadece resmi olarak boşanmış aileler)
            durumunda öğrencinin ikamet ettiği aile bireyi esas alınır.
          </p>
          <p>
            ** Gelir beyanına fazla mesai ve prim ücretleri dahil edilmez, bordro üstündeki net
            gelir baz alınır.
          </p>
          <p>Bize Ulaşın: 444 09 39 (Dahililer: 2757, 2760, 2727)</p>
        </div>
      </div>
    </div>
  );
};

export default BasvuruSartlari;
