import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaMobileAlt, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
   return (
      <div>
         <footer className="footer text-white p-20 bg-[#5e5e58]">
            <div className='gap-3'>
               <img className="h-20" src="https://i.ibb.co/37g9qMt/project-logo.png" alt="" />
               <h1 className="text-2xl font-bold">Robotics Toys</h1>

               <p className="font-medium">Robotics Toys Industries Ltd.<br />Providing tech since 2005</p>
               <div className='flex items-center'>
                  <p><FaMapMarkerAlt></FaMapMarkerAlt></p>
                  <p>Mirpur, Dhaka, Bangladesh</p>
               </div>
               <div className='flex items-center'>
                  <p><FaMobileAlt></FaMobileAlt></p>
                  <p>+0123456789</p>
               </div>
               <div className='flex items-center'>
                  <p><AiOutlineMail></AiOutlineMail></p>
                  <p>roboticstoys@gmail.com</p>
               </div>
            </div>
            <div className='gap-7'>
               <span className="footer-title">Company</span>
               <a className="link link-hover">About us</a>
               <a className="link link-hover">Contact</a>
               <a className="link link-hover">Blog</a>
               <a className="link link-hover">All Products</a>
               <a className="link link-hover">Locations Map</a>
            </div>
            <div className='gap-7'>
               <span className="footer-title">Ouick Links</span>
               <a className="link link-hover">Support</a>
               <a className="link link-hover">Helpline</a>
               <a className="link link-hover">Courese</a>
               <a className="link link-hover">About</a>
               <a className="link link-hover">Event</a>
            </div>
            <div className='gap-7'>
               <span className="footer-title">Services</span>
               <a className="link link-hover">My account</a>
               <a className="link link-hover">Login</a>
               <a className="link link-hover">Terms & Conditions</a>
               <a className="link link-hover">Promotional Offer</a>
               <a className="link link-hover">Order tracking</a>
            </div>


            <div className='gap-7'>
               <span className="footer-title">Product</span>
               <a className="link link-hover">Tutorials</a>
               <a className="link link-hover">Releases</a>
               <a className="link link-hover">Solutions</a>
               <a className="link link-hover">Overview</a>
               <a className="link link-hover">Features</a>
            </div>

            <div className='gap-6'>
               <div>
                  <h5 className='text-xl'>Social Site</h5>
                  <div className='flex gap-3 text-xl mt-3'>
                     <a href=""><FaGoogle></FaGoogle></a>
                     <a href=""><FaFacebook></FaFacebook></a>
                     <a href=""><FaYoutube></FaYoutube></a>
                     <a href=""><FaInstagram></FaInstagram></a>
                     <a href=""><FaLinkedin></FaLinkedin></a>
                  </div>
                  <div className='mt-12 text-base'>
                     <p>Copyright 2023-2024 All Rights Reserved.</p>
                  </div>
               </div>

            </div>
         </footer>
      </div>
   );
};

export default Footer;