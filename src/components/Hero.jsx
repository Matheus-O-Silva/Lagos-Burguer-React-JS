import React from "react";

const Hero = () => {
   return (
      <div className="relative -mt-8 bg-white lg:w-full">
         <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 mt-4">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
               <div className="flex items-center p-1 space-x-2 bg-gray-100 rounded-full max-w-max">
                  <div className="bg-white rounded-full ">
                  </div>
                  <p className="text-sm font-medium">
                     Experimente hoje os sabores da Lagos Burger Express &rarr;
                  </p>
               </div>
               
               <h1 className="mt-8 text-3xl font-normal tracking-tight text-black md:text-4xl lg:text-6xl">
                  Peça seu lanche do conforto da sua casa!
                  <div className="font-serif text-4xl font-bold text-yellow md:text-6xl">
                     {" "}
                     Rápido e fácil
                  </div>
               </h1>
               <p className="mt-8 text-lg text-gray-700">
                  "Mate a sua vontade, você merece o melhor! Seja bem-vindo ao{" "}
                  <span className="font-semibold text-yellow">Lagos Burger Express</span>,
                  onde seu lanche é feito com carinho!"
               </p>
               <form action="" className="flex items-start mt-8 space-x-2">
                  <div>
                  </div>
               </form>
            </div>

            <div className="relative px-2 lg:col-span-5 xl:col-span-6 lg:mb-9">
               <img
                  className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[530px] xl:aspect-[1/1] lg:mt-14 rounded-3xl shadow-2xl "
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

export default Hero;
