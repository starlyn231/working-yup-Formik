import { Routes, Route } from "react-router-dom";
import { Test } from "../components/Form/Test";

import { Home } from "../components/home/Home";
import { Login } from "../components/Login";

import { ExampleForm } from "../components/Form/ExampleForm";
import { FormikBasicPage } from "../components/workFormik/FormikBasicPage";
import { FormikYupPage } from "../components/workFormik/FormikYupPage";
import { FormikComponents } from "../components/workFormik/FormikComponets";
import { FormikAbstraction } from "../components/workFormik/FormikAbstraction";
import { RegisterFormikPage } from "../components/workFormik/RegisterFormikPage";
import { DinamicForm } from "../components/workFormik/DinamicForm";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/formikyup" element={<FormikYupPage />} />
          <Route path="/formikcomponents" element={<FormikComponents />} />
          <Route path="/formik" element={<FormikBasicPage />} />
          <Route path="/dinamicForm" element={<DinamicForm />} />
          <Route path="/form" element={<ExampleForm />} />
          <Route path="/RegisterFormikPage" element={<RegisterFormikPage />} />
          <Route path="/formikabstraction" element={<FormikAbstraction />} />

          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};
