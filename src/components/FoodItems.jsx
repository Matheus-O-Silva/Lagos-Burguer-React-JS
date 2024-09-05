import React from "react";
import toast, { Toaster } from "react-hot-toast";

import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";

const FoodItems = () => {
   const handleToast = (name) => toast.success(`${name} adicionado ao carrinho`);

   return (
      <>
         <Toaster position="top-center" reverseOrder={false} />
         <div className="py-5">
            <span className="flex items-center justify-center lg:w-full lg:h[100vw] lg:my-14">
               <h1 className="text-2xl font-bold lg:text-5xl">
                  Itens <span className="font-serif text-yellow">do nosso</span>{" "}
                  Menu
               </h1>
            </span>
            <div className="flex flex-wrap justify-center gap-10 lg:mx-20">
               {FoodData.map((food) => {
                  return (
                     <FoodCard
                        key={food.id}
                        id={food.id}
                        name={food.name}
                        price={food.price}
                        desc={food.desc}
                        rating={food.rating}
                        img={food.img}
                        handleToast={handleToast}
                     />
                  );
               })}
            </div>
         </div>
      </>
   );
};

export default FoodItems;
