import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
