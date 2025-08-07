import React , {lazy , Suspense} from "react";
import { useEffect , useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom"; 
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const [UserName , setUserName] = useState();

   useEffect(() => {
    const data = {
      name:"Yuvraj Singh"
    };

   },[]);


  return (
    <UserContext.Provider value={{loggedinUser:UserName ,setUserName}}> // overriding the default value
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
  {
    path: "/",
    element: <Body/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }, 
  {
    path: "/restaurants/:id",
    element: <RestaurantMenu />
  } ,
  {
    path: "/grocery",
    element: <Suspense fallback={<h1>Loading.........</h1>}><Grocery /></Suspense> ,
  },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
