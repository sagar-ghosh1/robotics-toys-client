import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import Banner from "../pages/Home/Banner/Banner";
import NotFound from "../pages/NotFound/NotFound";

const Main = () => {
   return (
      <div className="container m-auto rounded">
         <NavBar></NavBar>
         <Banner></Banner>
         <NotFound></NotFound>
         <Footer></Footer>
         <Outlet></Outlet>
      </div>
   );
};

export default Main;