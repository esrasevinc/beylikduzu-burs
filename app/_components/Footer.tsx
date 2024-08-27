import React from "react";

const Footer = () => {
  return (
    <footer className="w-full font-base text-base flex relative bg-bb-blue items-center justify-center text-center px-4">
        <div className="flex flex-col gap-1 text-white py-4 text-sm">
            <p>Beylikdüzü Belediyesi Bilgi İşlem Müdürlüğü tarafından <span className="text-base px-1">&#10084;</span> ile tasarlanmıştır.</p>
            <p>&copy;{new Date().getFullYear()} Tüm hakları saklıdır. </p>

        </div>
    </footer>
  );
};

export default Footer;
