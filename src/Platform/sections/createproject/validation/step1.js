import * as yup from "yup";
export const createPojectValidationstep1 = yup.object().shape({
  project_type: yup.string().required("Please fill up this field"),
  type: yup.string().required("Please fill up this field"),
  title: yup.string().required("Please fill up this field"),
  overview: yup.string().required("Please fill up this field"),
  number_of_owners: yup.number().required("Please fill up this field"),
  objectives: yup.string().required("Please fill up this field"),
  expected_outcome: yup.string().required("Please fill up this field"),
  audience: yup.string().required("Please fill up this field"),
  problem_solving: yup.string().required("Please fill up this field"),
  timeline: yup.string().required("Please fill up this field"),
  plan_money: yup.string().required("Please fill up this field"),
  expected_date: yup.string().required("Please fill up this field"),
  is_initial_investment: yup.boolean().required("Please fill up this field"),
  raise_funds: yup.string().required("Please fill up this field"),
  desired_funds: yup.string().required("Please fill up this field"),
  initial_step: yup.string().required("Please fill up this field"),
  business_plan_doc: yup.string().required("Please fill up this field"),
  business_project_photo: yup.string().required("Please fill up this field"),
});
