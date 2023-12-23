import React, { Fragment }  from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { Globalstyle } from './global.Style';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <Globalstyle/>
    <Router/>
  </Fragment>
);


