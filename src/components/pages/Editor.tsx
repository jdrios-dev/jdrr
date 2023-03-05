import React from 'react';
import { items, ItemType } from '@/utils/data';
import useColor from '@/hooks/useColor';
import NavigationButtons, {
  NavigationButtonsProps,
} from '../ui/NavigationButtons';

function Editor({ activeStep, setActiveStep }: NavigationButtonsProps) {
  const { colors } = useColor();
  return (
    <div
      className="editor"
      style={{
        border: '2px solid white',
        margin: '10px',
        minWidth: '300px',
        width: '50%',
        minHeight: '400px',
        backgroundColor: colors.dark,
        borderRadius: '5px',
      }}
    >
      <div>
        <NavigationButtons
          setActiveStep={setActiveStep}
          activeStep={activeStep}
          showExtension
        />
      </div>

      <div
        style={{
          padding: '16px 0',
        }}
      >
        {activeStep.code?.map((line, index) => (
          <div
            key={`${line}-${index}`}
            style={{
              fontFamily: 'roboto',
              display: 'flex',
              marginBottom: '3px',
            }}
          >
            <p
              style={{
                textAlign: 'end',
                width: '24px',
                margin: '0 16px',
                opacity: '0.4',
                fontSize: '1.5rem',
              }}
            >
              {index + 1}
            </p>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.5rem',
              }}
            >
              {line}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Editor;
