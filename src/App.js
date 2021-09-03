
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home_page from "./pages/Home_page";
import Login from "./Login";
import SignUp from "./SignUp";
import Intro_page_1 from "./pages/Intro_page_1";
import Intro_page_2 from "./pages/Intro_page_2";
import Intro_page_3 from "./pages/Intro_page_3";
import Documents from "./pages/Documents";
import News from "./pages/News";
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
          <Route exact path="/intro_1" component={Intro_page_1}/>
          <Route exact path="/intro_2" component={Intro_page_2}/>
          <Route exact path="/intro_3" component={Intro_page_3}/>
          <Route exact path="/documents" component={Documents}/>
          <Route exact path="/newsfeed" component={News}/>

        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;