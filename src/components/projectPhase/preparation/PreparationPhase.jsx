import React, { useState } from "react";
import BillofQuantities from "./BillofQuantities";
import Evaluation from "./Evaluation";
import CashFlow from "./CashFlow";
import TimeFrame from "./TimeFrame";
import { useLanguage } from "../../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import Button from "../../UI/Button";
function PreparationPhase() {
  const { language, toggleLanguage } = useLanguage();
  const [bill, setBill] = useState(true);
  const [evaluation, setEvaluation] = useState(false);
  const [timeframe, setTimeframe] = useState(false);
  const [cash, setCash] = useState(false);
  const { t } = useTranslation();

  const showBillHandler = () => {
    setBill(true);
    setCash(false);
    setEvaluation(false);
    setTimeframe(false);
  };

  const showEvaluationHandler = () => {
    setEvaluation(true);
    setBill(false);
    setCash(false);
    setTimeframe(false);
  };
  const showTimeHandler = () => {
    setTimeframe(true);
    setEvaluation(false);
    setBill(false);
    setCash(false);
  };
  const showCashHandler = () => {
    setCash(true);
    setTimeframe(false);
    setEvaluation(false);
    setBill(false);
  };

  return (
    <div className="bg-[#F2F6FE] px-8 w-full flex flex-col h-full pt-20">
      <div className="relative">
        <div className="max-w-4xl mx-auto text-3xl font-medium text-center pb-1">
          {t("projPhases")}
        </div>
        <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1 bg-gradient-to-r from-white via-green-600 to-transparent"></div>
      </div>

      <div className="flex flex-col">
        <p className="text-xl font-medium mt-4">{t("activities")}</p>
        <div className="flex flex-row gap-3 w-full flex-wrap mt-6">
          <Button
            onClick={showBillHandler}
            type="regular"
          >
            {t("billOf")}
          </Button>
          <Button
            onClick={showEvaluationHandler}
            type="regular"          >
            {t("evalCri")}
          </Button>
          <Button
            onClick={showTimeHandler}
            type="regular"          >
            {t("timeFrame")}
          </Button>
          <Button
            onClick={showCashHandler}
            type="regular"          >
            {t("cashFlow")}
          </Button>
        </div>
        {bill && <BillofQuantities />}
        {evaluation && <Evaluation />}
        {cash && <CashFlow />}
        {timeframe && <TimeFrame />}
      </div>
    </div>
  );
}

export default PreparationPhase;
