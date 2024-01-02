import React from "react";
import ReactDOM from "react-dom/client";

// const Title = () => <h1>Namaste React using JSX</h1>;
const Title = function () {
  return <h1>Namaste React using JSX</h1>;
};

const HeadingComponent = () => (
  <div className="heading">
    <Title />
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
