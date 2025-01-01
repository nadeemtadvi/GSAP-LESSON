import React from "react";

import Box from "./Components/Box";
import Button from "./Components/Button";
import Context from "./Components/Context";
import Container from "./Components/Container";

const App = () => {
  return (
    <div>
      <div className="flex-div">
      <Box/>
      <Container />
      </div>
      <div className="flex-div">
      <Button />
      <Context />
    </div>
    </div>
  );
};

export default App;
