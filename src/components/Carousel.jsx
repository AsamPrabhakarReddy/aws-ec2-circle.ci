import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Carousel = () => {
  const services = [
    {
      id: 1,
      title: "Appointment Scheduling",
      description:
        "Experience seamless appointment management and hassle-free scheduling. Say goodbye to no-shows and double bookings.",
      image:
        "https://images.pexels.com/photos/16310530/pexels-photo-16310530/free-photo-of-yard-in-traditional-stone-and-wooden-house.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 2,
      title: "Worldwide Accessibility",
      description:
        "Let your clients choose the date and time that works for them. Manage class attendees with our waitlist and other powerful features.",
      image:
        "https://images.pexels.com/photos/16310530/pexels-photo-16310530/free-photo-of-yard-in-traditional-stone-and-wooden-house.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 3,
      title: "Notification Reminders",
      description:
        "Syndeo automatically reminds your clients and team members of upcoming bookings. No more missed appointments and no-Shows",
      image:
        "https://images.pexels.com/photos/16310530/pexels-photo-16310530/free-photo-of-yard-in-traditional-stone-and-wooden-house.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
  ];
  return (
    <div className="bg-white">
      <div className="relative md:pt-20 pt-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="text-center font-semibold md:text-xl text-lg">
              <h1 className="text-cdnColor">
                HERE IS WHAT{" "}
                <span className="text-cdnColorTwo">SYNDEO CAN</span> DO FOR YOU
              </h1>
            </div>
            <div className="text-center font-bold md:text-4xl text-3xl my-4">
              <h1 className="text-cdnColor">One Platform. For any Business</h1>
            </div>
            <div className="max-w-[800px] mx-auto my-6">
              <p className="text-gray-600 md:text-xl text-lg text-center">
                Free online Appointment scheduling software with Payments,
                Invoicing, Sales, Reporting, Customer & Team management.
              </p>
            </div>

            <div className="md:mt-20 mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto lg:gap-0 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="px-4 py-8 text-center md:w-[340px] mx-auto md:h-[340px] rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-cdnColor transition-all duration-300 flex items-center justify-center h-full"
                >
                  <div>
                    <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                      <img src={service.image} alt="" className="-ml-5" />{" "}
                    </div>
                    <h4 className="text-2xl font-bold text-cdnColor mb-2 px-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium leading-6">
                      {service.description}
                    </p>
                    <a
                      href="/"
                      className="flex justify-center items-center cursor-pointer md:mt-12 mt-4"
                    >
                      <HiOutlineArrowNarrowRight
                        className="text-cdnColor"
                        size={24}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center md:mt-12 mt-8">
              <a
                href="/login"
                className="bg-cdnColor text-white font-semibold py-3  text-center px-20 rounded-3xl uppercase"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden h-[90vh] mt-20">
        <div className="absolute inset-0 bg-[#f0f0f0] rounded-tl-3xl rounded-tr-3xl">
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,192L60,197.3C120,203,240,213,360,186.7C480,160,600,96,720,85.3C840,75,960,117,1080,122.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 p-10 text-white max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-12">
            <div className="flex flex-col space-y-4 justify-center">
              <div className="flex md:justify-start justify-center">
                <h1 className="uppercase text-cdnColor font-semibold md:text-xl text-lg">
                  ONLINE BOOKING
                </h1>
              </div>
              <div className="flex md:justify-start justify-center">
                <h1 className="font-bold md:text-4xl text-3xl text-gray-800">
                  Take bookings 24x7
                </h1>
              </div>
              <div className="flex md:justify-start justify-center">
                <p className="text-gray-600 md:text-xl text-lg">
                  With our Online Booking feature, your clients can make
                  bookings 24x7. All you have to do is signup, create your
                  online booking page, set your booking Rules and share it with
                  your clients.
                </p>
              </div>
              <div className="flex md:justify-start justify-center">
                <a
                  href="/login"
                  className="bg-cdnColor text-white font-semibold py-3 text-center px-16 rounded-3xl uppercase mt-4"
                >
                  SIGN UP HERE
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://www.picktime.com/webassets/2021/img/multiple-location-2023.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="p-10 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-12">
            <div className="flex flex-col space-y-4 justify-center">
              <div className="flex md:justify-start justify-center">
                <h1 className="uppercase text-cdnColor font-semibold md:text-xl text-lg">
                  ONLINE BOOKING
                </h1>
              </div>
              <div className="flex md:justify-start justify-center">
                <h1 className="font-bold md:text-4xl text-3xl text-gray-800">
                  Take bookings 24x7
                </h1>
              </div>
              <div className="flex md:justify-start justify-center">
                <p className="text-gray-600 md:text-xl text-lg">
                  With our Online Booking feature, your clients can make
                  bookings 24x7. All you have to do is signup, create your
                  online booking page, set your booking Rules and share it with
                  your clients.
                </p>
              </div>
              <div className="flex md:justify-start justify-center">
                <a
                  href="/login"
                  className="bg-cdnColor text-white font-semibold py-3 text-center px-16 rounded-3xl uppercase mt-4"
                >
                  SIGN UP HERE
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://www.picktime.com/webassets/2021/img/multiple-location-2023.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
