const DonarTable = () => {
  const data = [
    {
      id: 1,
      name: 'Cy Ganderton',
      position: 'Quality Control Specialist',
      company: 'Littel, Schaden and Vandervort',
      country: 'Canada',
      date: '12/16/2020',
    },
    {
      id: 2,
      name: 'Hart Hagerty',
      position: 'Desktop Support Technician',
      company: 'Zemlak, Daniel and Leannon',
      country: 'United States',
      date: '12/5/2020',
    },
    {
      id: 3,
      name: 'Brice Swyre',
      position: 'Tax Accountant',
      company: 'Carroll Group',
      country: 'China',
      date: '8/15/2020',
    },
    {
      id: 4,
      name: 'Marjy Ferencz',
      position: 'Office Assistant I',
      company: 'Rowe-Schoen',
      country: 'Russia',
      date: '3/25/2021',
    },
    {
      id: 5,
      name: 'Yancy Tear',
      position: 'Community Outreach Specialist',
      company: 'Wyman-Ledner',
      country: 'Brazil',
      date: '5/22/2020',
    },
    {
      id: 6,
      name: 'Irma Vasilik',
      position: 'Editor',
      company: 'Wiza, Bins and Emard',
      country: 'Venezuela',
      date: '12/8/2020',
    },
    {
      id: 7,
      name: 'Meghann Durtnal',
      position: 'Staff Accountant IV',
      company: 'Schuster-Schimmel',
      country: 'Philippines',
      date: '2/17/2021',
    },
    {
      id: 8,
      name: 'Sammy Seston',
      position: 'Accountant I',
      company: 'Hara, Welch and Keebler',
      country: 'Indonesia',
      date: '5/23/2020',
    },
    {
      id: 9,
      name: 'Lesya Tinham',
      position: 'Safety Technician IV',
      company: 'Turner-Kuhlman',
      country: 'Philippines',
      date: '2/21/2021',
    },
    {
      id: 10,
      name: 'Zaneta Tewkesbury',
      position: 'VP Marketing',
      company: 'Sauer LLC',
      country: 'Chad',
      date: '6/23/2020',
    },
    {
      id: 11,
      name: 'John Doe',
      position: 'Director of Operations',
      company: 'Smith Enterprises',
      country: 'United States',
      date: '10/15/2020',
    },
    {
      id: 12,
      name: 'Jane Smith',
      position: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      country: 'Canada',
      date: '8/5/2020',
    },
    {
      id: 13,
      name: 'Michael Johnson',
      position: 'Finance Manager',
      company: 'Global Investments Ltd.',
      country: 'United Kingdom',
      date: '9/18/2020',
    },
    {
      id: 14,
      name: 'Maria Rodriguez',
      position: 'HR Coordinator',
      company: 'Bright Futures Corporation',
      country: 'Spain',
      date: '7/30/2020',
    },
    {
      id: 15,
      name: 'Ahmed Ali',
      position: 'Senior Analyst',
      company: 'Tech Solutions Co.',
      country: 'United Arab Emirates',
      date: '11/11/2020',
    },
  ];
  return (
    <div className="overflow-x-auto">
      <div className="text-center py-16 px-4 md:px-28">
        <h1 className="text-3xl md:text-5xl font-bold py-2">
          <span className="text-red-500">Peoples</span> who has{' '}
          <span className="text-green-500">donated</span> till last month
        </h1>
        <p className="md:text-lg">
          Their contributions have made a significant impact on our mission,
          helping us make a difference in the community.
        </p>
      </div>
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Location</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <th>{employee.id}</th>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.company}</td>
              <td>{employee.country}</td>
              <td>{employee.date}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Location</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DonarTable;
