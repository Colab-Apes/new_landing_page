import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';

const CreateProjectContext = createContext();

export function CreateProjectProvider({ children }) {
  const [formData, setFormData] = useState({
    project_type: '',
    type: '',
    title: '',
    overview: '',
    number_of_owners: '',
    objectives: '',
    expected_outcome: '',
    audience: '',
    problem_solving: '',
    timeline: '',
    plan_money: '',
    expected_date: '',
    is_initial_investment: '',
    raise_funds: '',
    desired_funds: '',
    initial_step: '',
    business_plan_doc: null,
    business_project_photo: null,
    roles: ''
    // Add other form fields here
  });
  // console.log(formData);

  const createProject = async ()=>{
    const data = new FormData();
    for (const key in formData) {
      if (formData[key] instanceof File) {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    }
    //console.log(formData.getValue('audience'));
    try {
      //console.log(value);
      const response = await axios({
        url: "https://co-backend-production.up.railway.app/api/v1/project",
        method: "POST",
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
  }
  catch(err){
    console.log(err);
  }
}

  return (
    <CreateProjectContext.Provider value={{ formData, setFormData, createProject }}>
      {children}
    </CreateProjectContext.Provider>
  );
};

export const useCreateProject = () => {
  return useContext(CreateProjectContext);
};
