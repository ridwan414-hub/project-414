import {
  UsersIcon,
  AcademicCapIcon,
  HeartIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Community Outreach',
    description:
      'We are dedicated to extending our reach to underserved communities, providing essential services and support to improve their quality of life. Our initiatives focus on education, healthcare, and social welfare, ensuring that everyone has access to the resources they need.',
    icon: UsersIcon,
  },
  {
    name: 'Educational Programs',
    description:
      'Our educational programs aim to empower individuals through knowledge and skills development. From literacy campaigns to vocational training, we strive to create opportunities for lifelong learning and personal growth.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Health and Wellness',
    description:
      'We promote health and wellness through various initiatives, including medical camps, mental health support, and nutrition programs. Our goal is to ensure that every individual has the opportunity to lead a healthy and fulfilling life.',
    icon: HeartIcon,
  },
  {
    name: 'Cultural Exchange',
    description:
      'Our cultural exchange programs foster mutual understanding and respect among diverse communities. By promoting dialogue and collaboration, we aim to build a more inclusive and harmonious world.',
    icon: GlobeAltIcon,
  },
];

const AboutUsFeatureSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-5xl py-6 font-semibold leading-7 text-indigo-600">
            Our Missions and Initiatives
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Making a Difference in the Community
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our initiatives are designed to uplift and support individuals and
            communities. We believe in the power of education, health, and
            cultural understanding to create a better world for everyone.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFeatureSection;
