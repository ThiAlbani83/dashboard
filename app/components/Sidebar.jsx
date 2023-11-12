"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsBoxes, BsPeople, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import { BiMessageDetail, BiHelpCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { TbLogout, TbBrandGraphql } from "react-icons/tb";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[12%] h-screen bg-gray-800 flex flex-col items-start py-0">
      <div className="flex items-center justify-center">
        <Image src={Logo} alt="logo" className="w-32" />
      </div>
      <div className="h-0 w-full border border-transparent border-gray-200 mb-16 mt-0 absolute top-16" />
      <div className="px-3 mt-10">
        <button
          className="text-gray-300 text-[18px] flex gap-6 items-center absolute hover:text-pink-500"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Fraude {!isOpen ? <BsChevronDown /> : <BsChevronUp />}
        </button>
        {isOpen && (
          <div className="relative top-10 px-5">
            <ul className="flex flex-col gap-4 text-gray-300 text-[16px]">
              <Link
                href={"/"}
                className="hover:text-pink-500 border-l-[3px] border-separate border-transparent hover:border-pink-500 px-1"
              >
                Geral
              </Link>
              <Link
                href={"/"}
                className="hover:text-pink-500 border-l-[3px] border-separate border-transparent hover:border-pink-500 px-1"
              >
                Usuários
              </Link>
              <Link
                href={"/"}
                className="hover:text-pink-500 border-l-[3px] border-separate border-transparent hover:border-pink-500 px-1"
              >
                Jogos de Cassino
              </Link>
              <Link
                href={"/"}
                className="hover:text-pink-500 border-l-[3px] border-separate border-transparent hover:border-pink-500 px-1"
              >
                Sportsbook
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
