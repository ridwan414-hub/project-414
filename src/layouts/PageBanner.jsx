const PageBanner = ({ bannerTitle, bannerDescription }) => {
  return (
    <div className="w-full relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://i.ibb.co/nbkcW85/OIP-u-XXJOn-So-TDmk-JU3-B3-me-AAHa-EK-w-290-h-180-c-7-r-0-o-5-pid-1.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-20"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto flex justify-center max-w-7xl px-6 lg:px-8 ">
        <div className="flex flex-col gap-5 max-w-2xl lg:mx-0">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-center text-white ">
            {bannerTitle ? bannerTitle : 'Work with us'}
          </h2>
          <p className="md:text-2xl leading-8 text-center text-balance text-gray-300">
            {bannerDescription
              ? bannerDescription
              : 'Anim aute id magna aliqua ad ad non deserunt sunt'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
