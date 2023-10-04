import React from 'react'

const useStep4 = () => {
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
      validationSchema: siginValidation,
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
}

export default useStep4