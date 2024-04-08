import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import UserAdmin from "./components/userAdmin/UserAdmin";
import Header from "./components/header/Header";
import Topiwala from "./components/topiwala/Topiwala";

import Database from "./components/database/Database";

import PreparationPhase from "./components/projectPhase/preparation/PreparationPhase";
import InitialPhase from "./components/projectPhase/initialPhase/InitialPhase";
import Execution from "./components/projectPhase/execution/Execution";
import Close from "./components/projectPhase/clostPhase/Close";
import ProjectManagement from "../src/components/projectManage/ProjectManagement";
import SingleProject from "./components/projectManage/NewProject";
import { I18nextProvider } from "react-i18next";
import i18n from "./Languages/i18n";

import UserTask from "./components/ProjectManagement/UserTask/UserTask";
import TaskCreate from "./components/ProjectManagement/TaskCreate/TaskCreate";
import Task from "./components/ProjectManagement/Task/Task";
import KnowledgeHub from "./components/KnowledgeHub/KnowledgeHub";
import Login from "./auth/login/Login";
import Signup from "./auth/signUp/Signup";
import Forgot from "./auth/forgot/Forgot";
import OwnProjectsDashboard from "./components/OwnProjectsDashboard/OwnProjectsDashboard";


function App() {
  const location = useLocation();
  return (
    <div>
      <I18nextProvider i18n={i18n}>
        
          <Header />

        {/* <HeaderProjectM /> */}
        <Routes>
          <Route index element={<Signup/>} />
          <Route path="/CompanySignup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/useradmin" element={<UserAdmin />} />
          <Route path="/topiwala" element={<Topiwala />} />
          <Route path="/ownProjects" element={<OwnProjectsDashboard />} />


          <Route path="/knowledgeHub/reg" element={<KnowledgeHub />} />
          <Route path="/knowledgeHub/ep" element={<KnowledgeHub />} />
          <Route path="/knowledgeHub/template" element={<KnowledgeHub />} />

          <Route path="/data" element={<Database />} />

          <Route path="/preparation/Bill" element={<PreparationPhase />} />
          <Route path="/preparation/Evalution" element={<PreparationPhase />} />
          <Route path="/preparation/cashFlow" element={<PreparationPhase />} />
          <Route path="/preparation/TimeF" element={<PreparationPhase />} />

          <Route path="/task/Dashboard" element={<Task />} />
          <Route path="/task/Tasklist" element={<Task />} />
          <Route path="/task/Timeline" element={<Task />} />

          <Route path="/initiatingphase" element={<InitialPhase />} />
          <Route path="/execution" element={<Execution />} />
          <Route path="/close" element={<Close />} />
          <Route path="/ProjectManagement" element={<ProjectManagement />} />
          <Route path="/newProject" element={<SingleProject />} />
          <Route path="/userTask" element={<UserTask />} />
          <Route path="/taskCreate" element={<TaskCreate />} />
          <Route path="/currentProject" element={<ProjectManagement />} />
          <Route path="/topiwalaPlant" element={<Topiwala />} />
        </Routes>
      </I18nextProvider>
    </div>
  );
}

export default App;
