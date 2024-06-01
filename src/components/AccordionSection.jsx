import Accordion from './Accordion';
const data = [
  {
    id: 1,
    title: 'Language and Culture of Feni District',
    text: 'The geography and topographical features of Feni district, the saline waters of the Bay of Bengal, the influence of saints and religious figures, and the heroic tales of ancestors have all played a significant role in shaping the language and culture of the people of this district.',
  },
  {
    id: 2,
    title: 'Historical Significance of Feni District',
    text: 'Feni district has a rich historical background, with numerous archaeological sites and monuments that reflect its ancient heritage. The district has been a hub of trade and commerce, influenced by various dynasties and colonial powers over the centuries. This historical legacy is evident in the diverse architectural styles and cultural traditions that continue to thrive in the region today.',
  },
  {
    id: 3,
    title: 'Economic Activities in Feni District',
    text: 'The economy of Feni district is primarily based on agriculture, with rice, jute, and various fruits being the main crops. Additionally, the district has a growing industrial sector, including small-scale manufacturing and processing units. Trade and commerce are also significant, benefiting from Feni’s strategic location near major trade routes.',
  },
  {
    id: 4,
    title: 'Educational Institutions in Feni District',
    text: 'Feni district boasts a range of educational institutions, from primary schools to colleges and technical institutes. These institutions provide quality education and have produced many notable scholars and professionals. The emphasis on education is evident in the district’s high literacy rate and the presence of various extracurricular programs that nurture young talents.',
  },
  {
    id: 5,
    title: 'Tourist Attractions in Feni District',
    text: 'Feni district offers several tourist attractions, including historical sites, natural landscapes, and religious shrines. Notable places include the ancient Raj Rajeshwari Temple, the scenic Feni River, and the shrine of Shah Shuja. These attractions draw visitors from across the region, contributing to the local tourism industry and preserving the cultural heritage of Feni.',
  },
  {
    id: 6,
    title: 'Cultural Festivals in Feni District',
    text: 'Feni district celebrates various cultural festivals throughout the year, reflecting the diverse traditions and customs of its people. These festivals include religious observances, harvest festivals, and cultural events that showcase the district’s rich heritage. The festivals are an opportunity for locals and visitors to come together, enjoy traditional music and dance, and celebrate the spirit of unity and community.',
  },
];

const AccordionSection = () => {
  return (
    <div>
      <div className="flex gap-2 p-4">
        <div className="flex-1 mt-4">
          <h1 className="text-3xl text-center font-bold p-4 mb-2">
            Queries About Our District
          </h1>
          {data.map((d, i) => (
            <Accordion key={i} id={d.id} title={d.title} text={d.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
