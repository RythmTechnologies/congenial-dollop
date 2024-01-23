import React, { useState } from "react";

const Header = () => {
  return (
    <header className=" sticky top-0 w-full bg-primary-foreground/60 z-10 backdrop-blur">
      <nav className="container mx-auto py-4 flex justify-between max-w-2xl">
        <div>Logo</div>
      </nav>
    </header>
  );
};

export default Header;
