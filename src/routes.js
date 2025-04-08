// === PAGES ===
import Home from "./Pages/Home.jsx";
import StartPage from "./Pages/StartPage.jsx";

// === ROUTER ===
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/start",
    element: <StartPage />,
  },
 
];

export default routes;
