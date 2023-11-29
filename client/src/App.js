import React, { Fragment, useReducer } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";
import ReactWhatsapp from 'react-whatsapp';


function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
        <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" />
      </LayoutContext.Provider>
    </Fragment>
  );
}

export default App;
