import Image from "next/image";

export const Footer = () => {
  return (
    <div>
      <div className="footer flex lg:flex-row flex-col 2xl:px-[200px] p-10 text-neutral-400 text-md">
        <div className="lg:w-2/5 w-3/4 p-2">
          <Image alt="white logo" src="/deskree.png" width={20} height={20} />
          <p className="pt-3">
            Deskree is a cloud platform that simplifies and optimizes backend
            development and infrastructure management for businesses and
            developers.
          </p>
        </div>
        <div className="flex gap-14">
          <div className="menu menu-vertical gap-2">
            <h6 className="footer-title">Products</h6>
            <a className="link link-hover">BaaS</a>
            <a className="link link-hover">ION</a>
            <a className="link link-hover">Atomic Computing</a>
          </div>
          <div className="menu menu-vertical gap-2">
            <h6 className="footer-title">Solutions</h6>
            <a className="link link-hover">Enterprise</a>
            <a className="link link-hover">Accelerate</a>
          </div>
          <div className="menu menu-vertical gap-2">
            <h6 className="footer-title">Resources</h6>
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
      <div className="2xl:px-[200px]">
        <p className="text-neutral-400 pb-20">
          © Copyright 2024, Deskree Technologies
        </p>
      </div>
    </div>
  );
};
