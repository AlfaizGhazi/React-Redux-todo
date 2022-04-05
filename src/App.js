import * as React from "react";
import { useSelector } from "react-redux";

import { Navbar } from "./Components";
import { Todo } from "./Screens";
import { GlobalStyle } from "./StyledComponents";

const App = () => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Navbar />
      <Todo />
    </>
  );
};

export default App;
