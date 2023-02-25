import React from 'react';
import Text from './Text.component';

type ListProps = {
  items: string[];
  title: string;
};

const List = ({ items, title }: ListProps) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
        <Text>{title}</Text>
      </div>
      <ul style={{ maxHeight: '140px', columnCount: '2' }}>
        {items?.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
      </ul>
    </div>
  );
};

export default List;
