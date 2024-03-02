import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import pdf from "/Images/pdf.svg";
import pdflogo from "/Images/pdf-logo.png";
import { useTranslation } from "react-i18next";
import { TbDownload } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function Regulation() {
  const { t } = useTranslation();

  let cardData = [
    {
      title: "PDF title here",
      date: "12/01/2000",
        // source: pdf,
    },
    {
      title: "PDF title here",
      date: "12/02/2000",
    },
    {
      title: "PDF title here",
      date: "12/05/2000",
    },
    {
      title: "PDF title here",
      date: "12/07/2000",
    },
    {
      title: "PDF title here",
      date: "12/08/2000",
    },
    {
      title: "PDF title here",
      date: "12/08/2000",
    },
  ];
  return (
    <>
      <div className="w-full bg-background lg:px-8 md:px-5 px-3 pt-20">

        <div className="flex flex-col  md:mt-12 sm:mt-8 mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  sm:gap-10 gap-4  pt-10 pb-5">
              {cardData.map((card, key) => (
                <div className="" key={key}>
                  <Card sx={{}}>
                    <div className="sm:mx-5 mx-3 sm:mt-5 mt-3">
                      <Link
                        target="_blank"
                        className=" bg-[#F2F6FA] relative flex justify-center items-center lg:py-10 py-5"
                      >
                        <div>
                          <img className="" src={pdf} alt="pdf-image" />
                        </div>
                        <div className=" absolute top-0 left-0">
                          <div>
                            <img src={pdflogo} alt="image" />
                          </div>
                        </div>
                      </Link>
                      <CardContent>
                        <div className="">
                          <div className=" flex justify-between items-center">
                            <div className="font-semibold sm:text-lg text-base">
                              {t("PDFtit")}
                            </div>

                            <div className="font-bold text-[#808080]">
                              {card.date}
                            </div>
                          </div>
                          <div className=" flex justify-between items-center pt-2">
                            <p className="font-bold text-[#808080]">2.3 MB</p>
                            <div className="flex flex-row gap-2 sm:text-xl text-lg text-[#0C0830] items-center font-bold cursor-pointer">
                              <p>{t("download")}</p>
                              <TbDownload />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          

          
        </div>
      </div>
    </>
  );
}
