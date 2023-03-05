import React, { ReactNode } from 'react';
import getColor from '@/hooks/useColor';
import Text from './Text.component';

type CardProps = {
  children: ReactNode;
  title: string;
};

const Card = ({ children, title }: CardProps) => {
  const { colors } = getColor();

  return (
    <div
      className="card-content"
      style={{
        display: 'flex',
        flexDirection: 'column',

        border: `3px solid ${colors.secondary}`,
        padding: '2rem',
        margin: '10px',

        minWidth: '320px',
        width: '50%',

        borderRadius: '5px',
      }}
    >
      {children}
      <div style={{ flex: 1, flexGrow: 1, minHeight: '1rem' }}></div>
      <Text isTitle>{title}</Text>
    </div>
  );
};

export default Card;
