import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//redux
import { Provider } from "react-redux";
import store from "./store";

//components
import Home from "./components/Home";
import Products from "./components/Categories";
import About from "./components/About";
import Backpacks from "./components/Category/Backpacks";
import Backpack from "./components/Category/Backpack";
import Bags from "./components/Category/Bags";
import Bag from "./components/Category/Bag";
import Others from "./components/Category/Others";
import Other from "./components/Category/Other";
import Contact from "./components/Contact";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <div id="alert">
                        <p id="alert-msg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Dolor, fuga?
                        </p>
                    </div>
                    <Switch>
                        <Fragment>
                            <div className="container-fluid p-0">
                                <Route exact path={"/"} component={Home} />
                                <Route
                                    exact
                                    path={"/products"}
                                    component={Products}
                                />
                                <Route path={"/about"} component={About} />
                                <Route
                                    path={"/backpacks"}
                                    component={Backpacks}
                                />
                                <Route
                                    path="/backpack/:id"
                                    component={Backpack}
                                />
                                <Route path={"/bags"} component={Bags} />
                                <Route path="/bag/:id" component={Bag} />
                                <Route path={"/others"} component={Others} />
                                <Route path="/other/:id" component={Other} />
                                <Route path="/contact" component={Contact} />
                            </div>
                        </Fragment>
                    </Switch>
                    <footer className="footer">
                        <p>St.ranac &copy;2020</p>
                    </footer>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
