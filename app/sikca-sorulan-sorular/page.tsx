import React from 'react'
import SikcaSorulanSorular from '../_components/SikcaSorulanSorular'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Beylikdüzü Belediyesi",
};

const page = () => {
  return (
    <>
      <SikcaSorulanSorular />
    </>
  )
}

export default page
