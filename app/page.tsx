import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FaCircleCheck } from "react-icons/fa6";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { MobileNav } from "./components/MobileNav";

export default function Home() {
  return (
    <main className="">
      <div className="bg-black 2xl:px-[12vw] lg:px-10 px-5 pb-28">
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <div className="lg:mt-[156px]">
          <p className="md:text-7xl lg:w-4/5 sm:w-full pb-8 text-4xl">
            Your backend more simplified, scalable, and manageable than ever.
          </p>

          <div className="flex gap-8">
            <a className=" btn hover:bg-deskreehover bg-deskree rounded-md text-lg px-10">
              Get Started
            </a>
            <a className="btn btn-outline border rounded-md px-8 text-lg hover:bg-white border-neutral-600">
              Book A Demo
            </a>
          </div>
          <div className="border-neutral-600 border w-full mt-[100px] rounded-lg z-0">
            <div className="px-10 py-16">
              <div className="lg:flex border-b border-neutral-600 pb-36 gap-4">
                <p className="w-full text-2xl">
                  Build cloud infrastructure with ease, powered by open-source,
                  Atomic architecture.
                </p>
                <div className="lg:hidden pt-4"></div>
                <p className="text-neutral-400">
                  Deploy scalable and reusable workflows for your complex
                  backend processes using nodes with no configuration, running
                  independently, all managed by the Atomic architecture.
                </p>
              </div>

              <div className="mt-16">
                <p className="text-lg">Our Products</p>
                <div className="lg:flex pt-10 gap-2">
                  <div className="card lg:w-1/3  sm:w-full bg-base-300 items-center rounded-lg pt-10">
                    <Image
                      src="baas.svg"
                      alt="baas logo"
                      width={270}
                      height={217}
                    />

                    <div className="card-body pt-20 w-full items-start">
                      <h2 className="card-title text-baas">BaaS</h2>
                      <p className="text-baas py-3">
                        Pre-built backend services for web and mobile apps,
                        powered by ION and DAC.
                      </p>

                      <div className="flex">
                        <a className="" href="">
                          Learn More! -{">"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4"></div>
                  <div className="card lg:w-1/3  sm:w-full bg-base-300 items-center rounded-lg pt-10 -px-5">
                    <Image
                      src="ion.svg"
                      alt="ion logo"
                      width={270}
                      height={217}
                    />

                    <div className="card-body pt-20 w-full items-start">
                      <h2 className="card-title text-ion">ION</h2>
                      <p className="text-ion py-3">
                        Manage Integration, APIs and complex backend processes,
                        visually with built in nodes.
                      </p>

                      <div className="flex">
                        <a className="pr-0.5" href="">
                          Learn More! -{">"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4"></div>
                  <div className="card lg:w-1/3 sm:w-full bg-base-300 items-center rounded-lg pt-10 -px-5">
                    <Image
                      src="atomic.svg"
                      alt="atomic logo"
                      width={270}
                      height={217}
                    />

                    <div className="card-body pt-20 w-full items-start">
                      <h2 className="card-title">Atomic Computing</h2>
                      <p className="py-3">
                        Create and deploy scalable cloud infrastructure with
                        ease with Atomic framework.
                      </p>

                      <div className="flex">
                        <a className="pr-0.5" href="">
                          Learn More! -{">"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <p className="text-lg">Solution for businesses</p>
            <div className="lg:flex pt-10 gap-2">
              <div className="card lg:w-5/12  sm:w-full bg-orange items-center rounded-lg pt-3">
                <div className="card-body w-full items-start">
                  <h2 className="card-title text-6xl pb-36">
                    Enterprise program
                  </h2>
                  <p className="text-xl">
                    Discover how Deskree provides secure and robust scalability
                    and integration for large scale businesses.
                  </p>

                  <div className="flex items-center gap-2 pt-5 pb-10">
                    <FaCircleCheck size={30} />
                    <p className=""> SOC 2 Type II, GDPR & HIPPA Compliant</p>
                  </div>
                  <a href="">
                    <HiMiniArrowLongRight size={50} href="" />
                  </a>
                </div>
              </div>

              <div className="pt-4"></div>

              <div className="card lg:w-auto h-full hidden lg:block">
                <Image
                  alt="office image"
                  src="/office-image.jpg"
                  width={400}
                  height={367}
                  className="rounded-lg"
                />
              </div>

              <div className="pt-4"></div>

              <div className="card lg:w-5/12 sm:w-full bg-neutral-100 items-center rounded-lg pt-10 -px-5">
                <div className="card-body w-full items-start">
                  <h2 className="card-title text-6xl pb-36 text-neutral-950">
                    Accelerate program
                  </h2>
                  <p className="text-xl text-neutral-950">
                    Learn how Deskree helps your team remain small, build
                    features fast, and get to market faster, all with no{" "}
                  </p>

                  <a href="">
                    <HiMiniArrowLongRight size={50} href="" color="black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="py-28">
            <div className="card w-full bg-base-300 items-center rounded-lg">
              <div className="card-body w-full items-center">
                <h2 className="card-title text-3xl text-center py-10 md:px-10">
                  With Deskree, developers and business focus more on innovation
                  and less on complex cloud setup.
                </h2>
                <div className="sm:flex gap-6 items-center text-center">
                  <a className=" btn hover:bg-deskreehover bg-deskree rounded-md text-lg px-20">
                    Get Started
                  </a>
                  <div className="sm:hidden pt-4"></div>
                  <a className="btn btn-outline border rounded-md px-16 text-lg hover:bg-white bg-neutral-950 border-neutral-600">
                    Book A Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-neutral-600"></hr>
      <div className="sm:hidden md:block">
        <Footer />
      </div>
    </main>
  );
}
