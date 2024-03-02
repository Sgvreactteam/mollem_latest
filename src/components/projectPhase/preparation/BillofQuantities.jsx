import React, { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import OnAnalysisTable from "./OnAnalysisTable";
import CustomDropdown from "./CustomDropdown";
function BillofQuantities() {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  const [analysis, setAnalysis] = useState(false);
  const handleAnalysis = () => {
    setAnalysis(!analysis)
  }
  return (
    <div className="mt-6 h-full ">
      <div className="flex justify-center items-center">
      {analysis===false ? (  <div className=" p-3">
      <table className="mt-2 rounded-lg">
        <thead>
          <tr>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("cashFlow")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("prodCode")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("totPrice")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("unitPri")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("quantity")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("unit")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("itemDesc")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("product")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("description")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("description")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("description")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("itemTy2")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("itemTy1")}
            </th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">
              {t("serialNo")}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] bg-[#e9e9e9] p-2">
              <CustomDropdown  />
            </td>
            <td className="border border-[#828282] p-2">5</td>
            <td className="border border-[#828282] bg-[#e9e9e9] p-2 ">
              <CustomDropdown />
            </td>
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] bg-[#e9e9e9] p-2">
              <CustomDropdown />
            </td>
            <td className="border border-[#828282] bg-[#e9e9e9] p-2">
              <CustomDropdown />
            </td>
            <td className="border border-[#828282] bg-[#e9e9e9] p-2">
              <CustomDropdown />
            </td>
            <td className="border border-[#828282] bg-[#e9e9e9] p-2">
              <CustomDropdown />
            </td>
            <td className="border border-[#828282] bg-[#e9e9e9] p-2">
              <CustomDropdown />
            </td>
            <td className="border border-[#828282] bg-[#e9e9e9] p-2">
              <CustomDropdown />
            </td>
            <td className="border border-[#828282] p-2">-</td>
          </tr>
          <tr className="">
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] p-1">
              -
            </td>
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] p-2">
              -
            </td>
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] p-2">
              -
            </td>
            <td className="border border-[#828282] p-2">
              -
            </td>
            <td className="border border-[#828282] p-2">
              - 
            </td>
            <td className="border border-[#828282] p-2">
              -
            </td>
            <td className="border border-[#828282] p-2">
              -
            </td>
            <td className="border border-[#828282] p-2">
              -
            </td>
            <td className="border border-[#828282] p-2">-</td>
          </tr>
        </tbody>
      </table>
      
    </div>): (
        <OnAnalysisTable />
      )}
      </div>

      <div className="flex justify-center">
        <div className="flex flex-row gap-5 mt-16">
        { analysis===false ? <button onClick={handleAnalysis} className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t("analysis")}
          </button> : ""}
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t("verify")}
          </button>
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t("saveLater")}
          </button>
          <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
            {t("print")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillofQuantities;
