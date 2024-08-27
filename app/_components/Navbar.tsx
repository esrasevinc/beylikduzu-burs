"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/images/bb-logo.png";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((open) => !open);
  };


  return (
    <header className="bg-bb-blue z-[1000] h-[72px] md:h-auto w-full fixed flex border-b-[6px] border-b-bb-green md:top-0">
      <div className="flex flex-row justify-around items-center w-full">
        <Link href={'/'}>
        <Image 
        src={logo}
        alt="BB Logo"
        className="w-48 md:w-56 h-auto"
        width={200}
        height={50}
        />
        </Link>

        <div className="absolute right-5 md:hidden" onClick={() => toggleMenu()}>
              <MdOutlineMenu
                className="text-white w-8 h-8"
              />
            </div>

            {open && (
              <div className='bg-bb-blue h-screen flex '>
                <Link href="/basvuru-sartlari" onClick={toggleMenu}>
                  Başvuru Şartları
                </Link>
                <Link href="/sik-sorulan-sorular" onClick={toggleMenu}>
                   Sık Sorulan Sorular
                </Link>
                <Link href="/sonuclar" onClick={toggleMenu}>
                  Sonuçlar
                </Link>
                <Link href="/iletisim" onClick={toggleMenu}>
                  İletişim
                </Link>
              </div>
            )} 
        <div className="hidden md:flex gap-2 lg:gap-4">
                  <div className="relative list-none">
                    <Link
                      className="block hover:text-slate-200 text-white text-sm lg:text-base px-[10px] py-[25px]"
                      href={"/"}
                    >
                      Başvuru Şartları
                    </Link>
                  </div>
                  <div className="relative list-none">
                    <Link
                      className="block hover:text-slate-200 text-white text-sm lg:text-base px-[10px] py-[25px] "
                      href={"/sikca-sorulan-sorular"}
                    >
                      Sıkça Sorulan Sorular
                    </Link>
                  </div>
                  <div className="relative list-none">
                    <Link
                      className="block hover:text-slate-200 text-white text-sm lg:text-base px-[10px] py-[25px]"
                      href={"/sonuclar"}
                    >
                      Sonuçlar
                    </Link>
                  </div>
                  <div className="relative list-none">
                    <Link
                      className="block hover:text-slate-200 text-white text-sm lg:text-base px-[10px] py-[25px]"
                      href={"/iletisim"}
                    >
                      İletişim
                    </Link>
                  </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
