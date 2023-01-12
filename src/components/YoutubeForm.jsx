import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.table(values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  channel: Yup.string().required("Required"),
});
// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }
//   if (!values.channel) {
//     errors.channel = "Required";
//   }
//   return errors;
// };

export const YoutubeForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1>Youtube Login Form</h1> <br />
          <div className="form-control">
            <label htmlFor="">Name:</label>
            <Field type="text" name="name" id="name" />
           <ErrorMessage name="name"/>
          </div>{" "}
          <br />
          <div className="form-control">
            <label htmlFor="">E-mail</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email"/>

          </div>
          <br />
          <div className="form-control">
            <label htmlFor="">Channel</label>
            <Field type="text" name="channel" id="channel" />
            <ErrorMessage name="channel"/>

          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
// Error Message tut 16 chalu hai 