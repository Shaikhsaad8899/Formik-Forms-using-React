import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
const initialValues = {
  name: "1",
  email: "2@3.com",
  channel: "3",
  comments: "4",
  gender: "5",
  address: "6",
  toggle: false,
  checked: [],
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const onSubmit = async (values, action) => {
  // console.table(values);
  // await sleep(500);
  // alert(JSON.stringify(values, null, 2));
  // console.log(values);
  const datasubmit = values;
  await axios
    .post("http://localhost:4040/api/users", JSON.stringify(datasubmit))
    .then((res) => res.datasubmit);
  action.resetForm();
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  channel: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});
export const YoutubeForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {({ values }) => (
          <Form>
            <h1>Youtube Login Form</h1> <br />
            <br />
            <div className="form-control">
              <label htmlFor="">Name:</label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
              />
              <ErrorMessage name="name" />
            </div>{" "}
            <br />
            <div className="form-control">
              <label htmlFor="">E-mail</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="abc@email.com"
              />
              <ErrorMessage name="email" />
            </div>
            <br />
            <div className="form-control">
              <label htmlFor="">Channel</label>
              <Field
                type="text"
                name="channel"
                id="channel"
                placeholder="Youtube Channel"
              />
              <ErrorMessage name="channel" />
            </div>
            <div className="form-control">
              <Field
                id="select"
                component="select"
                name="gender"
                placeholder="select options"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage name="gender" />
            </div>{" "}
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                type="text"
                as="textarea"
                id="comments"
                name="comments"
              ></Field>
              <ErrorMessage name="comments" />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <Field type="text" name="address" id="address">
                {(props) => {
                  const { field, form, meta } = props;

                  return <input type="text" id="address" {...field} />;
                }}
              </Field>
              <ErrorMessage name="address" />
            </div>
            <button type="submit" disabled={Formik.isValid}>
              Submit
            </button>
            {/* <h1>Sign Up</h1> */}
            {/* <div className="form-control">
              <label>
                <Field type="checkbox" name="toggle" />
                {`${values.toggle}`}
              </label>

              <div id="checkbox-group">Checked</div>
              <div role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field type="checkbox" name="checked" value="One" />
                  One
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Two" />
                  Two
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Three" />
                  Three
                </label>
              </div>

              <button type="submit" onSubmit={onSubmit}>
                Submit
              </button>
            </div> */}
          </Form>
        )}
      </Formik>
    </>
  );
};
