import React, { ReactNode } from 'react';
import useColor from '@/hooks/useColor';

type TextProps = {
  children: ReactNode;
  isTitle?: boolean;
};

const Text = ({ children, isTitle }: TextProps) => {
  const { colors } = useColor();
  if (isTitle) {
    return (
      <h3
        style={{
          color: colors.third,
          fontSize: '64px',
          textAlign: 'center',
          textShadow: '0 5px 5px rgba(0,0,0,.2)',
        }}
      >
        {children}
      </h3>
    );
  }

  return <p style={{ fontSize: '24px', lineHeight: '28px' }}> {children}</p>;
};

export default Text;
