import React, { useState, useEffect } from "react";
import "./App.css";
import "./reset.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Amount from "./containers/Amount";
import Contact from "./containers/Contact";
import End from "./containers/End";
import Location from "./containers/Location";
import Situation from "./containers/Situation";
import State from "./containers/State";
import Type from "./containers/Type";
import Use from "./containers/Use";

const App = () => {
  const returnPage = Cookies.get("returnPage");

  const [page, setPage] = useState(returnPage);

  if (returnPage === undefined) {
    setPage("type");
    Cookies.set("returnPage", page);
  } else {
    Cookies.set("returnPage", page);
  }

  const returnData = Cookies.get("returnData");
  const [inputState, setInputState] = useState(returnData);

  const initialState = {
    type: "",
    state: "",
    use: "",
    situation: "",
    zipCode: "",
    amount: {
      estimated: 0,
      works: 0,
      notarialFees: 0,
      total: 0
    }
  };

  if (returnData === undefined) {
    setInputState(initialState);
    Cookies.set("returnData", inputState);
  } else {
    Cookies.set("returnData", inputState);
  }

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div className="wrapper">
          <Switch>
            <Route path="/">
              {page === "type" ? (
                <Type
                  setPage={setPage}
                  page={page}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "state" ? (
                <State
                  setPage={setPage}
                  page={page}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "use" ? (
                <Use
                  setPage={setPage}
                  page={page}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "situation" ? (
                <Situation
                  setPage={setPage}
                  page={page}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "location" ? (
                <Location
                  setPage={setPage}
                  page={page}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "amount" ? (
                <Amount
                  setPage={setPage}
                  page={page}
                  setInputState={setInputState}
                  inputState={inputState}
                  initialState={initialState}
                />
              ) : null}
              {page === "contact" ? (
                <Contact
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
              {page === "end" ? (
                <End
                  setPage={setPage}
                  page={page}
                  setInputState={setInputState}
                  inputState={inputState}
                />
              ) : null}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
