import React from 'react';
import ExperienceCard from '../ui/ExperienceCard';

export type Experience = {
  id: string;
  company: string;
  dates: string;
  role: string;
  activities: string;
};

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: '001',
      company: 'Ventura Travel GmbH',
      dates: 'Jan 21 - Current',
      role: 'Frontend Developer',
      activities:
        'Create the websites for more than 14 brands with one code base for a total of +30 websites',
    },
    {
      id: '002',
      company: 'Avianca S.A.',
      dates: 'Jul 19 - Apr 20',
      role: 'Financial Analyst',
      activities: 'Budget Controller ( Commercial VP and Directions reports )',
    },
  ];

  return (
    <div>
      {experiences?.map((item) => (
        <ExperienceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Experience;
