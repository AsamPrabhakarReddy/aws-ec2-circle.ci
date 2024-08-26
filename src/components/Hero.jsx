import { Clock8, Earth, CalendarCheck, Laptop } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[#f0f0f0]">
      <div className="px-4 lg:px-14 max-w-[1400px] mx-auto md:min-h-[80vh] md:h-[80vh]">
        <div className="md:pt-40 pt-32">
          <div className="text-center">
            <h1 className="md:text-5xl text-4xl font-bold text-cdnColor">
              Simplified Scheduling for everyone
            </h1>
          </div>
          <div className="text-center my-4 max-w-[800px] mx-auto">
            <p className="text-gray-600 md:text-xl text-lg">
              Free online Appointment scheduling software with Payments,
              Invoicing, Sales, Reporting, Customer & Team management.
            </p>
          </div>

          <div className="flex justify-center items-center my-8 md:my-6">
            <a
              href="/login"
              className="bg-cdnColor text-white font-semibold py-3  text-center px-20 rounded-3xl uppercase"
            >
              get started for free
            </a>
          </div>
        </div>

        <div className="md:pt-12 pt-4 pb-4">
          <div className="relative pb-4">
            <div className="w-full">
              <div className="w-full px-4 mx-auto max-w-[1400px]">
                <div className="justify-center w-full text-center pb-4">
                  <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                      <div className=" flex flex-col justify-center items-center">
                        <div className="my-2">
                          <Earth className=" w-[35px] h-[35px] text-colorFour" />
                        </div>
                        <div className="my-2 w-full">
                          <h1 className="text-colorThree font-semibold w-full text-center">
                            Worldwide Access Availablity
                          </h1>
                        </div>
                      </div>
                      <div className=" flex flex-col justify-center items-center">
                        <div className="my-2">
                          <Clock8 className=" w-[35px] h-[35px] text-colorFour" />
                        </div>
                        <div className="my-2 w-full">
                          <h1 className="text-colorThree font-semibold w-full text-center">
                            Scalable Timing Facility
                          </h1>
                        </div>
                      </div>
                      <div className=" flex flex-col justify-center items-center">
                        <div className="my-2">
                          <CalendarCheck className=" w-[35px] h-[35px] text-colorFour" />
                        </div>
                        <div className="my-2 w-full">
                          <h1 className="text-colorThree font-semibold w-full text-center">
                            Simple Navigation Procedure
                          </h1>
                        </div>
                      </div>
                      <div className=" flex flex-col justify-center items-center">
                        <div className="my-2">
                          <Laptop className=" w-[35px] h-[35px] text-colorFour" />
                        </div>
                        <div className="my-2 w-full">
                          <h1 className="text-colorThree font-semibold w-full text-center">
                            Complete Online Approach
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
