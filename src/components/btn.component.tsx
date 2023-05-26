import React from "react";

export const Btn: React.FC<{ title: string; url?: string }> = ({
  title,
  url,
}) => {
  return (
    <div>
      <button className="relative text-sm font-semibold py-3 after:bg-accent after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-1 after:rounded">
        <a href={url} target="_blank">
          {title}
        </a>
      </button>
    </div>
  );
};

export const Line = () => {
  return <div className="bg-text1 w-full h-0.5  rounded opacity-60"></div>;
};

// export default Btn;
