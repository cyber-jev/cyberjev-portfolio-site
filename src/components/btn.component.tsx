import React from "react";

export const Btn: React.FC<{
  id?: number;
  title: string;
  url?: string;
}> = ({ title, url, id }) => {
  return (
    <div>
      <button className="relative text-sm font-semibold py-3 hover:translate-y-1 after:bg-accent after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-1 after:rounded lg:text-lg">
        <a
          href={url}
          target={id == 1 ? "_blank" : ""}
          className="relative p-1 "
        >
          {title}
          <span className="absolute left-0 top-0 h-full w-2/3 bg-accent opacity-0 hover:opacity-40 transition-opacity transform -skew-x-12 z-0"></span>
        </a>

        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></span>
      </button>
    </div>
  );
};

export const Line = () => {
  return <div className="bg-text1 w-full h-0.5  rounded opacity-60"></div>;
};

// export default Btn;
