import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function UserAdmin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  return (
    <div className="bg-[#F2F6FE] md:px-8 sm:px-5 px-3 w-full lg:h-screen h:full sm:pt-20 pt-16">
      <div className="relative max-w-4xl mx-auto lg:text-3xl md:text-2xl text-xl  font-medium text-center leading-5 pb-1">
        {t("userAdminHeading")}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-white via-green-600 to-transparent"></div>
      </div>

      <div className="flex sm:flex-row flex-col gap-4 md:gap-4 h-[calc(100%-6rem)] justify-center items-center sm:pt-0 mt-8 sm-pb-0 pb-4">
        <Link to={`/reg`}>
          <div className="sm:max-w-sm w-full mx-auto bg-white rounded-md shadow-md flex flex-col justify-center items-center">
            <img
              className=" object-cover h-20 w-20"
              src="/Images/userAdmin/open-book.svg"
              alt="image"
            />
            <div className="p-2 text-center">
              <h5 className="mb-2 text-base font-bold text-primary">
                {t("knowledgeHub")}
              </h5>
              <p className=" font-medium ">{t("loremSmall")}</p>
            </div>
          </div>
        </Link>

        <Link to={`/currentProject`}>
          <div className="sm:max-w-sm w-full mx-auto bg-white rounded-md overflow-hidden shadow-md flex flex-col justify-center items-center">
            <img
              className=" object-cover h-20 w-20"
              src="/Images/userAdmin/Frame (1).png"
              alt="image"
            />
            <div className="p-2 text-center">
              <h5 className="mb-2 text-base font-bold text-[#018B00]">
                {t("projMan")}
              </h5>
              <p className=" font-medium ">{t("loremSmall")}</p>
            </div>
          </div>
        </Link>

        <Link to={`/data`}>
          <div className="sm:max-w-sm w-full mx-auto bg-white rounded-md overflow-hidden shadow-md flex flex-col justify-center items-center">
            <img
              className=" object-cover h-20 w-20"
              src="/Images/userAdmin/database.png"
              alt="image"
            />
            <div className="p-2 text-center">
              <h5 className="mb-2 text-base font-bold text-[#018B00]">
                {t("database")}
              </h5>
              <p className=" font-medium ">{t("loremSmall")}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UserAdmin;
