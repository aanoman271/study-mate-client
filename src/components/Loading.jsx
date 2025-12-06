import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Tailwind/DaisyUI classes for the spinner. 
        Note: Added 'bg-white' for consistency, though 'min-h-screen' handles the background.
      */}
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
};

export default Loading;
