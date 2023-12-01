import NavBar from "../components/navBar.jsx";
import {Outlet} from "react-router-dom";

function Layout() {
   return (
       <>
           <nav>
               <NavBar/>
           </nav>
           <main>
               <Outlet/>
           </main>
       </>
   )
}

export default Layout;