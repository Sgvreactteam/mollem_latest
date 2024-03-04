import React from "react";
import "./sign.css";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { t } from "i18next";
import Button from "../../components/UI/Button";
import CompanySignup from "./CompanySignup";
import UserSignup from "./UserSignup";
function Login() {
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState(i18n.language === "ar");
  const [ toggle, setToggle ] = useState(false)
  const location = useLocation();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },

    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      name: Yup.string().required("Name  is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  // const imageUrl = "/Images/login.png";
  const imgUrl2 = "/Images/bg-bottom.png";
  const bgImg = "/Images/login2.png";

  const handleChange = () => {
    const newLanguage = checked ? "en" : "ar";
    i18n.changeLanguage(newLanguage);
    setChecked(!checked);
  };
  const handleToggle = () => {
    setToggle(true)
  }
  const handleTOGGLE = () => {
    setToggle(false)
  }
  return (
    <div
      className="w-screen h-screen grid lg:grid-cols-2 grid-cols-1 px-8 overflow-y-hidden  bg-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${imgUrl2})` }}
    >
      <div className="flex flex-col items-center overflow-y-auto hideScroll my-8 justify-center">
        {/* <Switch className="mx-auto" color="default" checked={checked} inputProps={{ 'aria-label': 'toggle language' }} onChange={handleChange} /> */}
        <div className="flex  items-center justify-center">
          <Button
            type="regular"
            checked={checked}
            onClick={handleChange}
          >
            {!checked ? "عربي" : "English"}
          </Button>
        </div>
        <div className="flex  items-center justify-center mt-6">
          <Link onClick={handleTOGGLE} to="/" className={`px-4 py-2 border rounded-lg mr-2 ${!toggle && "bg-primary text-white"}`}>{t('signupU')}</Link>
          <Link onClick={handleToggle} to="/CompanySignup" className={`px-4 py-2 ml-2 border rounded-lg ${toggle && "bg-primary text-white"}`}>{t('signupC')}</Link>
        </div>

        { location.pathname==="/" && <UserSignup />}
        {location.pathname==='/CompanySignup' && <CompanySignup />}
      </div>

      <div
        className="bg-cover h-full bg-no-repeat  relative lg:block hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute bottom-0 left-1/3 max-w-44">
          <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="mb-5 text-[#BFC4DB]">{t("oneStop")}</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-5 text-[#BFC4DB]">{t("oneStop")}</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-5 text-[#BFC4DB]">{t("oneStop")}</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Login;
