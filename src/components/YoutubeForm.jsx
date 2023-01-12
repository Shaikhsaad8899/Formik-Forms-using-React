import React from "react";
import { useFormik } from "formik";
export const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
    //   console.table( values);
    },
  });
//   console.log("Form values", formik.values);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h1>Youtube Login Form</h1> <br />
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <label htmlFor="">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <label htmlFor="">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
