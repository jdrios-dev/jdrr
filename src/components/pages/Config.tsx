import React from 'react';
import getColor from '@/hooks/useColor';
import colors, { NameColors } from '../../utils/colors';
import Text from '../ui/Text.component';

const MyConfig = () => {
  const themes: NameColors[] = ['cold', 'warm', 'retro', 'fall'];
  const { changeCustomColor } = getColor();

  return (
    <div>
      <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
        <Text>Select your favorite color</Text>
      </div>
      {themes.map((color) => (
        <button
          style={{
            padding: '5px  10px',
            borderRadius: '5px',
            marginRight: '5px',
            backgroundColor: colors?.[color].dark,
            border: `4px solid ${colors?.[color].third}`,
            color: colors?.[color].third,
            marginBottom: '3px',
          }}
          key={color}
          onClick={() => changeCustomColor(color)}
        >
          <Text>{color}</Text>
        </button>
      ))}
    </div>
  );
};

export default MyConfig;
