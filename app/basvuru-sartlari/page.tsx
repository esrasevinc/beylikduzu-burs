import React from "react";
import SartlarveGerekliBelgeler from "../_components/SartlarveGerekliBelgeler";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Başvuru Şartları | Beylikdüzü Belediyesi",
};

const page = () => {
  return (
    <>
      <SartlarveGerekliBelgeler />
    </>
  );
};

export default page;
