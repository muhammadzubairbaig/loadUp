// Importing necessary libraries and components
import React from "react"; // React library
import ReactDOM from "react-dom"; // React DOM for rendering
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"; // React Router for routing

import AdminLayout from "layouts/AdminPanel.js"; // Importing the Admin layout component

// Rendering the React app into the DOM
ReactDOM.render(
  <HashRouter>
    {/* Switch will render the first matching route */}
    <Switch>
      {/* Route to display the AdminLayout when the path is '/admin' */}
      <Route path={`/admin`} component={AdminLayout} />
      
      {/* Redirect from the root '/' to the '/admin/dashboard' */}
      <Redirect from={`/`} to="/admin/dashboard" />
    </Switch>
  </HashRouter>,
  document.getElementById("root") // Rendering inside the HTML element with id 'root'
);
