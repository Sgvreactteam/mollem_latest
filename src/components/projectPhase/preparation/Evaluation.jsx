import React, { useState } from "react";

import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../context/LanguageContext";
import EvalDropdown from "./EvalDropdown";
import Button from "../../UI/Button";
function Evaluation() {
  const evalCri = [
    {
      cumulative: "30%",
      weight: "30%",
      desc: "-",
      criType: <DropDownPrimary/>,
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
      criType: <DropDownPrimary/>,
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
            
            <th className="border border-[#828282] bg-[#dfe6fc] p-2 rounded-tr-md">{t("#")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("criType")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("description")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("weight")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("cumulative")}</th>
          </tr>
        </thead>
        <tbody>
          {evalCri.map((item) => (
            <tr className="bg-white">

              <td className="border border-[#828282] p-2">{item.some}</td>
              <td className="border border-[#828282] p-2">{item.criType ==="Primary / Secondary"? (<EvalDropdown/>): (item.criType)}</td>
              <td className="border border-[#828282] p-2">{item.desc} </td>
              <td className="border border-[#828282] p-2">{item.weight} </td>
              <td className="border border-[#828282] p-2">{item.cumulative}</td>
            </tr>
          ))}
        </tbody>
        </table>
        <div className="flex flex-row gap-3 mt-16">
          <Button type="regular">
            {t("print")}
          </Button>
          <Button type="regular">
            {t("export")}
          </Button>
          <Button type="regular">
            {t("saveLater")}
          </Button>
          <Button type="regular">
            {t("verify")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Evaluation;


const DropDownPrimary = () => {
  const options = ["Primary", "Secondary"];
  return (
    <select
      id=""
      name=""
      defaultValue={"Primary"}
      className=" block w-full  pr-14 py-2  border-gray-300 focus:outline-none
       focus:ring-indigo-500 focus:border-indigo-500  rounded-md"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
