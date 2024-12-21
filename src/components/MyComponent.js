import React from "react";
import { Helmet } from "react-helmet";

const MyComponent = () => {
  return (
    <div>
      <Helmet>
        <script src="./public/js/forescript.js" type="text/javascript" />
      </Helmet>
      <h1></h1>
    </div>
  );
};

export default MyComponent;