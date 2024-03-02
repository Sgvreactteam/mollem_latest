import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomDropdown from "./CustomDropdown";

const OnAnalysisTable = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("20 SAR");
  const handleDropdown = (value) => {
    setValue(value);
  };
  return (
    <div className=" p-3">
    <div className=" max-w-7xl mx-auto rounded  flex justify-center">
      <div>
        <h3 className="text-2xl font-medium inline ">
          {t("billOf")} ({t("outputCashflow")})
        </h3>
        <table className="mt-2 rounded-lg">
          <thead>
            <tr>
              <th className="border border-[#828282] bg-[#dfe6fc] p-2">
                {t("localProducts")}
              </th>
              <th className="border border-[#828282] bg-[#dfe6fc] p-2">
                {t("totalCost")}
              </th>
              <th className="border border-[#828282] bg-[#dfe6fc] p-2">
                {t("cashFlow")}
              </th>
              <th className="border border-[#828282] bg-[#dfe6fc] p-2">
                {t("phasesCount")}
              </th>
              <th className="border border-[#828282] bg-[#dfe6fc] p-2">
                {t("itemsCount")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="border border-[#828282] p-2">-</td>
              <td className="border border-[#828282] p-2">-</td>
              <td className="border border-[#828282] p-2">-</td>
              <td className="border border-[#828282] p-2">-</td>
              <td className="border border-[#828282] p-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="max-w-7xl grid lg:grid-cols-2 grid-cols-1 gap-2 mt-14 mx-auto">
      <div>
        <h2 className=" text-2xl font-medium">{t("technicalAnalysis")}</h2>
        <table className="w-full mt-2">
          <thead>
            <tr>
              <th
                className="border border-[#828282] bg-[#dfe6fc] p-2"
                colSpan={2}
              >
                {t("cashFlowTechnical")}
              </th>
              <th
                className="border border-[#828282] bg-[#dfe6fc] p-2"
                colSpan={2}
              >
                {t("itemSupply")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-[#828282] p-2">Phase #1</td>
              <td className="border border-[#828282] p-2">70%</td>
              <td className="border border-[#828282] p-2">Supply items</td>
              <td className="border border-[#828282] p-2">#</td>
            </tr>
            <tr className="text-center">
              <td className="border border-[#828282] p-2">Phase #2</td>
              <td className="border border-[#828282] p-2">30%</td>
              <td className="border border-[#828282] p-2">
                Execution items
              </td>
              <td className="border border-[#828282] p-2">#</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="text-2xl font-medium">{t("finAnalysisReport")}</h2>
        <table className="w-full mt-2">
          <thead>
            <tr>
              <th className="border border-[#828282] bg-[#dfe6fc] p-2">
                {t("standardDeviation")}
              </th>
              <th className="border border-[#828282] bg-[#dfe6fc] p-2">
                {t("standardDeviation")}
              </th>
              <th className="border border-[#828282] bg-[#dfe6fc] p-2">
                {t("lowestItemPrice")}
              </th>
              <th className="border border-[#828282] bg-[#dfe6fc] p-2">
                {t("topItemPrice")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className=" border border-[#828282] p-2">-</td>
              <td className=" border border-[#828282] p-2">-</td>
              <td className=" border border-[#828282] p-2">-</td>
              <td className=" border border-[#828282] p-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default OnAnalysisTable;


