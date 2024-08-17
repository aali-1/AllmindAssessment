"use client";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export const MobileNav = () => {
  const [state, setState] = useState("off");
  return (
    <div>
      <div className="navbar bg-base-100 py-5 text-lg">
        <div className="flex-1 navbar-start">
          <a href="#">
            <Image alt="Logo" src="/logo.svg" width={130} height={24} />
          </a>
        </div>

        <div
          className="navbar-end gap-4"
          onClick={() => (state == "off" ? setState("on") : setState("off"))}
        >
          <a className="btn bg-neutral-950">
            <IoMenu size={40} />
          </a>
        </div>
      </div>
      {state == "on" && (
        <div className="absolute bg-darkBlack w-full px-5 z-50">
          <div className="gap-4 items-center text-center py-7 flex">
            <a className=" btn hover:bg-deskreehover bg-deskree rounded-md text-lg sm:px-12 px-16">
              Login
            </a>
            <a className="btn btn-outline border rounded-md sm:px-12 px-16 text-lg hover:bg-white bg-neutral-950 border-neutral-600">
              Signup
            </a>
          </div>
          <hr className="text-neutral-800"></hr>
          <div className="flex flex-col gap-14 text-lg py-6">
          <div className="menu menu-vertical gap-2">
            <h6 className="footer-title">Our Products</h6>
            <hr className="text-neutral-800"></hr>
            <a className="link link-hover">BaaS</a>
            <a className="link link-hover">ION</a>
            <a className="link link-hover">Atomic Computing</a>
          </div>
          <div className="menu menu-vertical gap-2">
            <h6 className="footer-title">For Businesses</h6>
            <hr className="text-neutral-800"></hr>
            <a className="link link-hover">Enterprise</a>
            <a className="link link-hover">Accelerate</a>
          </div>
          <div className="menu menu-vertical gap-2">
            <h6 className="footer-title">Resources</h6>
            <hr className="text-neutral-800"></hr>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Brand Guidelines</a>
            <a className="link link-hover">Privacy</a>
            <a className="link link-hover">Terms</a>
            <a className="link link-hover">Whistleblower</a>
            <a className="link link-hover">Trust Center</a>
          </div>
          <div className="menu menu-vertical gap-2">
            <h6 className="footer-title">Contact</h6>
            <hr className="text-neutral-800"></hr>
            <a className="link link-hover">Support</a>
            <a className="link link-hover">Investors</a>
            <a className="link link-hover">Partnerships</a>
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">LinkedIn</a>
            <a className="link link-hover">Discord</a>
            <a className="link link-hover">GitHub</a>
            <a className="link link-hover">Youtube</a>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};
