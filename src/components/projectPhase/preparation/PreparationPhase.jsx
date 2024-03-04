import React, { useState } from "react";
import BillofQuantities from "./BillofQuantities";
import Evaluation from "./Evaluation";
import CashFlow from "./CashFlow";
import TimeFrame from "./TimeFrame";
import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "react-i18next";

import  Button  from "../../UI/Button";
import { useLocation } from "react-router-dom";
function PreparationPhase() {


  const location = useLocation();

  const [selected,setSelected] = useState(0);

  const { t } = useTranslation();

  const handleRegButtonClick = (index) => {
    setSelected(index)
};
 

  const routsArray =[
    {
      title: "billOf",
      to:"/preparation/Bill"
    },
    {
      title: "evalCri",
      to:"/preparation/Evalution"
    },
    {
      title: "timeFrame",
      to:"/preparation/TimeF"
    },
    {
      title: "cashFlow",
      to:"/preparation/cashFlow"
    },
  ]

  return (
    <div className="bg-[#F2F6FE] px-8 w-full flex flex-col h-screen pt-20">
      <div className="relative">
        <div className="max-w-4xl mx-auto text-3xl font-medium text-center pb-1">
          {t("projPhases")}
        </div>
        <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1 bg-gradient-to-r from-white via-green-600 to-transparent"></div>
      </div>

      <div className="flex flex-col">
        <p className="text-xl font-medium mt-4">{t("activities")}</p>
        <div className="flex flex-row gap-3 w-full flex-wrap mt-6">

        {
                routsArray && routsArray.map((item,index)=>{
                    return  <Button
                    type={selected == index ? "regularChange" : "regular"}
                    to={item.to}
                    onClick={handleRegButtonClick.bind(this,index)}
                >
                    { t(item.title)}
                </Button>
                })
              }
        </div>
                {location.pathname === '/preparation/Bill' && <BillofQuantities />}
                {location.pathname === '/preparation/Evalution' && <Evaluation />}
                {location.pathname === '/preparation/cashFlow' && <CashFlow />}
                {location.pathname === '/preparation/TimeF' && <TimeFrame />}
      </div>
    </div>
  );
}

export default PreparationPhase;
