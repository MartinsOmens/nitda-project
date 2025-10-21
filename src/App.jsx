import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogIn from "./components/AdminLogIn";
import EventRegistration from "./components/EventRegistration";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/log-in" element = {<AdminLogIn/>}/>
      <Route path="/event-registration" element = {<EventRegistration/>}/>
      <Route path="/dashboard" element = {<AdminDashboard/>}>
      
      </Route>

      
    </Routes>
  );
}

export default App;
