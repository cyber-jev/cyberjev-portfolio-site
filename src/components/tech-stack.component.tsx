import React from "react";
import { images } from "../utils/data.utils";
import { Line } from "./btn.component";

type StackItems = {
  id: number;
  title: string;
  icon: string;
  rating: string;
};

type TechStackProps = {
  items: StackItems[];
};

const StackItem: React.FC<{ item: StackItems }> = ({ item }) => {
  const { id, title, icon, rating } = item;
  return (
    <div className="">
      <img src={icon} alt={title} className="w-12 my-1 md:w-20" />
      <div>
        {/* <p className="text-xl font-bold">{title}</p> */}
        <p className="text-text2">
          {rating} Year{Number(rating) > 1 ? "s" : ""} Experience
        </p>
      </div>
    </div>
  );
};

const TeckStack: React.FC<TechStackProps> = ({ items }) => {
  return (
    <section className="relative overflow-hidden ">
      <div className="max-w-[1200px] m-auto">
        <h2 className="text-2xl mb-2 px-2.5 font-bold">Tech Stack</h2>
        <div className="px-2.5 m-auto w-max grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7">
          {items.map((item) => (
            <StackItem key={item.id} item={item} />
          ))}
        </div>

        <img
          src={images.patterRings}
          alt="pattern rings image"
          className="absolute z-[-1] -right-52 bottom-2 opacity-70"
        />
        <div className="my-14 px-2.5">
          <Line />
        </div>
      </div>
    </section>
  );
};

export default TeckStack;
