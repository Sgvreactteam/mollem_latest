import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../UI/Button";
function Topiwala() {
  const { t } = useTranslation();
  return (
    <div className="pt-14">
      <div className="bg-[#F2F6FE] px-8 w-full h-screen lg:pt-4 sm:pt-2">
        <h1 className="text-3xl font-medium text-center pt-4 pb-6">
          Topiwala Plant
        </h1>

        <div className="w-full shadow-md rounded-2xl bg-white px-8 py-12">
          <div className="  grid grid-cols-5 gap-4 ">
            <div className="flex flex-col font-medium">
              <label htmlFor="" className="font-medium ">
                {t('projectTitle')} <span className="text-[#FF0000] text-xl">*</span>
              </label>
              <input
                required
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>

            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                {t('dept/sec')} <span className="text-[#FF0000] text-xl">*</span>
              </label>
              <input
                required
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                {t('projManr')} <span className="text-[#FF0000] text-xl">*</span>
              </label>
              <input
                required
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
                {t('projType')} <span className="text-[#FF0000] text-xl">*</span>
              </label>
              <input
                required
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
              {t('projLocation')} <span className="text-[#FF0000] text-xl">*</span>
              </label>
              <input
                required
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
              {t('expecStartingDate')} <span className="text-[#FF0000] text-xl">*</span>
              </label>
              <input
                required
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
              {t('expecBudget')}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
              {t('projDur')}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
              {t('projSerialNo')}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
              {t('projRef')} <span className="text-[#FF0000] text-xl">*</span>
              </label>
              <input
                required
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
              {t('projGoals')}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
            <div className="flex flex-col font-medium">
              <label htmlFor="" className=" font-medium">
              {t('stratAli')}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F6F6F6] border-2 p-1 mt-1 outline-0 rounded-md"
              />
            </div>
          </div>

          <div className="text-center pt-5">
            <Button type="primary">
            {t('verify')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topiwala;
