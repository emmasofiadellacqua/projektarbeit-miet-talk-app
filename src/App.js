
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home_page from "./pages/Home_page";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
import Profile from "./pages/Profile";
import Intro_page_1 from "./pages/Intro_page_1";
import Intro_page_2 from "./pages/Intro_page_2";
import Intro_page_3 from "./pages/Intro_page_3";
import Documents from "./pages/Documents";
import News from "./pages/News";
import Pdf_viewer from "./components/pdf_viewer";
import Calendar from "./pages/Scheduler";
import Upload_files from "./pages/File_upload";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home_page} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/form" component={Form}/>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/intro_1" component={Intro_page_1}/>
          <Route exact path="/intro_2" component={Intro_page_2}/>
          <Route exact path="/intro_3" component={Intro_page_3}/>
          <Route exact path="/documents" component={Documents}/>
          <Route exact path="/newsfeed" component={News}/>
          <Route exact path="/file_upload" component={Upload_files}/>
          <Route exact path="/pdf_viewer" component={Pdf_viewer}/>
          <Route exact path="/scheduler" component={Calendar}/>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;