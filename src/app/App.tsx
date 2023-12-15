import React from "react";
import AppDrawer from "../layouts/AppDrawer";
import Navbar from "../layouts/Navbar";

const App = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Navbar collabseClick={setOpen} />
      <AppDrawer open={open}></AppDrawer>
    </>
  );
};

export default App;
