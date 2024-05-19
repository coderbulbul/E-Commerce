"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoLogoYoutube } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLocationOn, MdFacebook } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";
import { LuHeadphones } from "react-icons/lu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";

export default function Navbar() {
  const [mobNav, setMobNav] = useState(true);

  const [itemStates, setItemStates] = useState([true, true, true]); // State for toggling individual items

  const toggleItem = (index: any) => {
    const newStates = [...itemStates];
    newStates[index] = !newStates[index];
    setItemStates(newStates);
  };

  return (
    <header>
      {/* Header top section */}
      <div className="hidden lg:block">
        <div className="flex flex-row justify-between">
          <div>
            <ul>
              <li>
                <a href="#">About url</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
            </ul>
          </div>
          <div>
            <p>a line of text will scroll here bottom to top</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Need help</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">USD</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">header-middle</div>
      <div className="hidden lg:block">header-bottom</div>

      {/* Mobile promo */}
      <div className="bg-primary text-white text-center p-2 text-sm font-lato lg:hidden">
        <span>
          Grand opending, <strong>up to 15% </strong>
          off all items. Only <strong>3 days</strong> left
        </span>
      </div>

      {/* Mobile navbar */}
      <div className="container mx-auto lg:hidden">
        <div className="flex flex-row justify-between items-center p-3">
          <div className="text-4xl">
            <button onClick={() => setMobNav(true)}>
              <IoIosMenu />
            </button>
          </div>
          {/* Site Logo */}
          <div className="">
            <Image src="/logo.svg" width={150} height={150} alt="" />
          </div>
          <div className="flex flex-row text-3xl">
            <div className="relative px-2">
              <a href="#">
                <IoMdHeartEmpty />
                <span className="absolute top-0 -right-0.5 text-xs bg-primary text-white rounded-full h-5 w-5 text-center leading-5">
                  4
                </span>
              </a>
            </div>
            <div className="relative px-2">
              <a href="#">
                <IoCartOutline />
                <span className="absolute -top-0 -right-0.5 text-xs bg-primary text-white  rounded-full h-5 w-5 text-center leading-5">
                  2
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile sidebar top */}
      <div
        className={` w-96 bg-white fixed top-0 bottom-0 left-0 min-h-screen border transition-all duration-200 ${
          mobNav
            ? "visible opacity-1 translate-x-0 translate-y-0"
            : "invisible opacity-0 -translate-x-48"
        } `}
      >
        <div className="overflow-x-hidden overflow-y-auto h-full pb-7">
          <div className="flex flex-row items-center justify-between px-7 py-4 border-b">
            <div>
              <Image src="/logo.svg" width={150} height={150} alt="logo" />
            </div>
            <div className="text-sm text-center">
              <button
                onClick={() => setMobNav(false)}
                className="p-1.5 bg-green-100 rounded-full"
              >
                <RxCross2 />
              </button>
            </div>
          </div>
          {/* Mobile sidebar body */}
          <div className="px-7 py-7">
            {/* Mobile sidebar search bar */}
            <div className="pb-4">
              <form action="#" className="relative">
                <input
                  type="text"
                  placeholder="Search for items.."
                  className="focus:outline-none bg-slate-200 rounded w-full py-0.5 h-11 pl-5 pr-12"
                />
                <button className="absolute right-2 top-1/3">
                  <CiSearch />
                </button>
              </form>
            </div>
            {/* Mobile sidebar menu items start*/}
            <div id="mobileNabBar">
              <nav className="text-sm bolder-1 text-slate-500">
                <ul className="transition-all duration-1000">
                  {/* Home sub menu */}
                  <li
                    onClick={() => toggleItem(0)}
                    className="relative border-b py-3 "
                  >
                    <a
                      href="#"
                      type="button"
                      className="font-bold hover:text-primary"
                    >
                      Home
                    </a>
                    <span
                      className={`absolute top-4 right-0 transition-all duration-300 ${
                        itemStates[0] ? "" : "rotate-180"
                      }`}
                    >
                      <IoIosArrowDown />
                    </span>
                    <ul
                      className={` pl-1 pt-1  ${
                        itemStates[0] ? "hidden " : ""
                      } `}
                    >
                      <li className="py-2">
                        <a href="#" className="hover:text-primary">
                          Home-1
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="#" className="hover:text-primary">
                          Home-2
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="#" className="hover:text-primary">
                          Home-3
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Shop sub menu */}
                  <li
                    onClick={() => toggleItem(1)}
                    className="relative border-b py-3"
                  >
                    <a
                      href="#"
                      type="button"
                      className="font-bold hover:text-primary"
                    >
                      Shop
                    </a>
                    <span
                      className={`absolute top-4 right-0 ${
                        itemStates[1] ? "" : "rotate-180"
                      }`}
                    >
                      <IoIosArrowDown />
                    </span>
                    <ul className={` pl-1  ${itemStates[1] ? "hidden" : ""} `}>
                      <li className="py-2">
                        <a href="#" className="hover:text-primary">
                          Shop-1
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="#" className="hover:text-primary">
                          Shop-2
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="#" className="hover:text-primary">
                          Shop-3
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Vendors sub menu */}
                  <li
                    onClick={() => toggleItem(2)}
                    className="relative border-b py-3"
                  >
                    <a
                      href="#"
                      type="button"
                      className="font-bold hover:text-primary"
                    >
                      Vendors
                    </a>
                    <span
                      className={`absolute top-4 right-0 ${
                        itemStates[2] ? "" : "rotate-180"
                      }`}
                    >
                      <IoIosArrowDown />
                    </span>
                    <ul className={` pl-1  ${itemStates[2] ? "hidden" : ""} `}>
                      <li className="py-2">
                        <a href="#" className="hover:text-primary">
                          Vendor-1
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="#" className="hover:text-primary">
                          Vendor-2
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="#" className="hover:text-primary">
                          Vendor-3
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Mega menu item */}
                  <li className=" border-b py-3">
                    <a
                      href="#"
                      type="button"
                      className="font-bold hover:text-primary"
                    >
                      Mega Menu
                    </a>
                  </li>
                  {/* Blog menu item */}
                  <li className=" border-b py-3">
                    <a
                      href="#"
                      type="button"
                      className="font-bold hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  {/* Pages menu item */}
                  <li className=" border-b py-3">
                    <a
                      href="#"
                      type="button"
                      className="font-bold hover:text-primary"
                    >
                      Pages
                    </a>
                  </li>
                  {/* Language menu item */}
                  <li className=" border-b py-3">
                    <a
                      href="#"
                      type="button"
                      className="font-bold hover:text-primary"
                    >
                      Language
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Mobile left navbar menu location*/}
            <div className="rounded border my-7 p-5 text-sm">
              <div className="flex flex-row items-center mb-2.5">
                <span className="pr-2 text-primary text-xl font-bold">
                  <MdOutlineLocationOn />
                </span>
                <a href="#">Our Location</a>
              </div>
              <div className="flex flex-row items-center mb-2.5">
                <span className="pr-2 text-primary text-xl font-bold">
                  <CgLogIn />
                </span>
                <a href="#">Log In / Sign Up</a>
              </div>
              <div className="flex flex-row items-center">
                <span className="pr-2 text-primary text-lg font-bold">
                  <LuHeadphones />
                </span>
                <a href="#">(+088)-1973-532400</a>
              </div>
            </div>
            {/* Mobile left navbar Social Media */}
            <div className="mb-12">
              <h6 className="font-bold text-slate-700">Follow Us</h6>
              <div className="flex flex-row item-center text-primary text-3xl py-2">
                <a href="#" className="pr-2 ">
                  <MdFacebook />
                </a>
                <a href="#" className="pr-2 ">
                  <AiFillTwitterCircle />
                </a>
                <a href="#" className="pr-2 ">
                  <FaInstagramSquare />
                </a>
                <a href="#" className="pr-2 ">
                  <BsPinterest />
                </a>
                <a href="#" className="pr-2 ">
                  <IoLogoYoutube />
                </a>
              </div>
            </div>
            {/* Sidebar Copyright section */}
            <div className="text-sm text-slate-500">
              Copyright 2024 @coderbulbul. All rights reserved. Powered by
              CoderTheme
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
