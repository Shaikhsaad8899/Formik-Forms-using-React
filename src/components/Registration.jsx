import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";

const initialValues = {
  id: "",
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  gender: "",
};
const Registration = () => {
  const signUpSchema = Yup.object({
    name: Yup.string().min(2).required("Please enter your name "),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please fill the password"),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        console.table(values);
      },
    });

  return (
    <>
      <div className="form-control">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="name"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="confirm_password" className="input-label">
              Confirm Password
            </label>
            <input
              type="password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error">{errors.confirm_password}</p>
            ) : null}
          </div>
         
          <div className="modal-buttons">
            <a href="#">Want to register using Gmail?</a>
            <button className="input-button" type="submit">
              Registration
            </button>
          </div>
        </form>
        <p className="sign-up">
          Already have an account? <a href="#">Sign In now</a>
        </p>
      </div>
    </>
  );
};

export default Registration;
