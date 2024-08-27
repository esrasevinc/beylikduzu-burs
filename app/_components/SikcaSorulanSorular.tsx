"use client";
import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

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
        <AccordionItem header="Soru 1">
          <div className="space-y-2">
            <p>
              Cevap 1
            </p>
           
          </div>
        </AccordionItem>

        <AccordionItem header="Soru 2">
          <div className="space-y-2">
            <p>
              Cevap 2
            </p>
            
          </div>
        </AccordionItem>
        
        <AccordionItem header="Soru 3">
          <div className="space-y-2">
            <p>
              Cevap 3
            </p>
          </div>
        </AccordionItem>
        <AccordionItem header="Soru 4">
          <div className="space-y-2">
            <p>
              Cevap 4
            </p>
           
          </div>
        </AccordionItem>
        <AccordionItem header="Soru 5">
          <div className="space-y-2">
            <p>
              Cevap 5
            </p>
           
          </div>
        </AccordionItem>
        <AccordionItem header="Soru 6">
          <div className="space-y-2">
            <p>
              Cevap 6
            </p>
           
          </div>
        </AccordionItem>
        <AccordionItem header="Soru 7">
          <div className="space-y-2">
            <p>
              Cevap 7
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
