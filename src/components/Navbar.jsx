import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
   const menuItems = [
      {
         name: "Home",
         href: "/",
      },
      {
         name: "Sobre nós",
         href: "/about",
      },
      {
         name: "Menu",
         href: "/Menu",
      },
   ];

   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <>
         <div className="relative w-full px-4 bg-white">
            <div className="flex items-center justify-between py-2 mx-auto max-w-7xl sm:px-6 lg:px-10">
               <Link to={"/"}>
                  <div className="inline-flex items-center space-x-2">
                     <div className="flex flex-col justify-between my-5 lg:flex-row">
                        <div className="">
                           <div className="font-bold ">
                              Lagos <span className="text-yellow">Burger Express</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </Link>

               <div className="items-start hidden grow lg:flex ">
                  <ul className="inline-flex space-x-8 ml-52">
                     {menuItems.map((item) => (
                        <li key={item.name}>
                           <Link
                              to={item.href}
                              className="text-sm font-semibold text-gray-800 transition-all ease-in-out duration-400 hover:text-yellow">
                              {item.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Cart Icon */}
               {
                  <Link to={"/cart"}>
                     <FaShoppingCart className="ml-10 text-xl lg:text-2xl lg:-mx-12 md:ml-96 sm:ml-80 " />
                  </Link>
               }

               <div className="hidden lg:block">
                  <Link to={"/signIn"}>
                     <button
                        type="button"
                        className="w-full px-3 py-2 text-sm font-semibold text-black rounded-md shadow-sm bg-yellow hover:bg-black/80 hover:text-white ">
                        Entrar
                     </button>
                  </Link>
               </div>

               {/* Mobile Screen */}
               <div className="lg:hidden">
                  <Menu
                     onClick={toggleMenu}
                     className="w-6 h-6 cursor-pointer"
                  />
               </div>
               {isMenuOpen && (
                  <div className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform lg:hidden">
                     <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                           <div className="flex items-center justify-between">
                              <div className="-mr-2">
                                 <button
                                    type="button"
                                    onClick={toggleMenu}
                                    className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 ">
                                    <span className="sr-only">Close menu</span>
                                    <X className="w-6 h-6" aria-hidden="true" />
                                 </button>
                              </div>
                           </div>
                           <div className="mt-6">
                              <nav className="grid gap-y-4">
                                 {menuItems.map((item) => (
                                    <Link
                                       key={item.name}
                                       to={item.href}
                                       className="flex items-center p-3 -m-3 text-sm font-semibold rounded-md hover:bg-gray-50">
                                       <span className="ml-3 text-base font-medium text-gray-900">
                                          {item.name}
                                       </span>
                                    </Link>
                                 ))}
                              </nav>
                           </div>

                           <Link to={"/signIn"}>
                              <button
                                 type="button"
                                 className="w-full px-3 py-2 mt-4 text-sm font-semibold text-black rounded-md shadow-sm bg-yellow hover:bg-black/80 hover:text-white ">
                                 Entrar
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </>
   );
};

export default Navbar;
