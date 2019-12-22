import React, { useState } from "react";
import "./App.css";
import "./reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import Forms from "./containers/Forms";
import Login from "./containers/Login";
import Form from "./containers/Form";

const App = () => {
  // We create a state id. This state is generate after we send the axios.post request page contact. This id will then be sent to the page "end" to give this id number to the user
  const [id, setId] = useState("");

  // We create a cookie called returnPage with the state "page".
  const returnPage = Cookies.get("returnPage");

  // The state page allows the navigation between the differents containers without changing the path.
  const [page, setPage] = useState(returnPage);

  // If returnPage is undefined, it means the user has never visited the website and so no cookies are stocked. You go on the first state of page (Type), else, you go on the last page you visited
  if (returnPage === undefined) {
    setPage("type");
    Cookies.set("returnPage", page);
  } else {
    Cookies.set("returnPage", page);
  }

  // We create a cookie called returnData with the state inputState
  const returnData = Cookies.getJSON("returnData");
  // The state inputState is a global state which will stocked all data you registered on the website and set the value with the cookie

  const [inputState, setInputState] = useState(returnData);

  // The global state is the same as the model in the backend. At the beginning, it is empty.
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
    },
    email: "",
    notification: false
  };

  // If cookies are empty, we set cookies with the empty initial state else we set the cookies with the data we received which is stocked in the global state
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/forms">
              <Forms />
            </Route>
            <Route path="/form/:id">
              <Form />
            </Route>
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
                  initialState={initialState}
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
                />
              ) : null}
              {page === "contact" ? (
                <Contact
                  setPage={setPage}
                  setInputState={setInputState}
                  inputState={inputState}
                  setId={setId}
                />
              ) : null}
              {page === "end" ? (
                <End
                  setPage={setPage}
                  page={page}
                  setInputState={setInputState}
                  inputState={inputState}
                  id={id}
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
