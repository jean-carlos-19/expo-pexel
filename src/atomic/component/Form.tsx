import React from "react";
import { Formik } from "formik";
import { FormProps } from "@/types";
import { SearchValidation } from "@/validation";
import { SearchModel } from "@/models";
import { NavBar } from "./NavBar";

const Form = (props: FormProps) => {
 const { entity, fecthImages } = props;
 return (
  <Formik
   initialValues={entity}
   validationSchema={SearchValidation}
   onSubmit={(values: SearchModel): void => {
    fecthImages(values.search!);
   }}
  >
   {({ values, handleChange, handleBlur, handleSubmit }) => {
    return <NavBar value={values.search} handleBlur={handleBlur("search")} handleChangue={handleChange("search")} handleSubmit={handleSubmit} />;
   }}
  </Formik>
 );
};

export { Form };
