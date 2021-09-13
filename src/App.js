import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Form from "./Form";
import * as yup from "yup";
import {schema} from './validation/Formtest'

const toppings = ["Extra_Cheese", "No_Cheese", "Pepperoni", "Sausage", "Chicken", "Bacon"]
const initialFormValues = {
  name:"",
  size: "",
  sauce:"",
  Extra_Cheese: false,
  No_Cheese: false,
  pepperoni: false,
  sausage: false,
  chicken: false, 
  bacon: false,
  instruction: ""
}

const initialFormErros = {
  name:"",
  size:"",
  sauce:"",
}

const initialDisabled = [];

const initialOrders=  [];

const App = () => {
  const [order, setOrder] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors,  setFormErrors] = useState(initialFormErros)
  const [disable, setDisable] = useState(initialDisabled)

  const changeForm = (name, input) => {
    yup.reach(schema, name)
      .validate(input)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: input,
    });
  }

  const submitOrder = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      No_Cheese: formValues.No_Cheese,
      Extra_Cheese: formValues.Extra_Cheese,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      chicken: formValues.chicken,
      bacon: formValues.bacon,
      instructions: formValues.instruction,
    }
    postNewOrder(newOrder);
  }

  const postNewOrder = newOrder => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        console.log(res.data);
        setOrder([res.data, ...order]);
        console.log(order, "these are the orders");
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.log("oops an error occured!", err);
        setFormValues(initialFormValues);
      });
  }
  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisable(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <header>
        <h1>Lambda Eats</h1>
      </header>
      <Router>
        <div>
          <ul className="navagation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link id="order-pizza" to="/order">Order Here</Link>
            </li>
          </ul>  
          <Switch>
            <Route path="/order" component={Form}>
              <Form
              values={formValues}
              toppings={toppings}
              changes={changeForm}
              submit={submitOrder}
              errors={formErrors}
              disable={disable}
              />
            </Route>
            <Route exact path="/"component={Home}></Route>
          </Switch>
        </div>
      </Router>
      
      
    </div>
  );
};
export default App;
