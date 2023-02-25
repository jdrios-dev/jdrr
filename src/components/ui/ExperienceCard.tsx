import React from 'react';
import { Experience } from '../pages/Experience';
import Text from './Text.component';

type ExperienceCardProp = {
  item: Experience;
};

const ExperienceCard = ({ item }: ExperienceCardProp) => {
  const { company, role, dates, activities } = item;
  return (
    <div
      style={{
        marginBottom: '1rem',
      }}
    >
      <h3
        style={{
          marginBottom: '0.5rem',
        }}
      >
        {company}
      </h3>
      <Text>
        {role}{' '}
        <span
          style={{
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          ({dates})
        </span>
      </Text>
      <Text>{activities}</Text>
    </div>
  );
};

export default ExperienceCard;
