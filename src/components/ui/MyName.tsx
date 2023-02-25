import React from 'react';
import Text from './Text.component';
import useColor from '../../hooks/useColor';

const MyName = () => {
  const { colors } = useColor();
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        backgroundColor: colors.dark,
        padding: '1rem 3rem',
        borderRadius: ' 0 0 1rem 1rem',
      }}
    >
      <Text>Juan Daniel Rios Ramirez | Frontend Developer</Text>
    </div>
  );
};

export default MyName;
