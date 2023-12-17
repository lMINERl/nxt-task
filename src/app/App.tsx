import React from "react";
import AppDrawer from "../layouts/AppDrawer";
import Navbar from "../layouts/Navbar";
import AllSessions from "../pages/AllSessions";

const App = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Navbar open={open} collabseClick={setOpen} />
      <AppDrawer open={open}>
        <AllSessions />
      </AppDrawer>
    </>
  );
};

export default App;
