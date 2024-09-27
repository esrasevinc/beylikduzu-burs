"use client";
import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FaChevronDown } from "react-icons/fa";

type Props = {};

const AccordionItem = ({ header, ...rest }: any) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className="flex justify-between w-full">
        {header}
        <div className="text-bb-blue hover:text-white">
          <FaChevronDown
            className={`ml-auto transition-transform duration-200 ease-out ${
              isEnter && "rotate-180 text-white"
            }`}
          />
        </div>
      </div>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 lg:p-6 text-left transition-all duration-100 ease-in-out text-bb-blue hover:text-white hover:bg-bb-blue/50 font-medium ${
          isEnter && "bg-bb-blue text-white "
        }`,
    }}
    contentProps={{
      className:
        "transition-height duration-200 ease-out text-sm md:text-base text-slate-700 bg-slate-100",
    }}
    panelProps={{ className: "p-4 lg:p-6" }}
  />
);

const SikcaSorulanSorular = (props: Props) => {
  return (
    <div className="w-full items-center justify-center flex sm:p-10 md:p-20 border-t">
        <div className="w-full max-w-7xl items-start flex flex-col justify-center">
          <div className="bg-bb-green p-3 md:p-6 w-full md:rounded-t-xl">
            <h1 className="text-white text-lg md:text-2xl font-semibold text-center">Sıkça Sorulan Sorular</h1>
          </div>
            <div className="bg-slate-50 w-full" >
      <Accordion>
        <AccordionItem header="Başvuru tarihleri içerisinde gerekli belgeleri okuldan temin edemiyorum. Nasıl bir yol izlemeliyim?">
          <div className="space-y-2">
            <p>
            Genç Üniversiteli Eğitim Yardımı başvuruları, üniversitelerin kayıt tarihi dikkate alınarak başlatıldığından belge temininde herhangi bir sorun olmamaktadır.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Üniversite 1. Sınıf öğrencisiyim. Transkript ve disiplin cezası almadığıma dair belge yükleyemiyorum. Nasıl bir yol izlemeliyim?">
          <div className="space-y-2">
            <p>
            1. sınıf öğrencilerinden transkript ve disiplin belgesi istenmemektedir
            </p>
            
          </div>
        </AccordionItem>
        
        <AccordionItem header="Anne ve baba ile iletişim halinde değilim. Ebeveynlerin gelir durumu belgesi için nasıl bir yol izlemeliyim?">
          <div className="space-y-2">
            <p>
            Resmi olarak anne-baba ayrı değil ise ikisinin de gelir durum belgesinin yüklenmesi gerekmektedir. Eğer boşanma süreci varsa ikisinden birinin gelir durum belgesi ve boşanma davasının devam ettiğine dair mahkeme belgesinin sisteme yüklenmesi gerekmektedir.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem header="Her yıl tekrar başvuru yapmam gerekir mi?">
          <div className="space-y-2">
            <p>
            Evet. Tekrar başvuru yaparak istenen belgeleri güncellemeniz gerekmektedir.
            </p>
           
          </div>
        </AccordionItem>
        <AccordionItem header="Ebeveynlerim çalışmıyor. Çalışmadıklarına dair evrak nereden alınmalıdır?">
          <div className="space-y-2">
            <p>
            SGK’dan ya da E-Devlet sisteminden SGK Tescil Hizmet Dökümü temin edilmelidir.
            </p>
           
          </div>
        </AccordionItem>
        <AccordionItem header="Ebeveynlerin gelir/gelirsizlik belgelerinin ayrı ayrı mı yüklenmesi gerekiyor?">
          <div className="space-y-2">
            <p>
            Evet. Ayrı yüklenmesi gerekmektedir.
            </p>
           
          </div>
        </AccordionItem>
        <AccordionItem header="Üniversite eğitim kaydımı dondurdum. Eğitim yardımından faydalanabilir miyim?">
          <div className="space-y-2">
            <p>
            Kayıt donduran öğrenciler eğitim yardımından yararlanamamaktadır.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Bu yıl yatay geçiş yaptım. Başvuruda sunulacak evraklar hangi okulumdan alınmalıdır?">
          <div className="space-y-2">
            <p>
            İki kurumdan birinden alınabilir. Hangisinden alınabiliyorsa, o okuldan alınan evrak geçerli sayılmaktadır.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="E-Devlet üzerinden alınan SGK Tescil Hizmet Dökümü, sisteme yüklemek için büyük bir dosya. Nasıl yol izlemeliyim?">
          <div className="space-y-2">
            <p>
            E-Devlet üzerinden alınan belgenin tüm sayfaları pdf olarak sisteme yüklenmesi gerekmektedir.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Maaş bordrosu geçtiğimiz son aya mı ait olmalıdır?">
          <div className="space-y-2">
            <p>
            Evet. Yalnızca son aya ait maaş bordrosu geçerlidir.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="İkametim Beylikdüzü’nde ancak il dışında bir üniversiteye kayıtlıyım. Başvuru yapabilir miyim?">
          <div className="space-y-2">
            <p>
            Evet. Başvuru yapılabilir.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Açık Öğretim Fakültesi öğrencisiyim. Eğitim yardımından faydalanabilir miyim?">
          <div className="space-y-2">
            <p>
            Hayır. Açık Öğretim Fakültesi öğrencileri başvuru yapamamaktadır.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Aynı hanede iki üniversite öğrencisi eğitim yardımından faydalanabilir mi?">
          <div className="space-y-2">
            <p>
            Evet, faydalanabilir.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Vakıf üniversitesinde %50 burslu öğrenci olarak eğitim alıyorum. Eğitim yardımından faydalanabilir miyim?">
          <div className="space-y-2">
            <p>
            Hayır. Yalnızca devlet üniversitelerinde eğitim gören ve vakıf üniversitelerinde %100 burslu olan öğrenciler başvuru yapabilmektedir.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Yüksek lisans/doktora öğrencisiyim. Eğitim yardımından faydalanabilir miyim?">
          <div className="space-y-2">
            <p>
            Hayır. Yüksek lisans/doktora öğrencileri başvuru yapamamaktadır.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Okul döneminde sigortalı işte çalışmayı planlıyorum. Eğitim yardımım kesilir mi?">
          <div className="space-y-2">
            <p>
            Hayır. Başvuru esnasındaki bilgiler geçerli olacaktır.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Eğitim yardımlarının hesaplara yatırılma tarihi nedir?">
          <div className="space-y-2">
            <p>
            Başvuruları kabul edilen öğrenciler, SMS ile bilgilendirilecektir
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Eğitim yardımlarının miktarı ne kadar olacaktır?">
          <div className="space-y-2">
            <p>
            Başvuruları kabul edilen öğrenciler, eğitim yardımı miktarı hakkında bilgilendirilecektir.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Eğitim yardımı için başvurdum ancak kendi hesabım yok. Yakınımın banka hesap numarasını verebilir miyim?">
          <div className="space-y-2">
            <p>
            18 yaşından büyükseniz kendi hesap numaranız, küçükseniz ebeveynin ya da yasal vasinin hesap numarası verilmelidir.
            </p>
           
          </div>
        </AccordionItem>
        
        <AccordionItem header="Hatalı evrak yüklemesi veya bilgi girilmesi durumunda nasıl bir işlem yapılacaktır?">
          <div className="space-y-2">
            <p>
            Hatalı evrak yüklenmesi durumunda tarafınıza bilgilendirme yapılarak tekrar belge yükleme/düzenleme imkanı verilecektir.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Herhangi bir kurumdan burs almıyorum. Yine de burs almadığıma dair evrak sunmak zorunda mıyım?">
          <div className="space-y-2">
            <p>
            Hayır. Herhangi burs alınmadığına dair bir belge sunmak gerekmemektedir.
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Okulum şehir dışında. Başvuru evraklarını (Transkript veya öğrenci belgesi) e-mail veya fax yoluyla iletebilir miyim?">
          <div className="space-y-2">
            <p>
            Kaşeli ve imzalı tüm evrakların başvuran öğrenci tarafından sisteme girilmesi gerekmektedir.
            </p>
           
          </div>
        </AccordionItem>

      </Accordion>
      </div>
      </div>
    </div>
  );
};

export default SikcaSorulanSorular;
