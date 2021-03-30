import React, { useState } from "react";
import { Input, Alert } from "antd";
import { Formik } from "formik";
import * as yup from "yup";

const apiCall = () => alert("Nop form");
const initialValues = {
  username: "",
  password: "",
};
const loginFormSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "username phải có ít nhất 4 kí tự")
    .matches(/^[\w]{4,}$/, "Không được chứa kí tự đặc biệt"),
  password: yup
    .string()
    .min(8, "Phải có ít nhất 8 kí tự")
    .matches(
      /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,
      "Phải có ít nhất 1 kí tự đặc biệt"
    ),
});

/**
 * username: 4 ki tu, khong co ky tu dac biet
 * password: 8 ki tu, co ki tu dac biet, co ki tu viet hoa
 */
export default function Login() {
  return (
    <Formik
      onSubmit={(values) => {
        apiCall(values);
      }}
      validationSchema={loginFormSchema}
      initialValues={initialValues}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <Input
            name="username"
            placeholder="Nhập tên người dùng"
            value={values.username}
            onChange={handleChange("username")}
          />
          {errors.username && <Alert message={errors.username} type="error" />}
          <br />
          <Input
            name="password"
            placeholder="Mật khẩu"
            value={values.password}
            onChange={handleChange("password")}
          />
          {errors.password && <Alert message={errors.password} type="error" />}
          <Input type="submit" value="Submit" />
        </form>
      )}
    </Formik>
  );
}
