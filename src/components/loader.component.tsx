import React, { useState, useEffect } from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-10 w-10 md:h-16 md:w-16 border-t-4 border-b-4 border-accent"></div>
      <h1 className="py-3 text-4xl md:text-6xl  animate-pulse">
        {" "}
        <span className="text-accent">@</span>cyber_jev
      </h1>
    </div>
  );
};

interface LoaderComponentProps {
  children: React.ReactNode;
}

const LoaderComponent: React.FC<LoaderComponentProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to demonstrate the loader
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="bg-bg-body m-auto transition-opacity transition-transform duration-500 ease-in-out">
      {isLoading ? <Loader /> : children}
    </div>
  );
};

export default LoaderComponent;
