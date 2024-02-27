import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="overflow-x-scroll ">
      <Link href="About" className="mx-3 my-3 ">
        About
      </Link>
      <Link href="Product" className="mx-3 my-3 ">
        Product
      </Link>
      <Link href="Cources0" className="mx-3 my-3 ">
        Cources0
      </Link>
      <Link href="Cources1" className="mx-3 my-3 ">
        Cources1
      </Link>
      <Link href="Cources2" className="mx-3 my-3 ">
        Cources2
      </Link>
    </div>
  );
};

export default Header;
