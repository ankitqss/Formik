import React from "react";
import * as Yup from "yup";
import formik, { useFormik } from "formik";
import { Validation2 } from "./formValidation2";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Form submitted successfully!",
        });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong!",
        });
      });
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Validation2,
    onSubmit,
  });
  return (
    <div>
      <section className="form-section">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h3>Form Validation using Formik and Yup</h3>
          <div>
            <input
              className={
                errors.name && touched.name ? "name error-input" : "name"
              }
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name"
              placeholder="Name..."
              name="name"
              type="text"
            />
            {errors.name && errors.name && (
              <p className="error-text">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email ? "email error-input" : "email"
              }
              id="email"
              placeholder="email@gmail.com..."
              name="email"
              type="email"
            />
            {errors.email && touched.email && (
              <p className="error-text">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password
                  ? "password error-input"
                  : "password"
              }
              id="password"
              placeholder="Password..."
              name="password"
              password="password"
            />
            {errors.password && touched.password && (
              <p className="error-text">{errors.password}</p>
            )}
          </div>
          <div>
            <input
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.confirm_password && touched.confirm_password
                  ? "password error-input"
                  : "password"
              }
              id="confirm_password"
              placeholder="Confirm Password..."
              name="confirm_password"
              password="password"
            />
            {errors.confirm_password && touched.confirm_password && (
              <p className="error-text">{errors.confirm_password}</p>
            )}
          </div>
          <div className="buttons">
            <button className="submit-button" type="submit">
              Submit
            </button>

            <button className="submit-reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
