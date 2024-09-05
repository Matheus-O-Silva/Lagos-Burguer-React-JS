import React from "react";
import { ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignIn = () => {
   return (
      <>
         <Navbar />

         <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                  <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                     <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                        Entrar
                     </h2>
                     <p className="mt-2 text-sm text-gray-600">
                        Ainda não possui uma conta?{" "}
                        <a
                           href="#"
                           title=""
                           className="font-semibold text-black transition-all duration-200 hover:underline">
                           Cria sua conta gratuitamente
                        </a>
                     </p>
                     <form action="#" method="POST" className="mt-8">
                        <div className="space-y-5">
                           <div>
                              <label
                                 htmlFor=""
                                 className="text-base font-medium text-gray-900">
                                 {" "}
                                 Email{" "}
                              </label>
                              <div className="mt-2">
                                 <input
                                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="email"
                                    placeholder="Email"></input>
                              </div>
                           </div>
                           <div>
                              <div className="flex items-center justify-between">
                                 <label
                                    htmlFor=""
                                    className="text-base font-medium text-gray-900">
                                    {" "}
                                    Senha{" "}
                                 </label>
                                 <a
                                    href="#"
                                    title=""
                                    className="text-sm font-semibold text-black hover:underline">
                                    {" "}
                                    Esqueceu sua senha?{" "}
                                 </a>
                              </div>
                              <div className="mt-2">
                                 <input
                                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="password"
                                    placeholder="Password"></input>
                              </div>
                           </div>
                           <div>
                              
                           </div>
                        </div>
                     </form>
                     <div className="mt-3 space-y-3">
                        <button
                           type="button"
                           className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black ">
                           <span className="inline-block mr-2">
                              <svg
                                 className="w-6 h-6 text-rose-500"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 fill="currentColor">
                                 <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                              </svg>
                           </span>
                           Entrar com Google
                        </button>
                        <button
                           type="button"
                           className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100">
                           <span className="inline-block mr-2">
                              <svg
                                 className="h-6 w-6 text-[#2563EB]"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 fill="currentColor">
                                 <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                              </svg>
                           </span>
                           Entrar com Facebook
                        </button>
                     </div>
                  </div>
               </div>
               <div className="w-full h-full">
                  <img
                     className="object-cover w-full h-full mx-auto rounded-md"
                     src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                     alt=""
                  />
               </div>
            </div>
         </section>

         <Footer />
      </>
   );
};

export default SignIn;
