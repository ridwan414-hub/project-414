const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
  { id: 3, name: 'Events', value: '157' },
  { id: 3, name: 'Members', value: '1330' },
  { id: 3, name: 'Successful Missions', value: '46' },
];
const Statistics = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 py-24 sm:py-32 flex w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base font-semibold leading-7 text-[#ed1c24]">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
