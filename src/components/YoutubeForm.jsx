import React from "react";
import { useFormik } from "formik";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.table(values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

export const YoutubeForm = () => {
  const formik = useFormik({
    onSubmit,
    initialValues,
    validate,
  });
  // console.log("Form values", formik.errors);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h1>Youtube Login Form</h1> <br />
        <div className="form-control">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>{" "}
        <br />
        <div className="form-control">
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
