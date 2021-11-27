import { Routes, Route } from "react-router-dom";
import { Test } from "../components/Form/Test";

import { Home } from "../components/home/Home";
import { Login } from "../components/Login";
import { Index } from "../page/Index";
import { ExampleForm } from "../components/Form/ExampleForm";
import { FormikBasicPage } from "../components/workFormik/FormikBasicPage";
import { FormikYupPage } from "../components/workFormik/FormikYupPage";
import { FormikComponents } from "../components/workFormik/FormikComponets";

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
          <Route path="/form" element={<ExampleForm />} />
          <Route path="/index" element={<Index />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};
