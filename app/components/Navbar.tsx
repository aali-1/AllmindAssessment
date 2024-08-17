"use client";
import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Navbar = () => {
  const [state, setState] = useState("nothing");
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar  bg-base-100 py-5 text-lg">
        <div
          className="flex-1 navbar-start"
          onClick={() => setState("nothing")}
        >
          <a href="#">
            <Image alt="Logo" src="/logo.svg" width={130} height={24} />
          </a>
        </div>

        <div className="navbar-center hidden xl:flex gap-4 -m-[120px]">
          <ul className="menu menu-horizontal text-lg">
            <li>
              <div
                className="flex"
                onClick={() =>
                  state == "products"
                    ? setState("nothing")
                    : setState("products")
                }
              >
                <summary>Products</summary>
                <MdKeyboardArrowDown size={25} />
              </div>
            </li>

            <li>
              <div
                className="flex"
                onClick={() =>
                  state == "solutions"
                    ? setState("nothing")
                    : setState("solutions")
                }
              >
                <summary>Solutions</summary>
                <MdKeyboardArrowDown size={25} />
              </div>
            </li>
            <li>
              <a onClick={() => setState("nothing")}>Pricing</a>
            </li>
            <li>
              <a onClick={() => setState("nothing")}>Documentation</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-4" onClick={() => setState("nothing")}>
          <a className="btn hover:bg-deskreehover bg-deskree rounded-md text-lg px-8">
            Login
          </a>
          <a className="btn btn-outline border rounded-md px-8 text-lg hover:bg-white border-neutral-600">
            Signup
          </a>
        </div>
      </div>
      {state == "products" && (
        <div className="card bg-darkBlack w-full absolute border rounded-lg border-neutral-800">
          <div className="px-12 pt-7">
            <p className="text-neutral-500 pb-3">Our products</p>
            <hr className="py-3 text-neutral-800"></hr>
            <p>Deskree Backend</p>
            <p className="text-neutral-500 pt-1 pb-4">
              Pre-built backend services with ION and DAC
            </p>
            <p>ION</p>
            <p className="text-neutral-500 pt-1 pb-4">
              Visual workflows for backend processes
            </p>
            <p>Atomic Computing</p>
            <p className="text-neutral-500 pt-1 pb-4">
              Scalable cloud solutions with ease
            </p>
          </div>
        </div>
      )}
      {state == "solutions" && (
        <div className="card bg-darkBlack w-full absolute border rounded-lg border-neutral-800">
          <div className="px-12 pt-7">
            <p className="text-neutral-500 pb-3">Business Solutions</p>
            <hr className="py-3 text-neutral-800"></hr>
            <p>Enterprise program</p>
            <p className="text-neutral-500 pt-1 pb-4">
              For large-scale businesses requiring scalable solution
            </p>
            <p>Accelerate program</p>
            <p className="text-neutral-500 pt-1 pb-4">
              For startups and agencies looking for faster APIs and integration
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
