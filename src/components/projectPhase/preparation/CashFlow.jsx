import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import Button from "../../UI/Button";
import { useTranslation } from "react-i18next";
function CashFlow() {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  return (
    <div className="mt-6 flex flex-col items-center">
      <p className="text-xl font-normal mt-6  text-[#808080]">
        {t("loremMed")}
      </p>
      <table className="mt-8 rounded-lg">
        <thead className="mt-8">
          <tr>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("correlation")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("phaseCost")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("items%")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("phaseDur")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("%cumulative")}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="border border-[#828282] p-2">500</td>
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] p-2">-</td>
          </tr>
        </tbody>
      </table>
      <table className="mt-8 rounded-lg">
        <thead className="mt-12">
          <tr>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("percOfInvoice")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("phase")}</th>
            <th className="border border-[#828282] bg-[#dfe6fc] p-2">{t("no.")}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="border border-[#828282] p-2">-</td>
            <td className="border border-[#828282] p-2">2</td>
            <td className="border border-[#828282] p-2">1</td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-row md:gap-10 gap-3 mt-16">
        <Button type="blueButton">
          {t("print")}
        </Button>
        <Button type="blueButton">
          {t("export")}
        </Button>
        <Button type="blueButton" className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("saveLater")}
        </Button>
        <button className="bg-primary py-1 px-4 rounded-3xl font-medium    text-white">
          {t("verify")}
        </button>
      </div>
    </div>
  );
}

export default CashFlow;
