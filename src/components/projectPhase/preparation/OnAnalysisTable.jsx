import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { Dropdown } from 'flowbite-react';
import CustomDropdown from './CustomDropdown';

const OnAnalysisTable = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("20 SAR")
  const handleDropdown = (value) => {
    setValue(value)
  }
  return (
    <div className="bg-white p-3">
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
                  <td className="border border-[#828282] bg-[#e9e9e9] p-1">
                    <CustomDropdown />
                  </td>
                  <td className="border border-[#828282] p-2">5</td>
                  <td className="border border-[#828282] bg-[#e9e9e9] p-2">
                  <CustomDropdown />
                    </td>
                  <td className="border border-[#828282] p-2">-</td>
                  <td className="border border-[#828282] bg-[#e9e9e9] p-2"><CustomDropdown />
                  </td>
                  <td className="border border-[#828282] bg-[#e9e9e9] p-2"><CustomDropdown /></td>
                  <td className="border border-[#828282] bg-[#e9e9e9] p-2"><CustomDropdown /></td>
                  <td className="border border-[#828282] bg-[#e9e9e9] p-2"><CustomDropdown /></td>
                  <td className="border border-[#828282] bg-[#e9e9e9] p-2"><CustomDropdown /></td>
                  <td className="border border-[#828282] bg-[#e9e9e9] p-2"><CustomDropdown /></td>
                  <td className="border border-[#828282] p-2">-</td>
                </tr>
              </tbody>
            </table>




                </div>
  )
}

export default OnAnalysisTable