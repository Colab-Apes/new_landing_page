import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { createPojectValidation } from "../../validation/valid.js";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createPojectValidationstep1 } from "../../validation/step1.js";

const useStep1 = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      project_type: "",
      type: "",
      title: "",
      overview: "",
      number_of_owners: "",
      objectives: "",
      expected_outcome: "",
      audience: "",
      problem_solving: "",
      timeline: "",
      plan_money: "",
      expected_date: "",
      is_initial_investment: "",
      raise_funds: "",
      desired_funds: "",
      initial_step: "",
      business_plan_doc: "",
      business_project_photo: "",
    },
    validationSchema: createPojectValidationstep1,
    onSubmit: (values) => {
      setisLoading(true);
      axios
        .post(`${link}/auth/login`, {
          email: values.e_mail,
          password: values.password,
        })
        .then((res) => {})
        .catch((e) => {});
    },
  });
  const formik1 = formik;

  return { formik1 };
};

export default useStep1;
