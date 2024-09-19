"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/public/images/bb-logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((open) => !open);
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  });


  return (
    <header className="bg-bb-blue z-[1000] h-[74px] md:h-auto w-full fixed flex border-b-[6px] border-b-bb-green md:top-0">
      <div className="flex flex-row justify-around items-center w-full">
        <Link href={'/'} onClick={() => toggleMenu()}>
        <Image 
        src={logo}
        alt="BB Logo"
        className="w-48 md:w-56 h-auto"
        width={200}
        height={50}
        />
        </Link>

        <div className="absolute right-5 md:hidden" onClick={() => toggleMenu()}>
              {open ? 
              <MdClose className="text-white w-8 h-8" />
              :
              <MdOutlineMenu
                className="text-white w-8 h-8"
              />
            }
            </div>

            {open && (
              <div className='bg-bb-blue fixed bottom-0 right-0 left-0 top-[68px] overflow-hidden flex flex-col lg:hidden transition-all duration-500 ease-in-out text-white text-base items-start pt-10 px-6 gap-6'>
                <Link href="/" onClick={toggleMenu}>
                  Başvuru Şartları
                </Link>
                <Link href="/sikca-sorulan-sorular" onClick={toggleMenu}>
                   Sıkça Sorulan Sorular
                </Link>
                <Link href="/sonuclar" onClick={toggleMenu}>
                  Sonuçlar
                </Link>
                <Link
                onClick={toggleMenu}
                      className="block bg-white text-bb-green rounded-full px-4 py-2 text-base font-semibold hover:bg-bb-green hover:text-white transition-all"
                      href={"/basvur"}
                    >
                      Başvur
                    </Link>
              </div>
            )} 
        <div className="hidden md:flex gap-2 lg:gap-8 mx-[10px] my-[25px] items-center justify-center">
                  <div className="relative list-none">
                    <Link
                      className="block hover:text-slate-200 text-white text-sm lg:text-base "
                      href={"/"}
                    >
                      Başvuru Şartları
                    </Link>
                  </div>
                  <div className="relative list-none">
                    <Link
                      className="block hover:text-slate-200 text-white text-sm lg:text-base  "
                      href={"/sikca-sorulan-sorular"}
                    >
                      Sıkça Sorulan Sorular
                    </Link>
                  </div>
                  <div className="relative list-none">
                    <Link
                      className="block hover:text-slate-200 text-white text-sm lg:text-base "
                      href={"/sonuclar"}
                    >
                      Sonuçlar
                    </Link>
                  </div>
                  <div className="relative list-none">
                    <Link
                      className="block bg-white text-bb-green rounded-full px-4 py-2 text-sm lg:text-base font-semibold hover:bg-bb-green hover:text-white transition-all"
                      href={"/basvur"}
                    >
                      Başvur
                    </Link>
                  </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
