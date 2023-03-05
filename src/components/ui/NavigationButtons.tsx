import useColor from '@/hooks/useColor';
import { items, ItemType } from '@/utils/data';
import React from 'react';

export type NavigationButtonsProps = {
  activeStep: ItemType;
  setActiveStep: (item: ItemType) => void;
  showExtension?: boolean;
};

const NavigationButtons = ({
  setActiveStep,
  activeStep,
  showExtension,
}: NavigationButtonsProps) => {
  const { colors } = useColor();
  return (
    <div className="navigation-button-container">
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => setActiveStep(item)}
          style={{
            padding: '5px 10px',
            borderRadius: '5px 5px 0 0',
            border: `1px solid ${colors.dark}`,
            backgroundColor:
              activeStep.name === item.name ? colors.dark : colors.secondary,
            boxShadow:
              activeStep.name === item.name
                ? 'none'
                : 'inset 0 -4px 4px rgba(0,0,0,0.3)',
            color:
              activeStep.name === item.name ? 'white' : 'rgba(255,255,255,0.7)',
            transition: 'all 0.3s',
            fontSize: '1.1rem',
          }}
        >
          {showExtension ? item.name : item.mobileName}
        </button>
      ))}
    </div>
  );
};

export default NavigationButtons;
