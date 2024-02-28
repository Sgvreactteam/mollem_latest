import React, { useState } from "react";

import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../context/LanguageContext";
function Evaluation() {
  const evalCri = [
    {
      cumulative: "30%",
      weight: "30%",
      desc: "-",
      criType: "Primary / Secondary",
      some: "1",
    },
    {
      cumulative: "70%",
      weight: "40%",
      desc: "-",
      criType: "Primary",
      some: "2",
    },
    {
      cumulative: "-",
      weight: "10%",
      desc: "-",
      criType: "Secondary",
      some: "2.1",
    },
    {
      cumulative: "-",
      weight: "30%",
      desc: "-",
      criType: "Secondary",
      some: "2.2",
    },
    {
      cumulative: "100%",
      weight: "30%",
      desc: "-",
      criType: "Primary / Secondary",
      some: "3",
    },
  ];
  const [mainCriteria, setMainCriteria] = useState("");
  const onCriteriaChange = (event) => {
    // console.log(event.target)
    setMainCriteria(event.target.value);
  };
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="bg-[#F2F6FE]  w-full h-[100vh] flex flex-col  ">
      <p className="text-xl font-normal mt-8  text-[#808080]">
        {t("loremMed")}
      </p>
      <div className="flex flex-col items-center mt-8">
      <table className="mt-2 rounded-lg">
        <thead>
          <tr>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("cumulative")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("weight")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("description")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("criType")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2 rounded-tr-md">{t("#")}</th>
          </tr>
        </thead>
        <tbody>
          {evalCri.map((item) => (
            <tr className="bg-white">
              <td className="border border-[#828282] p-2">{item.cumulative}</td>
              <td className="border border-[#828282] p-2">{item.weight} </td>
              <td className="border border-[#828282] p-2">{item.desc} </td>
              <td className="border border-[#828282] p-2">{item.criType}</td>

              <td className="border border-[#828282] p-2">{item.some}</td>
            </tr>
          ))}
        </tbody>
        </table>
        <div className="flex flex-row gap-3 mt-16">
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t("print")}
          </button>
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t("export")}
          </button>
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t("saveLater")}
          </button>
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t("verify")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Evaluation;
