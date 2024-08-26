import Accordion from "../components/Accordion.jsx";

const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="relative pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="p-10 max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-12">
                <div className="flex justify-center items-center">
                  <img
                    src="https://www.picktime.com/webassets/2021/img/payment_and_invoicing-2023.svg"
                    alt=""
                  />
                </div>

                <div className="flex flex-col space-y-4 justify-center">
                  <div className="flex md:justify-start justify-center">
                    <h1 className="uppercase text-cdnColor font-semibold md:text-xl text-lg">
                      REMINDERS
                    </h1>
                  </div>
                  <div className="flex md:justify-start justify-center">
                    <h1 className="font-bold md:text-4xl text-3xl md:text-start text-center text-gray-800">
                      Notifying your clients automatically
                    </h1>
                  </div>
                  <div className="flex md:justify-start justify-center">
                    <p className="text-gray-600 md:text-xl text-lg">
                      Picktime automatically reminds your clients and team
                      members of upcoming bookings. No more missed appointments
                      and no-Shows
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
