import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: 44,data:'K' },
  { id: 2, name: 'Assets under holding', value: 140,data:'K' },
  { id: 3, name: 'New users annually', value: 1200, data:'' },
];


const HomepageStatisticsSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="bg-gradient-to-r py-24 sm:py-32 flex w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <div className="text-base font-semibold leading-7 text-[#ed1c24]">
                {stat.name}
              </div>
              <div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  {counterOn && (
                    <div className="flex gap-3 justify-center">
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={5}
                        delay={0}
                      />
                      <h1>{stat?.data}</h1>
                    </div>
                  )}
                </ScrollTrigger>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageStatisticsSection;
