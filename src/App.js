import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Formatter from './components/Formatter';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Visa from './pages/Visa';
import Call from './pages/Call';
import Contact from './pages/Contact';
import Speaker from './pages/Speaker';
import Travel from './pages/Travel';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Formatter />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/reg",
        element: <Registration />
      },
      {
        path: "/Visa",
        element: <Visa />
      },
      {
        path: "/Call",
        element: <Call />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Speakers",
        element: <Speaker />
      },
      {
        path: "/Travel",
        element: <Travel />
      }
    ]
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
   
  );
}

export default App;
