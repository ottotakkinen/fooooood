import React from 'react';

const MainContainer = ({ children }) => {
  return (
    <div className="font-body flex flex-col min-h-screen bg-zinc-100 text-slate-900 items-center">
      {children}
    </div>
  );
};

export default MainContainer;
