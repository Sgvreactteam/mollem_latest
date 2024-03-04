import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from '../../components/UI/Button';
const CompanySignup = () => {
    const { t } = useTranslation();
    const [next, setNext] = useState(false);
    const handleNext = () => {
        setNext(true);
    }
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

      const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
        console.log(selectedImage);
      };

  return (
    <div className='lg:px-28 lg:my-5 my-3 max-h-[100vh] overflow-y-auto'>
         <img src="/Images/loginLogo.svg" alt="logo" className="" />

        <h1 className="text-xl font-medium text-[#0C0830] py-1 mt-2">
            {t("signupC")}
        </h1>
        <p className="text-lg font-normal text-[#808080] leading-[1.5rem] ">
            {t("signupInfoC")}
        </p>

        { next? (
            <form className="flex flex-col gap-2 mt-3"
            onSubmit={formik.handleSubmit}>
                <div className='w-full flex flex-col'>
                <label className="font-medium text-[#0C0830] ">
                    {t("address")}
                </label>
                <input type="text" 
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                placeholder='Enter your address here...'
                />
                </div>

                <div className="w-full flex flex-col">
                <label className="font-medium text-[#0C0830] ">
                    {t("typeOfB")}
                </label>
                <select
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                name="" id="">
                    <option value="Sole Proprietorship">Sole Proprietorship</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Corporation">Corporation</option>
                </select>
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-medium text-[#0C0830] ">
                        {t("Oname")}{" "}
                    </label>
                    <input
                        className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                        placeholder="name"
                        type="text"
                        name="Owner name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-start text-sm text-red-600 ">
                        {formik.errors.name}
                        </div>
                    ) : null}
                </div>

                <div className='w-full flex flex-col'>
                    <label className="font-medium text-[#0C0830] ">
                        {t("taxID")}
                    </label>
                    <input type="number" 
                    className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                    placeholder='Enter your Tax ID number'
                    />
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-medium text-[#0C0830] ">
                        {t("indType")}
                    </label>
                    <select
                    className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                    name="" id="">
                        <option value="IT">IT</option>
                        <option value="Plastic">Plastic</option>
                        <option value="Food">Food</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-medium text-[#0C0830] ">
                        {t("compSize")}
                    </label>
                    <select
                    className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                    name="" id="">
                        <option value="0-50">0-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100-250">100-250</option>
                        <option value="250-1000">250-1000</option>
                        <option value="1000+">1000+</option>
                    </select>
                </div>
                <div className='w-full flex flex-col'>
                    <label className="font-medium text-[#0C0830] ">
                        {t("biusDesc")}
                    </label>
                    <textarea type="text" 
                    className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                    placeholder='Enter your buisness description here...'
                    />
                </div>

                <div className="w-full flex flex-col">
                    <label className="font-medium text-[#0C0830] ">
                        {t("emailDomain")}
                    </label>
                    <input
                        className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                        placeholder="@svgsofttech.com"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-start text-sm text-red-600 ">
                        {formik.errors.email}
                        </div>
                    ) : null}
                </div>
            </form>
         ) : 
        (  <form
            className="flex flex-col gap-2 mt-3"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full flex flex-col">
              <label className="font-medium text-[#0C0830] ">
                {t("name")}{" "}
              </label>
              <input
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                placeholder="name"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-start text-sm text-red-600 ">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
            <div className="w-full flex flex-col">
              <label className="font-medium text-[#0C0830] ">
                {t("yourEmail")}
              </label>
              <input
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                placeholder="name@gmail.com"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-start text-sm text-red-600 ">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>{" "}
            <div className="w-full flex flex-col">
              <label className="font-medium text-[#0C0830] ">
                {t("password")}
              </label>
              <input
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                placeholder="password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.password && formik.errors.password ? (
                <div className="text-start text-sm text-red-600 ">
                  {formik.errors.password}
                </div>
              ) : null}
              
            </div>
            <div className='w-full flex flex-col'>
                <label className="font-medium text-[#0C0830] ">
                    {t("logo")}
                </label>
                <input
                id="fileInput"
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080]"
                onChange={handleFileChange}
                type="file"
                accept=".jpg, .png" 
                name=""
              />
            </div>
            <div className='w-full flex flex-col'>
                <label className="font-medium text-[#0C0830] ">
                    {t("contact")}
                </label>
                <input type="number" 
                className="bg-[#F9FAFB] border-2 p-1 outline-0 rounded-md text-base text-[#808080] px-2"
                placeholder='+91-9876545678'
                />
            </div>

        </form>)}
        <div className='flex w-full mt-8 justify-center'>
            {!next && <Button onClick={handleNext} type="regular">{t('next')}</Button>}
            {next && <Button type="regular">{t('submit')}</Button>}
        </div>
       
    </div>
  )
}

export default CompanySignup