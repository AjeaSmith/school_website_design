import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Admission from "./pages/Admission";
import Calendar from "./pages/Calendar";
import Curriculum from "./pages/Curriculum";
import Student from "./pages/Student";
import Menu from "./components/Menu";
import "./styles/App.scss";
import Counseling from "./pages/Counseling";
function App() {
  return (
    <Layout>
      <section className="wrapper">
        <section className="header">
          <Header />
        </section>
        <section className="router">
          <Router>
            <Menu />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Admission" component={Admission} />
              <Route path="/Calendar" component={Calendar} />
              <Route path="/Curriculum" component={Curriculum} />
              <Route path="/Student" component={Student} />
              <Route path="/Counseling" component={Counseling} />
            </Switch>
          </Router>
        </section>
      </section>
    </Layout>
  );
}

export default App;
