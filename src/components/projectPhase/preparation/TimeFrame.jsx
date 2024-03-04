import React from "react";
import Button from "../../UI/Button";
import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "react-i18next";
function TimeFrame() {
  const { t } = useTranslation();
  return (
    <div className="items-center flex flex-col bg-[#F2F6FE] h-screen">
      <p className="text-xl font-normal mt-8  text-[#808080]">
        {t("loremMed")}
      </p>
      <div className="flex flex-col  my-8 p-4 rounded-3xl bg-white">
        <p className="text-xl font-medium ">ETA {t("eta")}</p>
        <a
          href="https://www.oracle.com/in/construction-engineering/primavera-p6/"
          className="colorText font-medium mt-2"
        >
          https://www.oracle.com/in/construction-engineering/primavera-p6/
        </a>
        <div className="flex w-auto mt-4">
          <Button type="regular">
            {t("viewMore")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TimeFrame;
