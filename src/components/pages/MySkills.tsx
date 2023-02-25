import React from 'react';
import List from '../ui/Lists';

const MySkills = () => {
  const technicalSkills = [
    'Next JS',
    'React',
    'React Native',
    'GraphQL',
    'JS / HTML / CSS',
    'Git',
    'Hasura',
    'Cypress',
  ];
  const additionalSkills = [
    'Atention to Details',
    'Collaboration',
    'Problem Solving',
    'Time Management',
    'Continuous Learning',
    'Figma',
  ];
  return (
    <div>
      <List items={technicalSkills} title="Technical Skills" />
      <List items={additionalSkills} title="Additional Skills" />
    </div>
  );
};

export default MySkills;
