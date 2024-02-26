import React, { useState } from "react";
import "./evaluation.css";
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
        <thead>
          <tr>
            <th className="th rounded-tl-md">{t("cumulative")}</th>
            <th className="th">{t("weight")}</th>
            <th className="th">{t("description")}</th>
            <th className="th">{t("criType")}</th>
            <th className="th rounded-tr-md">{t("#")}</th>
          </tr>
        </thead>
        <tbody>
          {evalCri.map((item) => (
            <tr className="bg-white">
              <td className="td">{item.cumulative}</td>
              <td className="td">{item.weight} </td>
              <td className="td">{item.desc} </td>
              <td className="td">{item.criType}</td>

              <td className="td">{item.some}</td>
            </tr>
          ))}
        </tbody>
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
