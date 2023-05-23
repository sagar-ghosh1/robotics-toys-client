import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import Banner from "../pages/Home/Banner/Banner";

const Main = () => {
   return (
      <div className="container m-auto rounded">
         <NavBar></NavBar>
         <Banner></Banner>
         <Outlet></Outlet>
         {/* <Footer></Footer> */}
      </div>
   );
};

export default Main;